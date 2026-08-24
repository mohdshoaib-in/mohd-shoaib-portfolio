import "./globals.css";

export const metadata = {
  title: "Mohd Shoaib |  React.js Developer & Full Stack Engineer",
  description:
    "Mohd Shoaib is a  React.js Developer and Full Stack Engineer with 8.8 years of experience building scalable enterprise applications using React.js, Next.js, TypeScript, JavaScript, Node.js, and Express.js.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}