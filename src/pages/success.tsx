import React from "react";
import { Link, type HeadFC } from "gatsby";

const SuccessPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <p className="text-2xl font-bold">Köszönjük!</p>
      <p className="text-lg">Az üzenetét megkaptuk!</p>
      <Link
        to="/"
        className="text-blue-500 underline hover:text-blue-600 hover:no-underline"
      >
        Vissza a főoldalra
      </Link>
    </div>
  );
};

export default SuccessPage;

export const Head: HeadFC = () => <title>Sikeres üzenetküldés</title>;
