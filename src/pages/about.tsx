import * as React from "react";
import { Link, type HeadFC, type PageProps } from "gatsby";

const AboutPage: React.FC<PageProps> = () => {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">About</h1>
      <Link to="/">Go back to the homepage</Link>
    </main>
  );
};

export default AboutPage;

export const Head: HeadFC = () => <title>About Page</title>;
