import { FC, createContext, useCallback, useEffect, useState } from 'react'

import { LocalStorageContextProps, ProviderLocalStorageProps, ValidLocalStorageObject } from '.'

export const LocalStorageContext = createContext<LocalStorageContextProps | null>(null)

/**
 * Provider component for managing local storage.
 *
 * @remarks
 * The local storage is typed using the `jenesei-kit-react.d.ts` file:
 *
 * ```typescript
 * import '@jenesei-software/jenesei-kit-react'
 *
 * declare module '@jenesei-software/jenesei-kit-react' {
 *   export interface ValidLocalStorageObject {
 *     access_token: string
 *     refresh_token: string
 *   }
 * }
 * ```
 */
export const ProviderLocalStorage: FC<ProviderLocalStorageProps> = props => {
  const {
    getLocalStorage,
    setLocalStorage,
    removeLocalStorageValue,
    removeLocalStorageValues,
    checkLocalStorage,
    localStorageValues
  } = useProviderLocalStorage(props)

  return (
    <LocalStorageContext.Provider
      value={{
        getLocalStorage,
        setLocalStorage,
        removeLocalStorageValue,
        removeLocalStorageValues,
        checkLocalStorage,
        localStorageValues
      }}
    >
      {props.children}
    </LocalStorageContext.Provider>
  )
}

const useProviderLocalStorage = (props: ProviderLocalStorageProps) => {
  const [localStorageValues, setLocalStorageValues] = useState<ValidLocalStorageObject>()

  const getLocalStorage = useCallback(
    <K extends keyof ValidLocalStorageObject>(name: K): ValidLocalStorageObject[K] | undefined => {
      const localStorageValue = localStorage.getItem(name)
      setLocalStorageValues(prevState => ({
        ...prevState,
        [name]: localStorageValue ? JSON.parse(localStorageValue) : undefined
      }))
      return localStorageValue ? JSON.parse(localStorageValue) : undefined
    },
    []
  )

  const changeLocalStorage = useCallback(
    <K extends keyof ValidLocalStorageObject>(name: K, value: ValidLocalStorageObject[K]) => {
      try {
        localStorage.setItem(String(name), JSON.stringify(value))
        setLocalStorageValues(prevState => ({ ...prevState, [name]: value }))
      } catch {
        console.info(`Provider LocalStorage. ChangeLocalStorage error - key:${name}, value:${value}.`)
      }
    },
    []
  )

  const removeLocalStorageValue = useCallback(<K extends keyof ValidLocalStorageObject>(name: K) => {
    try {
      localStorage.removeItem(String(name))
      setLocalStorageValues(prevState => ({
        ...prevState,
        [name]: undefined
      }))
    } catch {
      console.info(`Provider LocalStorage. RemoveLocalStorageValue error - key:${name}.`)
    }
  }, [])

  const removeLocalStorageValues = useCallback(() => {
    if (props.validate && props.validate.validateKeys) {
      props.validate?.validateKeys.forEach(key => {
        removeLocalStorageValue(String(key) as never)
      })
    } else {
      console.info('Provider LocalStorage. RemoveLocalStorageValues - validate is not defined.')
    }
  }, [props.validate, removeLocalStorageValue])

  const checkLocalStorage = useCallback(() => {
    if (props.validate && props.validate.validateKeys && props.validate.getValidateLocalStorageValue) {
      props.validate?.validateKeys.forEach(key => {
        const localStorageValue = localStorage.getItem(key)
        if (localStorageValue) {
          try {
            const parsedValue = JSON.parse(localStorageValue)
            if (!props.validate?.getValidateLocalStorageValue(String(key) as never, parsedValue as never)) {
              removeLocalStorageValue(String(key) as never)
            } else {
              setLocalStorageValues(prevState => ({
                ...prevState,
                [key]: parsedValue
              }))
            }
          } catch {
            removeLocalStorageValue(String(key) as never)
          }
        } else {
          removeLocalStorageValue(String(key) as never)
        }
      })
    } else {
      console.info('Provider LocalStorage. CheckLocalStorage - validate is not defined.')
    }
  }, [props.validate, removeLocalStorageValue])

  useEffect(() => {
    checkLocalStorage()
  }, [checkLocalStorage])

  return {
    getLocalStorage,
    setLocalStorage: changeLocalStorage,
    removeLocalStorageValue,
    removeLocalStorageValues,
    checkLocalStorage,
    localStorageValues
  }
}
