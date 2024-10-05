import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Linkedin",
  description: "Social media web app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      publishableKey={
        process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ||
        "pk_test_cHJvcGVyLWltcGFsYS0yNi5jbGVyay5hY2NvdW50cy5kZXYk"
      }
    >
      <html lang="en">
        <body className={inter.className}>
          <main>
            <Navbar />
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
