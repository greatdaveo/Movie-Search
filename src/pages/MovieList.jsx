import { Link } from "react-router-dom";
import { Card } from "../components/Card";
import { useState } from "react";
import { useFetch } from "../hooks/useFetch";

export const MovieList = ({ apiPath }) => {
  const { data: movies } = useFetch(apiPath);

  return (
    <main>
      <div className="">
        <section className="max-w-7xl mx-auto pt-7">
          <div className="flex justify-start flex-wrap">
            {movies.map((movie) => (
              <Card key={movie.id} movie={movie} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};
