'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { categories } from '../../../data/content';
import { useProgress } from '../../../context/ProgressContext';
import Sidebar from '../../../components/Sidebar';
import DarkModeToggle from '../../../components/DarkModeToggle';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function LessonPage({
  params,   
}: {
  params: { categorySlug: string; lessonSlug: string };
}) {
  const router = useRouter();
  const { progress, completeLesson, saveQuizScore } = useProgress();
  const [showQuiz, setShowQuiz] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  // Move useEffect before any conditionals
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Find the category and lesson
  const category = categories.find((c) => c.slug === params.categorySlug);
  const lesson = category?.lessons.find((l) => l.slug === params.lessonSlug);

  if (!category || !lesson) {
    return <div>Lesson not found</div>;
  }

  // Process the content to remove the first heading (which is the title)
  // This prevents the title from appearing twice
  const processedContent = lesson.content.replace(/^# .*$/m, '').trim();

  const isLessonCompleted = progress.completedLessons.includes(lesson.id);
  const hasQuizScore = lesson.quiz.id in progress.quizScores;

  // Find next lesson
  const currentLessonIndex = category.lessons.findIndex((l) => l.id === lesson.id);
  const nextLesson = category.lessons[currentLessonIndex + 1];
  
  // Find next category and its first lesson
  const currentCategoryIndex = categories.findIndex((c) => c.id === category.id);
  const nextCategory = categories[currentCategoryIndex + 1];
  const firstLessonOfNextCategory = nextCategory?.lessons[0];

  const handleAnswerSelect = (questionId: string, answer: string) => {
    if (quizSubmitted) return;
    
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: answer,
    });
  };

  const handleQuizSubmit = () => {
    // Calculate score
    const totalQuestions = lesson.quiz.questions.length;
    let correctAnswers = 0;

    lesson.quiz.questions.forEach((question) => {
      if (selectedAnswers[question.id] === question.correctAnswer) {
        correctAnswers++;
      }
    });

    const calculatedScore = Math.round((correctAnswers / totalQuestions) * 100);
    setScore(calculatedScore);
    setQuizSubmitted(true);
    
    // Save score and mark lesson as completed
    saveQuizScore(lesson.quiz.id, calculatedScore);
    if (!isLessonCompleted) {
      completeLesson(lesson.id);
    }
  };

  const handleNextLesson = () => {
    if (nextLesson) {
      router.push(`/lessons/${category.slug}/${nextLesson.slug}`);
    } else if (firstLessonOfNextCategory) {
      router.push(`/lessons/${nextCategory.slug}/${firstLessonOfNextCategory.slug}`);
    } else {
      router.push('/dashboard');
    }
  };

  return (
    <div className="flex min-h-screen bg-white dark:bg-black text-black dark:text-white transition-theme">
      <Sidebar />
      
      <main className="flex-1 p-8 pl-0 md:pl-72 overflow-y-auto">
        <header className={`sticky top-0 z-30 bg-white dark:bg-black transition-all duration-300 ${
          isScrolled ? 'shadow-md dark:shadow-gray-800/20 py-3' : 'py-6'
        }`}>
          <div className="max-w-4xl mx-auto px-6 flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                {category.title}
              </p>
              <h1 className={`font-bold transition-all duration-300 ${
                isScrolled ? 'text-xl' : 'text-3xl'
              }`}>{lesson.title}</h1>
            </div>
            <DarkModeToggle />
          </div>
        </header>
        
        <div className="max-w-4xl mx-auto px-6 py-8">
          {!showQuiz ? (
            <div>
              <div className="prose dark:prose-invert max-w-none mb-12">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{processedContent}</ReactMarkdown>
              </div>
              
              <div className="mt-12 flex flex-col sm:flex-row justify-between gap-4 bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700">
                <div>
                  <h3 className="text-lg font-bold mb-1">Ready to test your knowledge?</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 sm:mb-0">
                    {hasQuizScore 
                      ? `You've already completed this quiz with a score of ${progress.quizScores[lesson.quiz.id]}%.` 
                      : 'Take the quiz to mark this lesson as complete.'}
                  </p>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => setShowQuiz(true)}
                    className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-lg transition-colors shadow-sm"
                  >
                    {hasQuizScore ? 'Retake Quiz' : 'Take Quiz'}
                  </button>
                  
                  {isLessonCompleted && (
                    <button
                      onClick={handleNextLesson}
                      className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 py-2 px-6 rounded-lg transition-colors shadow-sm"
                    >
                      Next Lesson
                    </button>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="mb-8">
                <button
                  onClick={() => {
                    setShowQuiz(false);
                    setQuizSubmitted(false);
                    setSelectedAnswers({});
                  }}
                  className="flex items-center text-purple-600 dark:text-purple-400 hover:underline mb-4"
                >
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to lesson
                </button>
                <h2 className="text-2xl font-bold mb-2">{lesson.quiz.title}</h2>
              </div>
              
              {quizSubmitted ? (
                <div>
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 mb-8">
                    <h3 className="text-xl font-bold mb-2">Quiz Results</h3>
                    <p className="text-3xl font-bold mb-2">
                      <span className={score >= 70 ? 'text-green-600 dark:text-green-400' : 'text-yellow-600 dark:text-yellow-400'}>
                        {score}%
                      </span>
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {score >= 70 
                        ? 'Great job! You\'ve passed the quiz.' 
                        : 'Keep learning! You can retake the quiz to improve your score.'}
                    </p>
                    
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 mb-4 overflow-hidden">
                      <div 
                        className={`h-4 rounded-full animate-progress ${
                          score >= 70 ? 'bg-gradient-to-r from-green-400 to-green-600' : 'bg-gradient-to-r from-yellow-400 to-yellow-600'
                        }`}
                        style={{ width: `${score}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  {lesson.quiz.questions.map((question, index) => (
                    <div 
                      key={question.id} 
                      className="mb-6 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700"
                    >
                      <h3 className="text-lg font-medium mb-4">
                        {index + 1}. {question.text}
                      </h3>
                      
                      <div className="space-y-3 mb-4">
                        {question.options.map((option) => {
                          const isSelected = selectedAnswers[question.id] === option;
                          const isCorrect = option === question.correctAnswer;
                          
                          let bgColor = 'bg-white dark:bg-gray-800';
                          let borderColor = 'border-gray-200 dark:border-gray-700';
                          let textColor = 'text-gray-800 dark:text-gray-200';
                          
                          if (isSelected && isCorrect) {
                            bgColor = 'bg-green-50 dark:bg-green-900/20';
                            borderColor = 'border-green-500';
                            textColor = 'text-green-800 dark:text-green-200';
                          } else if (isSelected && !isCorrect) {
                            bgColor = 'bg-red-50 dark:bg-red-900/20';
                            borderColor = 'border-red-500';
                            textColor = 'text-red-800 dark:text-red-200';
                          } else if (isCorrect) {
                            bgColor = 'bg-green-50 dark:bg-green-900/10';
                            borderColor = 'border-green-500';
                            textColor = 'text-green-800 dark:text-green-200';
                          }
                          
                          return (
                            <div
                              key={option}
                              className={`p-4 rounded-lg border ${borderColor} ${bgColor} ${textColor} transition-colors`}
                            >
                              <div className="flex justify-between items-center">
                                <span>{option}</span>
                                {isCorrect && (
                                  <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                  </svg>
                                )}
                                {isSelected && !isCorrect && (
                                  <svg className="w-5 h-5 text-red-600 dark:text-red-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                  </svg>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                  
                  <div className="mt-8 flex justify-between">
                    <button
                      onClick={() => {
                        setShowQuiz(false);
                        setQuizSubmitted(false);
                        setSelectedAnswers({});
                      }}
                      className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 py-2 px-6 rounded-lg transition-colors shadow-sm"
                    >
                      Back to Lesson
                    </button>
                    
                    <button
                      onClick={handleNextLesson}
                      className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-lg transition-colors shadow-sm"
                    >
                      {nextLesson 
                        ? 'Next Lesson' 
                        : firstLessonOfNextCategory 
                          ? 'Next Category' 
                          : 'Back to Dashboard'}
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  {lesson.quiz.questions.map((question, index) => (
                    <div 
                      key={question.id} 
                      className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700"
                    >
                      <h3 className="text-lg font-medium mb-4">
                        {index + 1}. {question.text}
                      </h3>
                      
                      <div className="space-y-3 mb-4">
                        {question.options.map((option) => {
                          const isSelected = selectedAnswers[question.id] === option;
                          
                          return (
                            <div
                              key={option}
                              className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                                isSelected
                                  ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20 text-purple-800 dark:text-purple-200'
                                  : 'border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-700 hover:bg-purple-50/50 dark:hover:bg-purple-900/10'
                              }`}
                              onClick={() => handleAnswerSelect(question.id, option)}
                            >
                              <div className="flex items-center">
                                <div className={`w-5 h-5 rounded-full border mr-3 flex items-center justify-center ${
                                  isSelected 
                                    ? 'border-purple-500 bg-purple-500' 
                                    : 'border-gray-300 dark:border-gray-600'
                                }`}>
                                  {isSelected && (
                                    <div className="w-2 h-2 rounded-full bg-white"></div>
                                  )}
                                </div>
                                {option}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                  
                  <div className="mt-8 flex justify-end">
                    <button
                      onClick={handleQuizSubmit}
                      disabled={Object.keys(selectedAnswers).length !== lesson.quiz.questions.length}
                      className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-lg transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Submit Quiz
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
} 