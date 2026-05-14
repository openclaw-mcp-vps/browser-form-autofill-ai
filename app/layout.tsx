import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FormFill AI – AI fills forms using context from page",
  description: "Browser extension that reads form context and fills intelligently using AI, not just saved data. Perfect for job seekers and sales teams."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="35eda215-95ff-46cd-ba7a-e7483c7de7ad"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
