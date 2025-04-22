export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js', // 👈 flowbite core
    './node_modules/flowbite-vue/**/*.{js,ts,vue}', // 👈 flowbite-vue
  ],
  theme: {
    extend: {},
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require('flowbite/plugin')],
}
