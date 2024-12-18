/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
 /* The `content` property in the Tailwind CSS configuration specifies the files that Tailwind should
  scan to find classes used in your project. In this case, it is telling Tailwind to look for
  classes used in the `index.html` file and any JavaScript or TypeScript files (`*.js`, `*.ts`,
  `*.jsx`, `*.tsx`) within the `src` directory and its subdirectories. This allows Tailwind to
  generate a comprehensive list of classes used in your project for optimization and purging unused
  styles. */