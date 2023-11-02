// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        'assets/style/style.scss',
        'vuetify/lib/styles/main.sass'
    ],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "assets/style/colors.scss" as *;'
                }
            }
        }
    },
    build: {
        transpile: ['vuetify'],
    },
    modules: [
        '@nuxtjs/device',
        '@pinia/nuxt'
    ],
    runtimeConfig: {
        public: {
            apiBase: process.env.BASE_URL || '',
            domain: process.env.TOP_LEVEL_DOMAIN
        }
    },
})
