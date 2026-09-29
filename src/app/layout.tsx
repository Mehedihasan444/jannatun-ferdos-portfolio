import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { RevealObserver } from "@/components/layout/reveal-observer";
import { education, site, siteUrl } from "@/data/portfolio";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const description =
  "Professional portfolio of Jannatun Ferdos, an agriculture graduate and entomology researcher with academic research, publications, professional training, and community involvement.";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: "Agriculture Graduate | Entomology Researcher | Emerging Professional",
  description,
  email: `mailto:${site.email}`,
  telephone: site.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "21, Namorajarampur Vatopara, Rajarampur-6301",
    addressLocality: "Chapai Nawabganj",
    addressCountry: "BD",
  },
  alumniOf: education
    .filter((entry) => entry.stage === "Postgraduate" || entry.stage === "Undergraduate")
    .map((entry) => ({
      "@type": "CollegeOrUniversity",
      name: entry.institution,
    })),
  knowsLanguage: [
    { "@type": "Language", name: "Bangla" },
    { "@type": "Language", name: "English" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Jannatun Ferdos | Agriculture & Entomology Researcher",
  description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: "/",
    siteName: site.name,
    title: "Jannatun Ferdos | Agriculture & Entomology Researcher",
    description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jannatun Ferdos | Agriculture & Entomology Researcher",
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-dvh antialiased">
        <script
          dangerouslySetInnerHTML={{
            __html:
              "document.documentElement.classList.add('js');try{var t=localStorage.getItem('jf-theme');if(t==='dark'){document.documentElement.classList.add('dark')}}catch(e){}",
          }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-5 focus:py-3 focus:text-sm focus:font-medium focus:text-primary-foreground"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <RevealObserver />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
