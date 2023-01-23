import "../styles/globals.css";
import Link from "next/link";
import { previewData } from "next/headers";

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
          {previewData() && (
            <div className="bg-yellow-400 text-center py-1.5 px-7">
              <h1 className="text-gray-800 font-bold">Preview</h1>
              <p className="text-xs font-base text-gray-500">
                Split the screen and open the editor to see changes live!
              </p>
            </div>
          )}
          <nav className="fluid-container py-3 flex flex-col">
            <div className="py-5 flex flex-col items-center">
              <Link
                href="/"
                className="p-0.5 px-1.5 hover:bg-gray-100 mb-2 rounded"
              >
                <div className="font-semibold">⚽ Isagi Blog ⚽</div>
              </Link>
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
              <p className="mt-5 text-xs text-white text-center">
                Sanity + Next 13 + TailwindCSS
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
