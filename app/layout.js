import "./css/style.css";
import "./css/mediaqueries.css"

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "John Henry | Your IT Technician",
  description: "Portfolio and Resume Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
