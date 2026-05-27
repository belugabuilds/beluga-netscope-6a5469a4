import "./globals.css";
export const metadata = { title: "NetScope", description: "A browser-based network diagnostics dashboard that lets you manually log, annotate, and visualize your network health observations in one place." };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
