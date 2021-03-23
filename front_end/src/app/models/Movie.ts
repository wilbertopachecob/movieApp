export interface Movie {
  id?: number;
  title?: string;
  plot: string;
  cast?: string;
  genre: string;
  released: string;
  language?: string;
  ratings?: number[];
  director?: string;
  poster?: string;
  country?: string;
}

export function movieInitValues(): Movie {
  return {
    title: '',
    plot: '',
    cast: '',
    genre: '',
    released: '2021',
    language: '',
    director: '',
    id: 0,
    ratings: [0, 1, 2, 3, 4],
  };
}
