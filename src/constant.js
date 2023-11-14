export const CATEGORIES = {
  FILMS: "films",
  PEOPLE: "people",
  PLANETS: "planets",
  SPECIES: "species",
  STARSHIPS: "starships",
  VEHICLES: "vehicles",
};

export const CATEGORIES_CONFIGS = {
  [CATEGORIES.FILMS]: {
    defaultListView: "grid",
    gridTitleIcon: "FilmReel.svg",
    listCells: [
      { name: "Name", key: "title" },
      { name: "Director", key: "director" },
      { name: "Release Date", key: "release_date" },
    ],
  },
  [CATEGORIES.PEOPLE]: {
    defaultListView: "list",
    gridTitleIcon: "People.svg",
    listCells: [
      { name: "Name", key: "name" },
      { name: "Birth Date", key: "birth_year" },
      { name: "Species", key: "species" },
    ],
  },
  [CATEGORIES.PLANETS]: {
    defaultListView: "list",
    gridTitleIcon: "Planet.svg",
    listCells: [
      { name: "Name", key: "name" },
      { name: "Climate", key: "climate" },
      { name: "Gravity", key: "gravity" },
    ],
  },
  [CATEGORIES.SPECIES]: {
    defaultListView: "list",
    gridTitleIcon: "Species.svg",
    listCells: [
      { name: "Name", key: "name" },
      { name: "Home World", key: "homeworld" },
      { name: "Life Span", key: "average_lifespan" },
    ],
  },
  [CATEGORIES.STARSHIPS]: {
    defaultListView: "list",
    gridTitleIcon: "Starships.svg",
    listCells: [
      { name: "Name", key: "name" },
      { name: "Model", key: "model" },
      { name: "HyperDrive Rating", key: "hyperdrive_rating" },
    ],
  },
  [CATEGORIES.VEHICLES]: {
    defaultListView: "list",
    gridTitleIcon: "Vehicles.svg",
    listCells: [
      { name: "Name", key: "name" },
      { name: "Model", key: "model" },
      { name: "Top Speed", key: "max_atmosphering_speed" },
    ],
  },
};

export const DATA_URL = "https://swapi.dev/api/";
