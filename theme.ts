import { buildLegacyTheme } from 'sanity';

const Props = {
  '--color-white': '#fff',
  '--color-black': '#1a1a1a',
  '--galaxy-brand': '#2964CA',
  '--color-red': '#db4437',
  '--color-green': '#0f9d58',
  '--color-yellow': '#f4b400',
};

export const myTheme = buildLegacyTheme({
  // Base theme colors
  '--black': Props['--color-black'],
  '--white': Props['--color-white'],

  '--gray': '#666',
  '--gray-base': '#666',

  '--component-bg': Props['--color-black'],
  '--component-text-color': Props['--color-white'],

  // Brand colors
  '--brand-primary': Props['--galaxy-brand'],

  // default buttons
  '--default-button-color': '#666',
  '--default-button-primary-color': Props['--galaxy-brand'],
  '--default-button-success-color': Props['--color-green'],
  '--default-button-danger-color': Props['--color-red'],
  '--default-button-warning-color': Props['--color-yellow'],

  // State
  '--state-success-color': Props['--color-green'],
  '--state-warning-color': Props['--color-yellow'],
  '--state-danger-color': Props['--color-red'],
  '--state-info-color': Props['--galaxy-brand'],

  // navbar

  '--main-navigation-color': Props['--color-black'],
  '--main-navigation-color--inverted': Props['--color-white'],

  '--focus-color': Props['--galaxy-brand'],
});
