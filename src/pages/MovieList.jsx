import { Link } from "react-router-dom";
import { Card } from "../components/Card";
import { useState, useEffect } from "react";

export const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch();
      const data = response.json();
      setMovies(data.results);
    }
  }, []);

  return (
    <main>
      <div className="">
        <section className="max-w-7xl mx-auto pt-7">
          <div className="flex justify-start flex-wrap">
            <Card />
          </div>
        </section>
      </div>
    </main>
  );
};
