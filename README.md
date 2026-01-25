typeof props.propsStack?.sx === 'function'
Не использовать "."
Не использовать "export * from ''"

# jenesei-kit-react

This is a frontend library for React from Jenesei Software.

## Customize the theme

To use themes in your application, create a declaration themes file and extend `styled-comments` as follows:

```typescript
// styled-components.d.ts
import { ITheme } from '@jenesei-software/jenesei-kit-react/style-theme'
import 'styled-components'

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends ITheme {}
}
```

Import `JeneseiTheme` and `JeneseiGlobalStyles` from our library and apply them in the root component of your application:

```typescript
// app.tsx
import { JeneseiGlobalStyles, JeneseiTheme } from '@jenesei-software/jenesei-kit-react/style-theme'

function App() {
  return (
    ...
      <ThemeProvider theme={JeneseiTheme}>
        <JeneseiGlobalStyles />
        {/* Your components */}
      </ThemeProvider>
    ...
  )
}
```

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
npm install @tanstack/react-router --save
npm install @tanstack/react-virtual --save
npm install framer-motion --save
npm install react --save
npm install react-dom --save
npm install styled-components --save
```
