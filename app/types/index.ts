export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: string;
}

export interface Quiz {
  id: string;
  title: string;
  questions: Question[];
}

export interface Lesson {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  quiz: Quiz;
}

export interface Category {
  id: string;
  title: string;
  slug: string;
  description: string;
  lessons: Lesson[];
}

export interface Badge {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface UserProgress {
  completedLessons: string[];
  quizScores: Record<string, number>;
  earnedBadges: string[];
  darkMode: boolean;
} 