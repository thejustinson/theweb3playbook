'use client';

import Link from 'next/link';
import { categories } from '../../data/content';
import { useProgress } from '../../context/ProgressContext';
import Sidebar from '../../components/Sidebar';
import DarkModeToggle from '../../components/DarkModeToggle';

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const { progress } = useProgress();
  
  const category = categories.find((c) => c.slug === params.slug);
  
  if (!category) {
    return <div>Category not found</div>;
  }
  
  const completedInCategory = category.lessons.filter(
    lesson => progress.completedLessons.includes(lesson.id)
  ).length;
  
  const percentComplete = Math.round(
    (completedInCategory / category.lessons.length) * 100
  );

  return (
    <div className="flex min-h-screen bg-white dark:bg-black text-black dark:text-white transition-theme">
      <Sidebar />
      
      <main className="flex-1 p-8 pl-0 md:pl-72 overflow-y-auto">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">{category.title}</h1>
              <p className="text-gray-600 dark:text-gray-400">{category.description}</p>
            </div>
            <DarkModeToggle />
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 mb-8">
            <h2 className="text-lg font-bold mb-3">Your Progress</h2>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mb-3 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-purple-500 to-purple-700 h-3 rounded-full animate-progress" 
                style={{ width: `${percentComplete}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-sm">
              <p className="text-gray-600 dark:text-gray-400">
                {completedInCategory} of {category.lessons.length} lessons completed
              </p>
              <p className="font-medium text-purple-600 dark:text-purple-400">
                {percentComplete}% Complete
              </p>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold mb-6">Lessons</h2>
          
          <div className="space-y-4">
            {category.lessons.map((lesson, index) => {
              const isCompleted = progress.completedLessons.includes(lesson.id);
              const hasQuizScore = lesson.quiz.id in progress.quizScores;
              
              return (
                <div 
                  key={lesson.id}
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700 card-hover"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mr-4">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            isCompleted 
                              ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400' 
                              : 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
                          }`}>
                            {isCompleted ? (
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            ) : (
                              <span>{index + 1}</span>
                            )}
                          </div>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-1">{lesson.title}</h3>
                          <p className="text-gray-600 dark:text-gray-400 mb-3">{lesson.description}</p>
                          
                          <div className="flex items-center text-sm">
                            {isCompleted && (
                              <span className="flex items-center text-green-600 dark:text-green-400 mr-4">
                                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                Completed
                              </span>
                            )}
                            
                            {hasQuizScore && (
                              <span className="flex items-center text-purple-600 dark:text-purple-400">
                                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                                </svg>
                                Quiz Score: {progress.quizScores[lesson.quiz.id]}%
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700/30 border-t border-gray-100 dark:border-gray-700">
                    <Link
                      href={`/lessons/${category.slug}/${lesson.slug}`}
                      className={`inline-block py-2 px-4 rounded-lg transition-colors ${
                        isCompleted
                          ? 'bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200'
                          : 'bg-purple-600 hover:bg-purple-700 text-white'
                      }`}
                    >
                      {isCompleted ? 'Review Lesson' : 'Start Lesson'}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="mt-8 flex justify-between">
            <Link
              href="/dashboard"
              className="flex items-center text-purple-600 dark:text-purple-400 hover:underline"
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Dashboard
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
} 