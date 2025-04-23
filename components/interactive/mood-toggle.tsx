'use client';

import { useState, useEffect } from 'react';
import { SunIcon, MoonIcon, SunsetIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

type Mood = 'morning' | 'day' | 'evening' | 'night';

interface MoodOption {
  value: Mood;
  label: string;
  icon: React.ReactNode;
  bgClass: string;
  textClass: string;
}

const moods: MoodOption[] = [
  {
    value: 'morning',
    label: 'Morning',
    icon: <SunIcon className="h-5 w-5" />,
    bgClass: 'bg-amber-100',
    textClass: 'text-amber-900',
  },
  {
    value: 'day',
    label: 'Day',
    icon: <SunIcon className="h-5 w-5" />,
    bgClass: 'bg-blue-100',
    textClass: 'text-blue-900',
  },
  {
    value: 'evening',
    label: 'Evening',
    icon: <SunsetIcon className="h-5 w-5" />,
    bgClass: 'bg-orange-100',
    textClass: 'text-orange-900',
  },
  {
    value: 'night',
    label: 'Night',
    icon: <MoonIcon className="h-5 w-5" />,
    bgClass: 'bg-indigo-100',
    textClass: 'text-indigo-900',
  },
];

export default function MoodToggle() {
  const [mounted, setMounted] = useState(false);
  const [currentMood, setCurrentMood] = useState<Mood>('day'); // Default 
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Auto-set mood based on time of day on load
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 10) {
      setCurrentMood('morning');
    } else if (hour >= 10 && hour < 17) {
      setCurrentMood('day');
    } else if (hour >= 17 && hour < 21) {
      setCurrentMood('evening');
    } else {
      setCurrentMood('night');
    }
  }, []);

  // Don't render anything until after mounting to prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  const currentMoodOption = moods.find(mood => mood.value === currentMood)!;

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-300",
          currentMoodOption.bgClass,
          currentMoodOption.textClass
        )}
      >
        {currentMoodOption.icon}
        <span>My Mood: {currentMoodOption.label}</span>
      </button>
      
      {isOpen && (
        <div className="absolute mt-2 p-2 bg-popover rounded-md shadow-md border border-border z-10 w-full">
          {moods.map((mood) => (
            <button
              key={mood.value}
              onClick={() => {
                setCurrentMood(mood.value);
                setIsOpen(false);
                
                // Dispatching a custom event to update the page background
                document.dispatchEvent(
                  new CustomEvent('mood-changed', { detail: mood.value })
                );
              }}
              className={cn(
                "flex items-center gap-2 px-3 py-2 rounded-md w-full text-left mb-1 last:mb-0 transition-all",
                mood.value === currentMood 
                  ? cn(mood.bgClass, mood.textClass)
                  : "hover:bg-accent"
              )}
            >
              {mood.icon}
              <span>{mood.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}