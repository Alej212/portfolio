// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/sass/_default.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @use '~/assets/sass/_colors.scss' as *;
          @use '~/assets/sass/_fonts.scss' as *;
          `
        }
      }
    }
  },
  modules: ['nuxt-icon']
})
