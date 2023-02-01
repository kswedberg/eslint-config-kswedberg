const reducer = (obj, curr) => {
  obj[curr] = 'readonly';

  return obj;
};

const vue = [
  'defineProps',
  'defineEmits',
  'defineExpose',
  'withDefaults',

  // lifecycle
  'onActivated',
  'onBeforeMount',
  'onBeforeUnmount',
  'onBeforeUpdate',
  'onDeactivated',
  'onErrorCaptured',
  'onMounted',
  'onServerPrefetch',
  'onUnmounted',
  'onUpdated',

  // reactivity
  'computed',
  'customRef',
  'isReadonly',
  'isRef',
  'markRaw',
  'reactive',
  'readonly',
  'ref',
  'shallowReactive',
  'shallowReadonly',
  'shallowRef',
  'toRaw',
  'toRef',
  'toRefs',
  'triggerRef',
  'unref',
  'watch',
  'watchEffect',

  // components
  'defineComponent',
  'defineAsyncComponent',
  'getCurrentInstance',
  'h',
  'inject',
  'nextTick',
  'provide',
  'useCssModule',
];

const nuxt = [
  ...vue,
  '$fetch',
  'abortNavigation',
  'addRouteMiddleware',
  'clearError',
  'clearNuxtData',
  'createError',
  'defineAppConfig',
  'defineNuxtComponent',
  'defineNuxtLink',
  'defineNuxtPlugin',
  'defineNuxtRouteMiddleware',
  'definePageMeta',
  'isNuxtError',
  'isPrerendered',
  'loadPayload',
  'navigateTo',
  'onBeforeRouteLeave',
  'onBeforeRouteUpdate',
  'onNuxtReady',
  'prefetchComponents',
  'preloadComponents',
  'preloadPayload',
  'preloadRouteComponents',
  'refreshNuxtData',
  'setPageLayout',
  'setResponseStatus',
  'showError',
  'updateAppConfig',
  'useAppConfig',
  'useAsyncData',
  'useCookie',
  'useError',
  'useFetch',
  'useHead',
  'useHydration',
  'useLazyAsyncData',
  'useLazyFetch',
  'useNuxtApp',
  'useNuxtData',
  'useRequestEvent',
  'useRequestHeaders',
  'useRoute',
  'useRouter',
  'useRuntimeConfig',
  'useState',

  // Server middleware
  'defineEventHandler',
  'getQuery',
  'sendRedirect',
];

module.exports = {
  vue3Globals: vue.reduce(reducer, {}),
  nuxt3Globals: nuxt.reduce(reducer, {}),
};
