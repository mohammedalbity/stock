// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura';

export default defineNuxtConfig({
    devtools: {enabled: true},
    compatibilityDate: "2025-01-19",
    modules: ["nuxt-auth-sanctum", "@primevue/nuxt-module"],
    css: ["~/assets/css/main.css"],
   /* app: {
        head: {
            htmlAttrs: { dir: 'rtl', lang: 'ar' },
        },
    },*/
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    primevue: {
        autoImport: false,
        components: {
            include: ['Button','Card','Forms','InputText'],
        },
        options: {
            theme: {
                preset: Aura,
                options: {
                    cssLayer: {
                        name: 'primevue',
                        order: 'tailwind-base, primevue, tailwind-utilities'
                    }
                }
            }
        }
    },
    sanctum: {
        mode: 'token',
        userStateKey: 'sanctum.user.identity',
        redirectIfAuthenticated: false,
        redirectIfUnauthenticated: false,
        endpoints: {
            csrf: '/sanctum/csrf-cookie',
            login: '/api/login',
            logout: '/api/logout',
            user: '/api/user',
        },
        csrf: {
            cookie: 'XSRF-TOKEN',
            header: 'X-XSRF-TOKEN',
        },
        client: {
            retry: false,
            initialRequest: true,
        },
        redirect: {
            keepRequestedRoute: true,
            onLogin: '/',
            onLogout: '/',
            onAuthOnly: '/login',
            onGuestOnly: '/',
        },
        globalMiddleware: {
            enabled: false,
            allow404WithoutAuth: true,
        },
        logLevel: 3,
        appendPlugin: false,
    },
})