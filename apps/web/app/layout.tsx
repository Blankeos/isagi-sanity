import "../styles/globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <div className="min-h-screen flex flex-col">
          <nav className="fluid-container py-3 flex flex-col">
            <div className="text-center py-5 flex flex-col">
              <div className="font-semibold mb-2">⚽ Isagi Blog ⚽</div>
              <p className="text-sm text-gray-500">
                Isagi Yoichi from Blue Lock
              </p>
            </div>
            <ul className="flex gap-x-5 self-center">
              <li>
                <Link
                  href="/"
                  className="text-sm text-gray-700 hover:text-blue-600 transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/posts"
                  className="text-sm text-gray-700 hover:text-blue-600 transition"
                >
                  Posts
                </Link>
              </li>
            </ul>
          </nav>
          <main className="flex flex-1 flex-col">{children}</main>
          <footer className="bg-blue-600">
            <div className="fluid-container py-10">
              <p className="text-white text-center">
                Made with ⚽💖 by{" "}
                <Link
                  href="https://carlo.vercel.app/"
                  className="font-medium hover:text-orange-200 underline"
                >
                  Carlo Taleon
                </Link>
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
