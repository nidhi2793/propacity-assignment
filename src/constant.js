import { DropDown } from "./components/DropDown";

export const CATEGORIES = {
  FILMS: "films",
  PEOPLE: "people",
  PLANETS: "planets",
  SPECIES: "species",
  STARSHIPS: "starships",
  VEHICLES: "vehicles",
};

const optionsCell = {
  name: "",
  key: "",
  formatter: (...args) => <DropDown {...args} position="left" />,
};

export const CATEGORIES_CONFIGS = {
  [CATEGORIES.FILMS]: {
    defaultListView: "grid",
    gridTitleIcon: "FilmReel.svg",
    listCells: [
      { name: "Name", key: "title" },
      { name: "Director", key: "director" },
      { name: "Release Date", key: "release_date" },
      optionsCell,
    ],
    sideBarConfig: {
      items: [
        {
          name: "Image",
          key: "imageUrl",
          default: "https://picsum.photos/354/274",
          type: "img",
        },
        { name: "Name", key: "title", default: "Missing title" },
        { name: "Director", key: "director", default: "Missing director" },
        {
          name: "Release Date",
          key: "release_date",
          default: "Missing realease date",
        },
      ],
      headerName: "Movie Details",
    },
  },
  [CATEGORIES.PEOPLE]: {
    defaultListView: "list",
    gridTitleIcon: "People.svg",
    listCells: [
      { name: "Name", key: "name" },
      { name: "Birth Date", key: "birth_year" },
      { name: "Species", key: "species" },
      optionsCell,
    ],
    sideBarConfig: {
      items: [
        {
          name: "Image",
          key: "imageUrl",
          default: "https://picsum.photos/354/274",
          type: "img",
        },
        { name: "Name", key: "name", default: "Missing name" },
        {
          name: "Birth Date",
          key: "birth_year",
          default: "Missing birth date",
        },
        { name: "Species", key: "species", default: "Missing species data" },
      ],
      headerName: "People Details",
    },
  },
  [CATEGORIES.PLANETS]: {
    defaultListView: "list",
    gridTitleIcon: "Planet.svg",
    listCells: [
      { name: "Name", key: "name" },
      { name: "Climate", key: "climate" },
      { name: "Gravity", key: "gravity" },
      optionsCell,
    ],
    sideBarConfig: {
      items: [
        {
          name: "Image",
          key: "imageUrl",
          default: "https://picsum.photos/354/274",
          type: "img",
        },
        { name: "Name", key: "name", default: "Missing name" },
        { name: "Climate", key: "climate", default: "Missing climate data" },
        { name: "Gravity", key: "gravity", default: "Missing gravity data" },
      ],
      headerName: "Planet Details",
    },
  },
  [CATEGORIES.SPECIES]: {
    defaultListView: "list",
    gridTitleIcon: "Species.svg",
    listCells: [
      { name: "Name", key: "name" },
      { name: "Home World", key: "homeworld" },
      { name: "Life Span", key: "average_lifespan" },
      optionsCell,
    ],
    sideBarConfig: {
      items: [
        {
          name: "Image",
          key: "imageUrl",
          default: "https://picsum.photos/354/274",
          type: "img",
        },
        { name: "Name", key: "name", default: "Missing name" },
        {
          name: "Home World",
          key: "homeworld",
          default: "Missing home world data",
        },
        {
          name: "Life Span",
          key: "average_lifespan",
          default: "Missing life span data",
        },
      ],
      headerName: "Species Details",
    },
  },
  [CATEGORIES.STARSHIPS]: {
    defaultListView: "list",
    gridTitleIcon: "Starships.svg",
    listCells: [
      { name: "Name", key: "name" },
      { name: "Model", key: "model" },
      { name: "HyperDrive Rating", key: "hyperdrive_rating" },
      optionsCell,
    ],
    sideBarConfig: {
      items: [
        {
          name: "Image",
          key: "imageUrl",
          default: "https://picsum.photos/354/274",
          type: "img",
        },
        { name: "Name", key: "name", default: "Missing name" },
        { name: "Model", key: "model", default: "Missing model data" },
        {
          name: "HyperDrive Rating",
          key: "hyperdrive_rating",
          default: "No rating",
        },
      ],
      headerName: "Starship Details",
    },
  },
  [CATEGORIES.VEHICLES]: {
    defaultListView: "list",
    gridTitleIcon: "Vehicles.svg",
    listCells: [
      { name: "Name", key: "name" },
      { name: "Model", key: "model" },
      { name: "Top Speed", key: "max_atmosphering_speed" },
      optionsCell,
    ],
    sideBarConfig: {
      items: [
        {
          name: "Image",
          key: "imageUrl",
          default: "https://picsum.photos/354/274",
          type: "img",
        },
        { name: "Name", key: "name", default: "Missing name" },
        { name: "Model", key: "model", default: "Missing model data" },
        {
          name: "Top Speed",
          key: "max_atmosphering_speed",
          default: "Missing top speed data",
        },
      ],
      headerName: "Vehicle Details",
    },
  },
};

export const DATA_URL = "https://swapi.dev/api/";
