// Imports: GraphQL
import { gql } from 'apollo-server-express';

// GraphQL: TypeDefs
const TYPEDEFS = gql`
  type Query {
    hi_query: Hi
  }
  type Hi {
    hi: String
  }
`;

// Exports
export default TYPEDEFS;
