'use client';

import Link from 'next/link';
import { categories } from './data/content';
import { motion } from 'framer-motion';

export default function Home() {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const floatingCardVariants = {
    initial: (custom: number) => ({
      rotate: custom,
      y: 0
    }),
    animate: (custom: number) => ({
      rotate: [custom, custom - 1, custom],
      y: [0, -5, 0],
      transition: {
        rotate: {
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse"
        },
        y: {
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }
      }
    })
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <div className="relative overflow-hidden">
        {/* Hero background with subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-white dark:from-purple-950/30 dark:to-black z-0"></div>
        
        {/* Decorative elements */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1.5 }}
          className="absolute top-20 right-[10%] w-64 h-64 bg-purple-200 dark:bg-purple-900/20 rounded-full filter blur-3xl opacity-50"
        ></motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute bottom-20 left-[5%] w-72 h-72 bg-purple-300 dark:bg-purple-800/20 rounded-full filter blur-3xl opacity-40"
        ></motion.div>
        
        {/* Improved container with better padding for large screens */}
        <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-20 md:py-28 lg:py-32 max-w-7xl relative z-10">
          <motion.header 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-center mb-20 lg:mb-28"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4 px-4 py-1 bg-purple-100 dark:bg-purple-900/30 rounded-full text-purple-800 dark:text-purple-300 font-medium text-sm"
            >
              Your Gateway to Web3 Knowledge
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 lg:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600"
            >
              The Web3 Playbook
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-xl max-w-2xl mx-auto mb-10 text-gray-600 dark:text-gray-300"
            >
              Master Web3 and Solana concepts through interactive lessons, quizzes, and earn badges as you learn.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link 
                href="/dashboard" 
                className="btn btn-primary py-3 px-8 rounded-lg text-base"
              >
                <motion.span 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block w-full"
                >
                  Start Learning
                </motion.span>
              </Link>
              <Link 
                href="#features" 
                className="btn btn-outline py-3 px-8 rounded-lg text-base"
              >
                <motion.span 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block w-full"
                >
                  Explore Features
                </motion.span>
              </Link>
            </motion.div>
          </motion.header>
          
          {/* Floating cards preview */}
          <div className="relative h-80 md:h-96 mb-20 lg:mb-28">
            <motion.div 
              custom={-6}
              initial="initial"
              animate="animate"
              variants={floatingCardVariants}
              className="absolute top-0 left-[10%] w-64 md:w-72 lg:w-80 transform -rotate-6 shadow-xl rounded-xl overflow-hidden transition-all duration-500 hover:rotate-0 hover:scale-105 z-10"
            >
              <div className="bg-white dark:bg-gray-800 p-4 border border-gray-200 dark:border-gray-700 rounded-xl">
                <div className="w-full h-32 bg-purple-100 dark:bg-purple-900/30 rounded-lg mb-3 flex items-center justify-center">
                  <span className="text-4xl">📚</span>
                </div>
                <h3 className="font-bold">Web3 Basics</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Learn the fundamentals</p>
              </div>
            </motion.div>
            <motion.div 
              custom={3}
              initial="initial"
              animate="animate"
              variants={floatingCardVariants}
              className="absolute top-10 left-[50%] transform -translate-x-1/2 rotate-3 shadow-xl rounded-xl overflow-hidden transition-all duration-500 hover:rotate-0 hover:scale-105 z-20"
            >
              <div className="bg-white dark:bg-gray-800 p-4 border border-gray-200 dark:border-gray-700 rounded-xl">
                <div className="w-full h-32 bg-purple-100 dark:bg-purple-900/30 rounded-lg mb-3 flex items-center justify-center">
                  <span className="text-4xl">🔮</span>
                </div>
                <h3 className="font-bold">Solana Ecosystem</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Explore Solana&apos;s potential</p>
              </div>
            </motion.div>
            <motion.div 
              custom={6}
              initial="initial"
              animate="animate"
              variants={floatingCardVariants}
              className="absolute top-5 right-[10%] w-64 md:w-72 lg:w-80 transform rotate-6 shadow-xl rounded-xl overflow-hidden transition-all duration-500 hover:rotate-0 hover:scale-105 z-10"
            >
              <div className="bg-white dark:bg-gray-800 p-4 border border-gray-200 dark:border-gray-700 rounded-xl">
                <div className="w-full h-32 bg-purple-100 dark:bg-purple-900/30 rounded-lg mb-3 flex items-center justify-center">
                  <span className="text-4xl">🏆</span>
                </div>
                <h3 className="font-bold">Earn Badges</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Track your progress</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <section id="features" className="py-20 lg:py-28 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 max-w-7xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="text-3xl lg:text-4xl font-bold mb-12 lg:mb-16 text-center"
          >
            What You&apos;ll Learn
          </motion.h2>
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          >
            {categories.map((category) => (
              <motion.div 
                key={category.id} 
                variants={cardVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="card-hover bg-white dark:bg-gray-800 rounded-xl p-6 lg:p-8 border border-gray-200 dark:border-gray-700"
              >
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl">{category.id === 'web3-basics' ? '🌐' : '🚀'}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{category.description}</p>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-500">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                  </svg>
                  {category.lessons.length} lessons
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 max-w-7xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="text-3xl lg:text-4xl font-bold mb-12 lg:mb-16 text-center"
          >
            Key Features
          </motion.h2>
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12"
          >
            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="text-center p-6 lg:p-8 card-hover bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700"
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <span className="text-3xl">📚</span>
              </motion.div>
              <h3 className="text-xl font-bold mb-3">Interactive Lessons</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Engaging content designed for beginners with clear explanations and examples
              </p>
            </motion.div>
            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="text-center p-6 lg:p-8 card-hover bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700"
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <span className="text-3xl">🧠</span>
              </motion.div>
              <h3 className="text-xl font-bold mb-3">Knowledge Quizzes</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Test your understanding with interactive quizzes after each lesson
              </p>
            </motion.div>
            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="text-center p-6 lg:p-8 card-hover bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700"
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <span className="text-3xl">🏆</span>
              </motion.div>
              <h3 className="text-xl font-bold mb-3">Earn Badges</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Track your progress and earn badges as you complete lessons and quizzes
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-purple-50 dark:bg-purple-950/20">
        <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 max-w-7xl text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 lg:mb-8">Ready to Start Your Web3 Journey?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
              Join thousands of learners exploring the exciting world of Web3 and Solana
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/dashboard" 
                className="btn btn-primary py-3 px-8 rounded-lg text-base inline-block"
              >
                Get Started Now
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <footer className="bg-white dark:bg-black py-12 lg:py-16 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold">The Web3 Playbook</h2>
              <p className="text-gray-500 dark:text-gray-400 mt-2">Your guide to understanding Web3</p>
            </div>
            <div className="flex space-x-6">
              <motion.a 
                whileHover={{ y: -3, color: "#8B5CF6" }}
                href="#" 
                className="text-gray-500 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </motion.a>
              <motion.a 
                whileHover={{ y: -3, color: "#8B5CF6" }}
                href="#" 
                className="text-gray-500 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </motion.a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-gray-500 dark:text-gray-400">
            <p>© {new Date().getFullYear()} The Web3 Playbook. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
