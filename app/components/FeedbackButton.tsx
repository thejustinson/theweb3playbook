'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FeedbackButton() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <motion.div 
        className="fixed bottom-6 right-6 z-50"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <button
          onClick={() => setIsOpen(true)}
          className="bg-purple-600 hover:bg-purple-700 text-white rounded-full p-3 shadow-lg flex items-center justify-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
          </svg>
          <span className="ml-2 hidden md:inline">Feedback</span>
        </button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              className="fixed bottom-0 inset-x-0 z-50 bg-white dark:bg-gray-800 rounded-t-xl p-6 shadow-xl max-w-lg mx-auto"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Share Your Feedback</h3>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                We&apos;d love to hear your feedback!
              </p>
              <a 
                href="https://forms.gle/8NeysdqeTRG5XkNv8"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-4 rounded-lg text-center transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Open Feedback Form
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
} 