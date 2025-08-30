import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume | Damini S",
  description: "Resume for Damini S, MERN Stack Developer.",
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
