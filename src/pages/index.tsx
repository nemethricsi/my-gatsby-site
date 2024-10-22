import * as React from "react";
import { Link, type HeadFC, type PageProps } from "gatsby";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Hello World</h1>
      <div className="flex gap-4">
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
