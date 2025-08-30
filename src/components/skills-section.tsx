'use client';

import { useState } from 'react';
import { skills } from '@/lib/data';
import { cn } from '@/lib/utils';
import { Lock, Sparkles } from 'lucide-react';
import { TechIcon } from './tech-icon';

export function SkillsSection() {
  const [unlockedSkills, setUnlockedSkills] = useState<Set<string>>(new Set());

  const handleUnlock = (skillName: string) => {
    setUnlockedSkills((prev) => {
      const newSet = new Set(prev);
      newSet.add(skillName);
      return newSet;
    });
  };

  return (
    <section id="skills" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary">My Skills</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/70">Click on a card to reveal a skill. See what I can do!</p>
        </div>

        <div className="space-y-12">
          {skills.map((category) => (
            <div key={category.title}>
              <h3 className="text-2xl font-headline font-semibold mb-6 text-center">{category.title}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                {category.skills.map((skill) => {
                  const isUnlocked = unlockedSkills.has(skill.name);
                  return (
                    <div key={skill.name} className="[perspective:1000px] aspect-square">
                      <button
                        onClick={() => handleUnlock(skill.name)}
                        className={cn(
                          'relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d]',
                          isUnlocked ? '[transform:rotateY(180deg)]' : ''
                        )}
                        aria-label={`Unlock skill: ${skill.name}`}
                        disabled={isUnlocked}
                      >
                        {/* Front of card (Locked) */}
                        <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-card shadow-md hover:shadow-xl transition-shadow rounded-lg [backface-visibility:hidden]">
                          <Lock className="w-10 h-10 text-muted-foreground" />
                          <span className="mt-2 text-sm font-semibold text-muted-foreground">Locked</span>
                        </div>

                        {/* Back of card (Unlocked) */}
                        <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-primary text-primary-foreground rounded-lg [transform:rotateY(180deg)] [backface-visibility:hidden]">
                           <Sparkles className="absolute top-2 right-2 w-5 h-5 text-yellow-300 animate-pulse" />
                          <TechIcon name={skill.name} className="w-10 h-10" />
                          <span className="mt-2 text-sm font-semibold">{skill.name}</span>
                        </div>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
