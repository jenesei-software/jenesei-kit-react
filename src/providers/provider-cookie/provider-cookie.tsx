import Cookies from 'js-cookie'
import { FC, createContext, useCallback, useEffect, useState } from 'react'

import {
  CookieAttributes,
  CookieContextProps,
  ProviderCookieProps,
  ValidCookieObject,
} from '.'

export const CookieContext = createContext<CookieContextProps | null>(null)

export const ProviderCookie: FC<ProviderCookieProps> = (props) => {
  const [cookieValues, setCookieValues] = useState<ValidCookieObject>()

  const getCookie = useCallback(
    <K extends keyof ValidCookieObject>(
      name: K,
    ): ValidCookieObject[K] | undefined => {
      const cookie = Cookies.get(String(name))
      setCookieValues((prevState) => ({
        ...prevState,
        [name]: cookie ? JSON.parse(cookie) : undefined,
      }))
      return cookie ? JSON.parse(cookie) : undefined
    },
    [],
  )

  const changeCookie = useCallback(
    <K extends keyof ValidCookieObject>(
      name: K,
      value: ValidCookieObject[K],
      options?: CookieAttributes,
    ) => {
      try {
        Cookies.set(String(name), JSON.stringify(value), options)
        setCookieValues((prevState) => ({ ...prevState, [name]: value }))
      } catch {
        console.info(
          `Provider Cookie. ChangeCookie error - key:${name}, value:${value}.`,
        )
      }
    },
    [],
  )

  const removeCookieValue = useCallback(
    <K extends keyof ValidCookieObject>(
      name: K,
      options?: CookieAttributes,
    ) => {
      try {
        Cookies.remove(String(name), options)
        setCookieValues((prevState) => ({ ...prevState, [name]: undefined }))
      } catch {
        console.info(`Provider Cookie. RemoveCookieValue error - key:${name}.`)
      }
    },
    [],
  )

  const removeCookieValues = useCallback(() => {
    if (props.validate && props.validate.validateKeys) {
      props.validate?.validateKeys.forEach((key) => {
        removeCookieValue(String(key) as never)
      })
    } else {
      console.info('Provider Cookie. Validate is not defined.')
    }
  }, [props.validate, removeCookieValue])

  const checkCookie = useCallback(() => {
    if (
      props.validate &&
      props.validate.validateKeys &&
      props.validate.getValidateCookieValue
    ) {
      props.validate?.validateKeys.forEach((key) => {
        const cookieValue = Cookies.get(String(key))
        if (cookieValue) {
          try {
            const parsedValue = JSON.parse(cookieValue)
            if (
              !props.validate?.getValidateCookieValue(
                String(key) as never,
                parsedValue as never,
              )
            ) {
              removeCookieValue(String(key) as never)
            } else {
              setCookieValues((prevState) => ({
                ...prevState,
                [key]: parsedValue,
              }))
            }
          } catch {
            removeCookieValue(String(key) as never)
          }
        } else {
          removeCookieValue(String(key) as never)
        }
      })
    } else {
      console.info('Provider Cookie. Validate is not defined.')
    }
  }, [props.validate, removeCookieValue])

  useEffect(() => {
    checkCookie()
  }, [checkCookie])

  return (
    <CookieContext.Provider
      value={{
        getCookie,
        setCookie: changeCookie,
        removeCookieValue,
        removeCookieValues,
        checkCookie,
        cookieValues,
      }}
    >
      {props.children}
    </CookieContext.Provider>
  )
}
