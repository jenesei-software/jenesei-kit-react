# jenesei-kit-react

This is a frontend library for React from Jenesei Software.

## Customize the cookie and local storage

```typescript
//jenesei-kit-react.d.ts
import '@jenesei-software/jenesei-kit-react/context-cookie'
import '@jenesei-software/jenesei-kit-react/context-local-storage'

declare module '@jenesei-software/jenesei-kit-react/context-cookie' {
  export interface ValidCookieObject {
    access_token: string
    refresh_token: string
  }
}
declare module '@jenesei-software/jenesei-kit-react/context-local-storage' {
  export interface ValidLocalStorageObject {
    access_token: string
    refresh_token: string
  }
}
```

# IMPORTANT


To work correctly you need to install the following dependencies:

```bash
npm install @tanstack/react-virtual --save
npm install @vanilla-extract/css --save
npm install framer-motion --save
npm install react --save
npm install react-dom --save
npm install styled-components --save
```
