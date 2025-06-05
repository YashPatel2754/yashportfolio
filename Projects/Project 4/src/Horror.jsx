import React, { useEffect, useState } from 'react';

const GhibliFilms = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetch('https://api.sampleapis.com/movies/horror')
      .then((res) => res.json())
      .then((data) => setFilms(data))
      .catch((err) => console.error('Error fetching data:', err));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-10 px-5">
      <h1 className="text-4xl font-bold text-center text-indigo-800 mb-10 drop-shadow-md">
        🎥 Studio Horror Film Gallery
      </h1>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {films.map((film) => (
          <div
            key={film.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-transform hover:-translate-y-1 overflow-hidden border border-gray-200"
          >
            {/* Poster Image */}
            <img
              src={film.posterURL}
              alt={`${film.title} poster`}
              className="w-full h-52 object-cover rounded-t-2xl"
            />

            <div className="p-4 flex flex-col justify-between">
              <h2 className="text-xl font-bold text-indigo-700 mb-2">{film.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GhibliFilms;