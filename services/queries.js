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
