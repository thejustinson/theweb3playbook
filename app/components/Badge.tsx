import React from 'react';
import Image from 'next/image';

interface BadgeProps {
  title: string;
  description: string;
  image?: string;
}

export default function Badge({ title, description, image }: BadgeProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-5 text-center shadow-sm border border-gray-100 dark:border-gray-700 card-hover group">
      <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:badge-glow transition-all duration-300">
        {image ? (
          <Image src={image} alt={title} width={64} height={64} />
        ) : (
          <span className="text-2xl">🏆</span>
        )}
      </div>
      <h3 className="font-bold mb-1 text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
} 