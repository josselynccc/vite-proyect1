export interface Pais {
  name: {
    official: string;
  };
  region: string;
  subregion: string;
  capital: string[];
  flags: {
    png: string;
  };
  population: number;
  area: number;
  languages: {
    [index: string]: string;
  };
  currencies: {
    [index: string]: {
      name: string;
      symbol: string;
    };
  };
}