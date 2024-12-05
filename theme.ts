import { buildLegacyTheme } from "sanity";

const props = {
  "--my-white": "#fafafa",
  "--my-black": "#0F0F0F",
  "--accent": "#7752FE",
  "--my-red": "#FA4032",
  "--my-yellow": "#FAB12F",
  "--my-green": "#88C273",
};
export const myTheme = buildLegacyTheme({
  /* Base theme colors */
  '--black': props['--my-black'],
  '--white': props['--my-white'],
  '--gray': '#666',
  '--gray-base': '#666',
  '--component-bg': props['--my-black'],
  '--component-text-color': props['--my-white'],

  /* Brand */
  '--brand-primary': props['--accent'],

  // Default button
  '--default-button-color': '#666',
  '--default-button-primary-color': props['--accent'],
  '--default-button-success-color': props['--my-green'],
  '--default-button-warning-color': props['--my-yellow'],
  '--default-button-danger-color': props['--my-red'],

  /* State */
  '--state-info-color': props['--accent'],
  '--state-success-color': props['--my-green'],
  '--state-warning-color': props['--my-yellow'],
  '--state-danger-color': props['--my-red'],

  /* Navbar */
  '--main-navigation-color': props['--my-black'],

  // '--main-navigation-color-inverted': props['--my-white'],
  '--focus-color': props['--accent'],
});
