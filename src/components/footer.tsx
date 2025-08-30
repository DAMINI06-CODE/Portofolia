import { personalInfo } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Portfolio Pro by {personalInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
