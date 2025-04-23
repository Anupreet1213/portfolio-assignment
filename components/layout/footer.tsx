import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} • Built with Next.js
        </p>
        <div className="flex items-center gap-4">
          <Link 
            href="https://github.com/Anupreet1213/" 
            target="_blank" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            GitHub
          </Link>
          <Link 
            href="https://www.linkedin.com/in/anupreet-srivastava-973013223/" 
            target="_blank"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
}