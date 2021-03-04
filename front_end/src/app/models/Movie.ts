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
