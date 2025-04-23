import { CardContainer } from "@/components/ui/card-container";
import { CodeIcon, BrainIcon, CoffeeIcon, BookIcon } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="container py-12 md:py-24 px-4 md:px-6 max-w-5xl mx-auto">
      <div className="grid gap-8 md:gap-12">
        <section className="space-y-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 animate-fade-in">
            About Me
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up">
            Frontend developer with a passion for creating delightful user
            experiences
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-6 animate-fade-in-up delay-300">
          <CardContainer className="p-6">
            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <CodeIcon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Technical Skills</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>React & Next.js Expert</li>
                  <li>JavaScript & TypeScript</li>
                  <li>UI/UX Design Principles</li>
                  <li>NodeJS & MongoDB Knowledge</li>
                </ul>
              </div>
            </div>
          </CardContainer>

          <CardContainer className="p-6">
            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <BrainIcon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Problem Solving</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Analytical Thinking</li>
                  <li>Creative Solutions</li>
                  <li>Attention to Detail</li>
                  <li>Quick Learning</li>
                </ul>
              </div>
            </div>
          </CardContainer>

          <CardContainer className="p-6">
            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <CoffeeIcon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Work Style</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Team Collaboration</li>
                  <li>Agile Methodology</li>
                  <li>Clean Code Practices</li>
                  <li>Documentation</li>
                </ul>
              </div>
            </div>
          </CardContainer>

          <CardContainer className="p-6">
            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <BookIcon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Always Learning</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Latest Web Standards</li>
                  <li>Emerging Technologies</li>
                  <li>Best Practices</li>
                  <li>Industry Trends</li>
                </ul>
              </div>
            </div>
          </CardContainer>
        </div>

        <CardContainer className="mt-8 animate-fade-in-up delay-500">
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <h2>My Story</h2>
            <p>
              My journey into frontend development began because of being tech enthusiast. What started as tinkering with HTML and CSS
              evolved into a deep passion for creating intuitive and engaging
              user experiences.
            </p>
            <p>
              Today, I specialize in building responsive, accessible, and
              performant web applications using modern technologies. I&apos;m
              particularly excited about the possibilities that new web
              standards and frameworks bring to the table.
            </p>
            <p>
              When I&apos;m not coding, you&apos;ll find me exploring new technologies or domain. I believe in continuous learning and
              staying current with industry best practices.
            </p>
          </div>
        </CardContainer>

        <CardContainer className="mt-8 animate-fade-in-up delay-500">
          <div className="prose prose-neutral dark:prose-invert">
            <h2>One of the designs I made..</h2>
          </div>
          <div className="flex justify-center mt-6 animate-fade-in-up delay-300">
            <Image
              src="/assets/design.gif"
              height={500}
              width={1000}
              alt="Custom visual from Figma"
              className="rounded-xl shadow-lg max-w-full h-auto"
            />
          </div>
        </CardContainer>
      </div>
    </div>
  );
}
