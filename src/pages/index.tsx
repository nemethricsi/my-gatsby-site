import * as React from "react";
import { Link, type HeadFC, type PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Field, Form } from "houseform";
import * as z from "zod";

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
      <Form
        onSubmit={(values, { reset }) => {
          console.log(values);
          reset();
        }}
      >
        {({ submit, isValid }) => (
          <form
            name="contact"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            method="POST"
            className="border-2 border-[rebeccapurple] gap-4 flex flex-col p-10"
            onSubmit={(e) => {
              e.preventDefault();
              submit();
            }}
          >
            <input type="hidden" name="contact" value="contact" />
            <Field<string>
              name="name"
              initialValue={""}
              onChangeValidate={z.string().min(1, "Kötelező mező")}
            >
              {({ value, onBlur, setValue, errors }) => (
                <div className="flex flex-col gap-1">
                  <input
                    className="p-4 text-base border-2 border-gray-300 rounded-md"
                    type="text"
                    name="name"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onBlur={onBlur}
                  />
                  {errors.map((error) => (
                    <p key={error} className="text-red-500">
                      {error}
                    </p>
                  ))}
                </div>
              )}
            </Field>
            <Field<string>
              name="message"
              initialValue={""}
              onChangeValidate={z.string().min(1, "Kötelező mező")}
            >
              {({ value, onBlur, setValue, errors }) => (
                <div className="flex flex-col gap-1">
                  <input
                    className="p-4 text-base border-2 border-gray-300 rounded-md"
                    name="message"
                    type="textarea"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onBlur={onBlur}
                  />
                  {errors.map((error) => (
                    <p key={error} className="text-red-500">
                      {error}
                    </p>
                  ))}
                </div>
              )}
            </Field>
            <button
              type="submit"
              className="p-2 px-4 rounded-lg bg-purple-700 hover:bg-purple-500 disabled:bg-gray-400 text-white"
              disabled={!isValid}
            >
              Küldés
            </button>
          </form>
        )}
      </Form>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
