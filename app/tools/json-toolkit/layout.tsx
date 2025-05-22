import Link from "next/link";

const title = "JSON Toolkit";
const description =
  "A powerful suite of tools for manipulating and validating JSON data.";
const keywords = [
  "JSON tools",
  "JSON validation",
  "JSON formatting",
  "JSON parsing",
  "JSON manipulation",
  "JSON schema",
  "JSON editor",
  "JSON viewer",
  "JSON beautifier",
  "JSON minifier",
];

export const metadata = {
  title,
  description,
  keywords,
  metadataBase: new URL("https://rizentium.com"),
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function JSONToolKitLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-40 bg-white border-b border-gray-100 mb-6 py-3">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href={"/tools/json-toolkit"} className="text-lg font-semibold">
            {title}
          </Link>
        </div>
      </header>
      <div className="flex flex-col items-center bg-white gap-10">
        {children}
      </div>
      <footer className="w-full mt-auto bg-white border-t border-gray-100 py-3">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()}{" "}
          <Link className="text-primary" href={"/"}>
            rizentium
          </Link>
          . All rights reserved.
        </div>
      </footer>
    </div>
  );
}
