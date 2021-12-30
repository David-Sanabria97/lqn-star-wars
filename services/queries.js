import { gql } from "@apollo/client";

export const GET_PEOPLE = gql`
  query {
    allPeople {
      people {
        id
        name
        birthYear
        eyeColor
        gender
        hairColor
        height
        mass
        skinColor
      }
    }
  }
`;

export const GET_PERSON = gql`
  query getPerson($id: ID) {
    person(id: $id) {
      id
      name
      birthYear
      eyeColor
      gender
      hairColor
      height
      mass
      skinColor
    }
  }
`;

export const GET_PERSON_FILMS = gql`
  query getPersonFilms($id: ID) {
    person(id: $id) {
      filmConnection {
        films {
          id
          title
          director
        }
      }
    }
  }
`;

export const GET_PLANETS_FILM_ = gql`
  query getPlanetsFilm($id: ID) {
    film(id: $id) {
      planetConnection {
        planets {
          id
          name
        }
      }
    }
  }
`;
