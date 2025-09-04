// import type { Metadata } from "next";
import { Bangers, Comic_Neue, Rubik, Archivo } from "next/font/google";
import "./globals.css";
import { PageStateProvider } from "@/components/providers/PageStateProvider";

const bangers = Bangers({
  variable: "--font-bangers",
  subsets: ["latin"],
  weight: "400",
});

const comicNeue = Comic_Neue({
  variable: "--font-comic-neue",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// Metadata is handled by generateMetadata in the dynamic route

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Hakkan Parbej Shah",
              jobTitle: "Full Stack Developer",
              description: "Innovative and detail-oriented B.Tech CSE student passionate about building impactful web applications",
              email: "hakkanparbej@gmail.com",
              telephone: "+91-7810843038",
              url: "https://hakkan-portfolio.vercel.app",
              sameAs: [
                "https://github.com/HakkanShah",
                "https://www.linkedin.com/in/hakkan/",
              ],
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
              },
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "Greater Kolkata College of Engineering and Management",
              },
              knowsAbout: [
                "React.js",
                "Next.js",
                "TypeScript",
                "JavaScript",
                "Node.js",
                "MongoDB",
                "Full Stack Development",
                "AI Integration",
                "UI/UX Design",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${bangers.variable} ${comicNeue.variable} ${rubik.variable} ${archivo.variable} font-retro antialiased bg-paper text-ink overflow-x-hidden`}
      >
        <PageStateProvider>
          {children}
        </PageStateProvider>
      </body>
    </html>
  );
}
