'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { categories } from '../data/content';

interface Progress {
  completedLessons: string[];
  quizScores: Record<string, number>;
  earnedBadges: string[];
}

interface ProgressContextType {
  progress: Progress;
  completeLesson: (lessonId: string) => void;
  saveQuizScore: (quizId: string, score: number) => void;
  resetProgress: () => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const defaultProgress: Progress = {
  completedLessons: [],
  quizScores: {},
  earnedBadges: [],
};

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState<Progress>(defaultProgress);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load saved progress and theme preference from localStorage on initial render
  useEffect(() => {
    const savedProgress = localStorage.getItem('web3PlaybookProgress');
    if (savedProgress) {
      setProgress(JSON.parse(savedProgress));
    }
    
    const savedTheme = localStorage.getItem('web3PlaybookDarkMode');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'true');
    } else {
      // Check system preference if no saved preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(prefersDark);
    }
    
    setIsLoaded(true);
  }, []);

  // Update document with the current theme
  useEffect(() => {
    if (!isLoaded) return;
    
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Save theme preference to localStorage
    localStorage.setItem('web3PlaybookDarkMode', isDarkMode.toString());
  }, [isDarkMode, isLoaded]);

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    if (!isLoaded) return;
    localStorage.setItem('web3PlaybookProgress', JSON.stringify(progress));
  }, [progress, isLoaded]);

  // Check for badges that should be awarded
  const checkForBadges = (updatedProgress: Progress) => {
    const newBadges: string[] = [];
    
    // Web3 Novice - Completed your first Web3 lesson
    const web3BasicsCategory = categories.find(c => c.slug === 'web3-basics');
    if (web3BasicsCategory && !updatedProgress.earnedBadges.includes('web3-novice')) {
      const hasCompletedAnyWeb3Lesson = web3BasicsCategory.lessons.some(
        lesson => updatedProgress.completedLessons.includes(lesson.id)
      );
      if (hasCompletedAnyWeb3Lesson) {
        newBadges.push('web3-novice');
      }
    }
    
    // Web3 Explorer - Completed all Web3 Basics lessons
    if (web3BasicsCategory && !updatedProgress.earnedBadges.includes('web3-explorer')) {
      const allWeb3LessonsCompleted = web3BasicsCategory.lessons.every(
        lesson => updatedProgress.completedLessons.includes(lesson.id)
      );
      if (allWeb3LessonsCompleted) {
        newBadges.push('web3-explorer');
      }
    }
    
    // DeFi Beginner - Completed your first DeFi lesson
    const defiCategory = categories.find(c => c.slug === 'defi');
    if (defiCategory && !updatedProgress.earnedBadges.includes('defi-beginner')) {
      const hasCompletedAnyDefiLesson = defiCategory.lessons.some(
        lesson => updatedProgress.completedLessons.includes(lesson.id)
      );
      if (hasCompletedAnyDefiLesson) {
        newBadges.push('defi-beginner');
      }
    }
    
    // DeFi Explorer - Completed all DeFi lessons
    if (defiCategory && !updatedProgress.earnedBadges.includes('defi-explorer')) {
      const allDefiLessonsCompleted = defiCategory.lessons.every(
        lesson => updatedProgress.completedLessons.includes(lesson.id)
      );
      if (allDefiLessonsCompleted) {
        newBadges.push('defi-explorer');
      }
    }
    
    // Wallet Master - Completed all Wallets & Identity lessons
    const walletsCategory = categories.find(c => c.slug === 'wallets-and-identity');
    if (walletsCategory && !updatedProgress.earnedBadges.includes('wallet-master')) {
      const allWalletLessonsCompleted = walletsCategory.lessons.every(
        lesson => updatedProgress.completedLessons.includes(lesson.id)
      );
      if (allWalletLessonsCompleted) {
        newBadges.push('wallet-master');
      }
    }
    
    // Decentralization Advocate - Completed all Decentralization & Trustlessness lessons
    const decentralizationCategory = categories.find(c => c.slug === 'decentralization');
    if (decentralizationCategory && !updatedProgress.earnedBadges.includes('decentralization-advocate')) {
      const allDecentralizationLessonsCompleted = decentralizationCategory.lessons.every(
        lesson => updatedProgress.completedLessons.includes(lesson.id)
      );
      if (allDecentralizationLessonsCompleted) {
        newBadges.push('decentralization-advocate');
      }
    }
    
    // NFT Collector - Completed all NFT lessons
    const nftCategory = categories.find(c => c.slug === 'nfts');
    if (nftCategory && !updatedProgress.earnedBadges.includes('nft-collector')) {
      const allNftLessonsCompleted = nftCategory.lessons.every(
        lesson => updatedProgress.completedLessons.includes(lesson.id)
      );
      if (allNftLessonsCompleted) {
        newBadges.push('nft-collector');
      }
    }
    
    // DAO Member - Completed all DAO lessons
    const daoCategory = categories.find(c => c.slug === 'daos');
    if (daoCategory && !updatedProgress.earnedBadges.includes('dao-member')) {
      const allDaoLessonsCompleted = daoCategory.lessons.every(
        lesson => updatedProgress.completedLessons.includes(lesson.id)
      );
      if (allDaoLessonsCompleted) {
        newBadges.push('dao-member');
      }
    }
    
    // Solana Pioneer - Completed your first Solana lesson
    const solanaCategory = categories.find(c => c.slug === 'solana');
    if (solanaCategory && !updatedProgress.earnedBadges.includes('solana-pioneer')) {
      const hasCompletedAnySolanaLesson = solanaCategory.lessons.some(
        lesson => updatedProgress.completedLessons.includes(lesson.id)
      );
      if (hasCompletedAnySolanaLesson) {
        newBadges.push('solana-pioneer');
      }
    }
    
    // Solana Builder - Completed all Introduction to Solana lessons
    const solanaIntroCategory = categories.find(c => c.slug === 'solana-intro');
    if (solanaIntroCategory && !updatedProgress.earnedBadges.includes('solana-builder')) {
      const allSolanaIntroLessonsCompleted = solanaIntroCategory.lessons.every(
        lesson => updatedProgress.completedLessons.includes(lesson.id)
      );
      if (allSolanaIntroLessonsCompleted) {
        newBadges.push('solana-builder');
      }
    }
    
    // Solana User - Completed all Using Solana lessons
    const solanaUsageCategory = categories.find(c => c.slug === 'using-solana');
    if (solanaUsageCategory && !updatedProgress.earnedBadges.includes('solana-user')) {
      const allSolanaUsageLessonsCompleted = solanaUsageCategory.lessons.every(
        lesson => updatedProgress.completedLessons.includes(lesson.id)
      );
      if (allSolanaUsageLessonsCompleted) {
        newBadges.push('solana-user');
      }
    }
    
    // Web3 Graduate - Completed all lessons in The Web3 Playbook
    if (!updatedProgress.earnedBadges.includes('web3-graduate')) {
      const totalLessons = categories.reduce((total, category) => total + category.lessons.length, 0);
      if (updatedProgress.completedLessons.length === totalLessons) {
        newBadges.push('web3-graduate');
      }
    }
    
    // If new badges were earned, update progress
    if (newBadges.length > 0) {
      return {
        ...updatedProgress,
        earnedBadges: [...updatedProgress.earnedBadges, ...newBadges]
      };
    }
    
    return updatedProgress;
  };

  const completeLesson = (lessonId: string) => {
    if (!progress.completedLessons.includes(lessonId)) {
      const updatedProgress = {
        ...progress,
        completedLessons: [...progress.completedLessons, lessonId],
      };
      
      // Check for badges after completing a lesson
      const progressWithBadges = checkForBadges(updatedProgress);
      setProgress(progressWithBadges);
    }
  };

  const saveQuizScore = (quizId: string, score: number) => {
    const updatedProgress = {
      ...progress,
      quizScores: {
        ...progress.quizScores,
        [quizId]: score,
      },
    };
    
    // Check for badges after completing a quiz
    const progressWithBadges = checkForBadges(updatedProgress);
    setProgress(progressWithBadges);
  };

  const resetProgress = () => {
    setProgress(defaultProgress);
    localStorage.removeItem('web3PlaybookProgress');
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <ProgressContext.Provider
      value={{
        progress,
        completeLesson,
        saveQuizScore,
        resetProgress,
        isDarkMode,
        toggleDarkMode,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
} 