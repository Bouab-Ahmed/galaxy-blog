import { createClient } from 'next-sanity';

export const projectId = 'oylc6q26';
export const dataset = 'production';
const apiVersion = '2022-11-16';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});
