// Requires vue eslint plugin:
// vue add @vue/cli-plugin-eslint
// or
// yarn add -D eslint eslint-plugin-vue
const config = require('./vue3.js');

module.exports = Object.assign(config, {
  globals: {
    useAppConfig: 'readonly',
    useAsyncData: 'readonly',
    useCookie: 'readonly',
    useError: 'readonly',
    useFetch: 'readonly',
    useHead: 'readonly',
    useHydration: 'readonly',
    useLazyAsyncData: 'readonly',
    useLazyFetch: 'readonly',
    useNuxtApp: 'readonly',
    useNuxtData: 'readonly',
    useRequestEvent: 'readonly',
    useRequestHeaders: 'readonly',
    useRoute: 'readonly',
    useRouter: 'readonly',
    useRuntimeConfig: 'readonly',
    useState: 'readonly',
    $fetch: 'readonly',
    abortNavigation: 'readonly',
    addRouteMiddleware: 'readonly',
    clearError: 'readonly',
    clearNuxtData: 'readonly',
    createError: 'readonly',
    defineNuxtComponent: 'readonly',
    defineNuxtRouteMiddleware: 'readonly',
    definePageMeta: 'readonly',
    navigateTo: 'readonly',
    onBeforeRouteLeave: 'readonly',
    onBeforeRouteUpdate: 'readonly',
    onNuxtReady: 'readonly',
    prefetchComponents: 'readonly',
    preloadComponents: 'readonly',
    preloadRouteComponents: 'readonly',
    refreshNuxtData: 'readonly',
    setPageLayout: 'readonly',
    setResponseStatus: 'readonly',
    showError: 'readonly',
    updateAppConfig: 'readonly',
  },
});
