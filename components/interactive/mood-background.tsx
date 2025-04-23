'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

type Mood = 'morning' | 'day' | 'evening' | 'night';

const moodBackgrounds: Record<Mood, string> = {
  morning: 'bg-gradient-to-br from-amber-100 to-amber-300',
  day: 'bg-gradient-to-br from-blue-100 to-blue-300',
  evening: 'bg-gradient-to-br from-orange-100 to-orange-300',
  night: 'bg-gradient-to-br from-indigo-100 to-indigo-300',
};

export function MoodBackground({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [mood, setMood] = useState<Mood>('day');

  useEffect(() => {
    setMounted(true);
    // Set initial mood based on time of day
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 10) {
      setMood('morning');
    } else if (hour >= 10 && hour < 17) {
      setMood('day');
    } else if (hour >= 17 && hour < 21) {
      setMood('evening');
    } else {
      setMood('night');
    }

    // Listen for mood changes
    const handleMoodChange = (event: Event) => {
      const customEvent = event as CustomEvent<Mood>;
      setMood(customEvent.detail);
    };

    document.addEventListener('mood-changed', handleMoodChange);

    return () => {
      document.removeEventListener('mood-changed', handleMoodChange);
    };
  }, []);

  if (!mounted) {
    return (
      <div className={cn(
        "min-h-screen transition-colors duration-700 ease-in-out",
        moodBackgrounds.day
      )}>
        {children}
      </div>
    );
  }

  return (
    <div 
      className={cn(
        "min-h-screen transition-colors duration-700 ease-in-out",
        moodBackgrounds[mood]
      )}
    >
      {children}
    </div>
  );
}