import PageNotFoundImage from "../assets/pagenotfound.png";
import { Link } from "react-router-dom";

export const PageNotFound = () => {
  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-7xl text-gray-700 font-bold my-10 dark:text-white ">
            404, Ooops!
          </p>
          <div className="max-w-lg">
            <img
              className="rounded"
              src={PageNotFoundImage}
              alt="404 Page Not Found"
            />
          </div>
        </div>

        <div className="flex justify-center my-4">
          <Link to="/">
            <button className="w-64 text-white text-xl bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg px-5 py-2.5 mr-2 mb-2 font-medium  hover:from-pink-500 hover:to-yellow-500">
              Back To Movies App
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};
