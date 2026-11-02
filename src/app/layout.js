import "./globals.css";

export const metadata = {
  title: "ShareSpace AI - Smart Campus Resource Sharing",
  description: "An intelligent platform to borrow, share, and collaborate on campus resources.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-slate-950 text-slate-100 min-h-screen font-sans antialiased selection:bg-cyan-500 selection:text-slate-950">
        {children}
      </body>
    </html>
  );
}