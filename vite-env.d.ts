/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASE_URL: string;
  readonly VITE_SOCKET_URL: string;
  readonly VITE_AVAILABILITY_COOKIE_NAME: string;
  readonly VITE_CORE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
