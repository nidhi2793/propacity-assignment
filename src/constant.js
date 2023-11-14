export const CATEGORIES = {
  FILMS: "films",
  PEOPLE: "people",
  PLANETS: "planets",
  SPECIES: "species",
  STARSHIPS: "starships",
  VEHICLES: "vehicles",
};

export const CATEGORIES_MAPPINGS = {
  [CATEGORIES.FILMS]: {
    defaultListView: "grid",
    gridTitleIcon: "FilmReel.svg",
  },
  [CATEGORIES.PEOPLE]: {
    defaultListView: "list",
    gridTitleIcon: "",
  },
  [CATEGORIES.PLANETS]: {
    defaultListView: "list",
    gridTitleIcon: "",
  },
  [CATEGORIES.SPECIES]: {
    defaultListView: "list",
    gridTitleIcon: "",
  },
  [CATEGORIES.STARSHIPS]: {
    defaultListView: "list",
    gridTitleIcon: "",
  },
  [CATEGORIES.VEHICLES]: {
    defaultListView: "list",
    gridTitleIcon: "",
  },
};

export const DATA_URL = "https://swapi.dev/api/";
