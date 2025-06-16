import { GraphQLClient } from 'graphql-request';

const GraphClient = async (request) => {
  const client = new GraphQLClient(process.env.REACT_APP_CMS_API);
  const result = await client.request(request);
  return result;
};
export default GraphClient;
