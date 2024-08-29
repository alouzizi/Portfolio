import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"

const space_Grotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.alilouzizi.me/"),

  title: {
    template: "%s | Ali Louzizi",
    default: "Ali Louzizi",
  },
  authors: {
    name: "Ali Louzizi",
  },

  description:
    "Explore the portfolio of Ali Louzizi, a Full Stack Developer specializing in modern web applications. Discover projects that showcase expertise in Next.js, Supabase, and more.",
  openGraph: {
    title: "Ali Louzizi",
    description:
      "Explore the portfolio of Ali Louzizi, a Full Stack Developer specializing in modern web applications. Discover projects that showcase expertise in Next.js, Supabase, and more.",
    url: "https://www.alilouzizi.me/",
    siteName: "Ali Louzizi",
    images: "/og.png",
    type: "website",
  },
  keywords: ["Ali Louzizi", "Full Stack Developer", "Next.js", "Supabase", "Web Development"],
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={space_Grotesk.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
