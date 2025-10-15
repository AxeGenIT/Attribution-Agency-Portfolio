import "@fontsource-variable/raleway";
import "../styles/globals.css";
import FooterWrapper from "../components/footer_wrapper";
import Provider from "../../providers/Provider";
import { Toaster } from "sonner";
import Preloader from "../components/preloader";
import PerformanceMonitor from "../components/performance-monitor";
import ClientOptimizer from "../components/client-optimizer";

export const metadata = {
  title: "Attribution Booster - Full-Stack Web Development & Digital Marketing",
  description:
    "Attribution Booster is a software development company that specializes in building web and mobile applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Preload critical resources */}
        <link rel="preload" href="/logo.png" as="image" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="//fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-martian-b-thai">
        <Provider>
          <PerformanceMonitor />
          <ClientOptimizer />
          <Toaster richColors position="top-right" />
          {/* Optimized SSR preloader */}
          <div id="preloader-ssr" className="fixed inset-0 z-[99998] bg-gradient-to-br from-[#06101A] via-[#06101A] to-[#06101A] flex items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <img
                src="/logo.png"
                alt="Logo"
                className="w-28 h-28 object-contain"
                loading="eager"
                decoding="sync"
              />
            </div>
          </div>
          <Preloader />
          <div>
            {children}
            <FooterWrapper />
          </div>
        </Provider>
      </body>
    </html>
  );
}
