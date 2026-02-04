import { Schibsted_Grotesk, Martian_Mono } from "next/font/google";
import "./globals.css";
import LightRays from "@/components/reactbit/LightRays";
import Navbar from "@/components/Navbar";
import { PostHogProvider } from "./providers";

const schibstedGrotesk = Schibsted_Grotesk({
  variable: "--font-schibsted-grotesk",
  subsets: ["latin"],
});

const martianMono = Martian_Mono({
  variable: "--font-martian-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dev Event",
  description: "The Hub for every dev event you mustn't  miss ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${schibstedGrotesk.variable} ${martianMono.variable} min-h-screen bg-background antialiased`}
      >
        {/* Wrap your app in the Provider */}
        <PostHogProvider>
          <Navbar />
          <div className="absolute inset-0 top-0 -z-1 min-h-screen">
            <LightRays
              raysOrigin="top-center-offset"
              raysColor="#5dfeca"
              raysSpeed={1}
              lightSpread={0.9}
              rayLength={1.4}
              followMouse={true}
              mouseInfluence={0.02}
            />
          </div>
          <main>{children}</main>
        </PostHogProvider>
      </body>
    </html>
  );
}
