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
    gridTitleIcon: "People.svg",
  },
  [CATEGORIES.PLANETS]: {
    defaultListView: "list",
    gridTitleIcon: "Planet.svg",
  },
  [CATEGORIES.SPECIES]: {
    defaultListView: "list",
    gridTitleIcon: "Species.svg",
  },
  [CATEGORIES.STARSHIPS]: {
    defaultListView: "list",
    gridTitleIcon: "Starships.svg",
  },
  [CATEGORIES.VEHICLES]: {
    defaultListView: "list",
    gridTitleIcon: "Vehicles.svg",
  },
};

export const DATA_URL = "https://swapi.dev/api/";
