import { CardContainer } from '@/components/ui/card-container';
import MoodToggle from '@/components/interactive/mood-toggle';
import { ArrowRightIcon, CodeIcon, HeartIcon, Info } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container py-12 md:py-24 px-4 md:px-6 max-w-5xl mx-auto">
      <div className="grid gap-8 md:gap-12">
        <section className="space-y-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4 animate-fade-in">
            Hello, I&apos;m <span className="text-primary">Anupreet</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up">
            Frontend developer passionate about creating beautiful, 
            interactive experiences that bring joy to users.
          </p>
        </section>

        <section className="flex justify-center animate-fade-in-up delay-300 z-10">
          <MoodToggle />
        </section>

        <CardContainer className="mt-12 animate-fade-in-up delay-500">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-3 text-center md:text-left">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                <CodeIcon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium">Clean Code</h3>
              <p className="text-muted-foreground">
                Crafting elegant, maintainable solutions is my passion. 
                Every line matters.
              </p>
            </div>
            
            <div className="space-y-3 text-center md:text-left">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                <HeartIcon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium">User Experience</h3>
              <p className="text-muted-foreground">
                Creating interfaces that feel natural and bring joy to 
                everyday interactions.
              </p>
            </div>
            
            <div className="space-y-3 text-center md:text-left">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                <Info className='w-6 h-6'/>
              </div>
              <h3 className="text-xl font-medium">Continuous Learning</h3>
              <p className="text-muted-foreground">
                Always exploring new technologies and refining my craft to stay
                ahead in this ever-evolving field.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              href="/about" 
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Learn more about me
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </CardContainer>
      </div>
    </div>
  );
}