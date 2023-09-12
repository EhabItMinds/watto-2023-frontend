import { graphql } from './../gql';

export const GET_MARKET_ITEMS_QUERY = graphql(`
  query GetAllUserItemsById($input: String!) {
    getAllUserItemsById(input: $input) {
      partName
      partDescription
      price
    }
  }
`);
