import * as React from "react";
import { Link, type HeadFC, type PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Hello World</h1>
      <div className="flex gap-4">
        <Link to="/about">About</Link>
      </div>
      <StaticImage
        src="../images/honey3.png"
        alt="Honey 3"
        quality={100}
        placeholder="blurred"
      />
      <form
        name="contact"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        method="post"
        action="/success"
        className="border-2 border-[rebeccapurple] gap-4 flex flex-col p-10"
      >
        <input type="hidden" name="form-name" value="contact" />
        <div className="flex flex-col gap-1">
          <input
            className="p-4 text-base border-2 border-gray-300 rounded-md"
            type="text"
            name="nev"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <input
            className="p-4 text-base border-2 border-gray-300 rounded-md"
            name="uzenet"
            type="textarea"
            required
          />
        </div>
        <button
          type="submit"
          className="p-2 px-4 rounded-lg bg-purple-700 hover:bg-purple-500 disabled:bg-gray-400 text-white"
        >
          Küldés
        </button>
      </form>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
