'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getMovies } from '@/app/utilities/getMovies';
import { IMAGE_BASE_URL } from '@/app/config';

interface MovieProps {
  id: number;
  title: string;
  genre_ids: number[];
  poster_path: string;
}
function Movies() {
  const [movies, setMovies] = useState<MovieProps[]>();
  useEffect(() => {
    (async () => {
      const movies = await getMovies();
      setMovies(movies);
    })();
  }, []);
  return (
    <div>
      <div className='grid grid-cols-4 gap-4'>
        {movies?.map((item) => (
          <Link href={`/movie/${item.id}`} key={item.id}>
              <div>
                <img src={`${IMAGE_BASE_URL}${item.poster_path}`} alt={item.title} />
              </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Movies;