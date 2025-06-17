import { GraphQLClient } from 'graphql-request';

const GraphClient = async (query, variables = {}) => {
  const client = new GraphQLClient(process.env.REACT_APP_CMS_API);
  const result = await client.request(query, variables);
  return result;
};

export default GraphClient;
