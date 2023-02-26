import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';
import { codeInput } from '@sanity/code-input';
import { myTheme } from './theme';

const projectId = process.env.SANITY_PROJECT_ID!;
const dataset = process.env.SANITY_DATASET!;

export default defineConfig({
  basePath: '/studio',
  name: 'galaxy-content-blog',
  title: 'galaxy content blog',

  // 'oylc6q26' is the project ID of the Sanity project that you want to use
  projectId: 'oylc6q26',

  // 'production' is the name of the dataset that you want to use
  dataset: 'production',

  plugins: [deskTool(), visionTool(), codeInput()],

  schema: {
    types: schemaTypes,
  },
  theme: myTheme,
});
