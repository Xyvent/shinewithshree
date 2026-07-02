import { createClient } from "tinacms/dist/client";
import { queries } from "./types.js";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '39295d32fc93c7600fe9089f71820e402378b489', queries,  });
export default client;
  