export default defineNuxtConfig({
  css: [
    '@/assets/css/tailwind.css',
    '@fortawesome/fontawesome-svg-core/styles.css'  // FontAwesome stil dosyasını ekliyoruz
  ],
  build: {
    transpile: ['naive-ui'],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@pinia/nuxt',
  ],
  plugins: [
    '~/plugins/fontawesome.ts'
  ],
  compatibilityDate: '2024-10-02',
})
