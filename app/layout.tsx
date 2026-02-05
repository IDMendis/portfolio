import "./globals.css";
import Providers from "@/components/Providers";
import Navbar from "@/components/Navbar";
import AuroraBackground from "@/components/AuroraBackground";
import Particles from "@/components/Particles";
import ClientEffects from "@/components/ClientEffects";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-black text-black dark:text-white">
        <Providers>
          <AuroraBackground />
          <Particles />
          <ClientEffects />
          <Navbar />
          {children}
        </Providers>
        
      </body>
    </html>
  );
}
