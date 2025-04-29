import "./globals.css";  

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="flex flex-col min-h-screen">
        <header className="w-full bg-white shadow-sm">
          <nav className="max-w-4xl mx-auto flex justify-between p-4">
            <a href="/" className="text-xl font-bold">희망치과</a>
            <div className="space-x-4">
              <a href="/about" className="hover:underline">소개</a>
              <a href="/services" className="hover:underline">진료안내</a>
              <a href="/contact" className="hover:underline">예약</a>
            </div>
          </nav>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="w-full bg-gray-100 text-center p-4">
          © 2025 희망치과. All rights reserved.
        </footer>
      </body>
    </html>
  );
}