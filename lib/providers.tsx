'use client';

import { ThemeProvider } from 'next-themes';
import { MoodBackground } from '@/components/interactive/mood-background';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <MoodBackground>
        {children}
      </MoodBackground>
    </ThemeProvider>
  );
}