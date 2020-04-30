// Imports: Axios
import axios from 'axios';

// GraphQL: Resolvers
const RESOLVERS = {
  Query: {
    hi_query: (parent, args) => ({
      hi: 'Hello im the text inside the hi object',
    }),
  },
};

// Exports
export default RESOLVERS;

// HTTP Fetch
// export default {
//   const RESOLVERS = {
//     Query: {
//     test_query: (parent, args) => {
//       return axios.get(`https://swapi.dev/api/people`)
//       .then((response) => response.data)
//       .catch((error) => console.log(error))
//     }
//   }
// };
