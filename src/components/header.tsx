import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#publications", label: "Publications" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 [perspective:1000px]">
            <Link href="/" aria-label="Portfolio Pro Home">
              <div className="group h-10 w-10 relative [transform-style:preserve-3d] transition-transform duration-700 hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-gradient-to-br from-primary via-primary/80 to-accent rounded-full text-primary-foreground font-headline font-bold text-lg shadow-md border-2 border-primary-foreground/50 [backface-visibility:hidden]">
                  DS
                </div>
                <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-gradient-to-br from-accent via-primary/80 to-primary rounded-full text-primary-foreground font-headline font-bold text-lg shadow-md border-2 border-primary-foreground/50 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  DS
                </div>
              </div>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex md:items-center md:gap-6">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-base font-medium text-foreground/70 hover:text-primary transition-colors">
                  {link.label}
                </a>
              ))}
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
