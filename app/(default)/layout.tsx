import "@/app/globals.css";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-brand-600 text-white">
        {children}
      </body>
    </html>
  );
}
