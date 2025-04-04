'use client';

import { useState } from 'react';
import Link from 'next/link';
import { categories, badges } from '../data/content';
import { useProgress } from '../context/ProgressContext';
import Sidebar from '../components/Sidebar';
import DarkModeToggle from '../components/DarkModeToggle';
import Badge from '../components/Badge';
import FeedbackButton from '../components/FeedbackButton';

export default function Dashboard() {
  const { progress, resetProgress } = useProgress();
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  // Calculate progress statistics
  const totalLessons = categories.reduce(
    (total, category) => total + category.lessons.length,
    0
  );
  
  const completedPercentage = 
    totalLessons > 0 
      ? Math.round((progress.completedLessons.length / totalLessons) * 100) 
      : 0;
  
  const earnedBadges = badges.filter(badge => 
    progress.earnedBadges.includes(badge.id)
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="flex">
        <div className="hidden md:block">
          <Sidebar />
        </div>
        
        <div className="flex-1 md:ml-64">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 py-8 max-w-7xl">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white lg:px-8">Your Learning Dashboard</h1>
              <DarkModeToggle />
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 sm:p-6 md:p-8 mb-8">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-0">Your Progress</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 card-hover">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h2 className="text-xl font-bold">Learning Progress</h2>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mb-3 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-purple-700 h-3 rounded-full animate-progress" 
                      style={{ width: `${completedPercentage}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <p className="text-gray-600 dark:text-gray-400">
                      {progress.completedLessons.length} of {totalLessons} lessons
                    </p>
                    <p className="font-medium text-purple-600 dark:text-purple-400">
                      {completedPercentage}% Complete
                    </p>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 card-hover">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                      </svg>
                    </div>
                    <h2 className="text-xl font-bold">Quiz Performance</h2>
                  </div>
                  <div className="text-3xl font-bold mb-2 text-purple-600 dark:text-purple-400">
                    {Object.keys(progress.quizScores).length}
                    <span className="text-base font-normal text-gray-600 dark:text-gray-400 ml-1">quizzes completed</span>
                  </div>
                  {Object.keys(progress.quizScores).length > 0 ? (
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Average score: {Math.round(
                        Object.values(progress.quizScores).reduce((a, b) => a + (b as number), 0) / 
                        Object.keys(progress.quizScores).length
                      )}%
                    </p>
                  ) : (
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Complete a quiz to see your performance
                    </p>
                  )}
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 card-hover">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                      </svg>
                    </div>
                    <h2 className="text-xl font-bold">Badges Earned</h2>
                  </div>
                  <div className="text-3xl font-bold mb-2 text-purple-600 dark:text-purple-400">
                    {earnedBadges.length}
                    <span className="text-base font-normal text-gray-600 dark:text-gray-400 ml-1">of {badges.length}</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {earnedBadges.length === 0 
                      ? 'Complete lessons to earn badges' 
                      : 'Keep learning to collect all badges'}
                  </p>
                </div>
              </div>
              
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Continue Learning</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {categories.map((category) => {
                    const completedInCategory = category.lessons.filter(
                      lesson => progress.completedLessons.includes(lesson.id)
                    ).length;
                    
                    const percentComplete = Math.round(
                      (completedInCategory / category.lessons.length) * 100
                    );
                    
                    // Find the first incomplete lesson
                    const nextLesson = category.lessons.find(
                      lesson => !progress.completedLessons.includes(lesson.id)
                    );
                    
                    return (
                      <div 
                        key={category.id}
                        className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700 card-hover"
                      >
                        <div className="p-6">
                          <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                          <p className="text-gray-600 dark:text-gray-400 mb-4">{category.description}</p>
                          
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-gray-600 dark:text-gray-400">
                              {completedInCategory} of {category.lessons.length} lessons
                            </span>
                            <span className="font-medium text-purple-600 dark:text-purple-400">
                              {percentComplete}% Complete
                            </span>
                          </div>
                          
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-4">
                            <div 
                              className="bg-purple-600 h-2 rounded-full" 
                              style={{ width: `${percentComplete}%` }}
                            ></div>
                          </div>
                          
                          <div className="flex justify-between items-center">
                            <Link
                              href={`/categories/${category.slug}`}
                              className="text-purple-600 dark:text-purple-400 hover:underline text-sm font-medium"
                            >
                              View all lessons
                            </Link>
                            
                            {nextLesson ? (
                              <Link
                                href={`/lessons/${category.slug}/${nextLesson.slug}`}
                                className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg text-sm transition-colors"
                              >
                                Continue
                              </Link>
                            ) : (
                              <span className="bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400 py-1 px-3 rounded-full text-xs font-medium">
                                Completed
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
              
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Your Badges</h2>
                {earnedBadges.length > 0 ? (
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {earnedBadges.map((badge) => (
                      <Badge
                        key={badge.id}
                        title={badge.title}
                        description={badge.description}
                        image={badge.image}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-sm border border-gray-100 dark:border-gray-700">
                    <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">No Badges Yet</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Complete lessons and quizzes to earn badges and track your progress.
                    </p>
                    <Link
                      href={`/lessons/${categories[0]?.slug}/${categories[0]?.lessons[0]?.slug}`}
                      className="inline-block bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg transition-colors"
                    >
                      Start Learning
                    </Link>
                  </div>
                )}
              </section>
              
              <section>
                <h2 className="text-2xl font-bold mb-6">Settings</h2>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
                  <h3 className="text-xl font-bold mb-4">Reset Progress</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    This will reset all your progress, including completed lessons, quiz scores, and earned badges.
                    This action cannot be undone.
                  </p>
                  
                  {showResetConfirm ? (
                    <div className="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-4">
                      <h4 className="text-red-800 dark:text-red-400 font-bold mb-2">Are you sure?</h4>
                      <p className="text-red-700 dark:text-red-300 mb-4">
                        All your progress will be permanently deleted.
                      </p>
                      <div className="flex space-x-4">
                        <button
                          onClick={() => {
                            resetProgress();
                            setShowResetConfirm(false);
                          }}
                          className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded transition-colors"
                        >
                          Yes, Reset Everything
                        </button>
                        <button
                          onClick={() => setShowResetConfirm(false)}
                          className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded transition-colors"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={() => setShowResetConfirm(true)}
                      className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded transition-colors"
                    >
                      Reset All Progress
                    </button>
                  )}
                </div>
              </section>
            </div>
          </div>
          
          <FeedbackButton />
        </div>
      </div>
    </div>
  );
} 