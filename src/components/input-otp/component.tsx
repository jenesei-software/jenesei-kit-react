import { ErrorMessage } from '@local/styles/error'

import { ClipboardEvent, FocusEvent, KeyboardEvent, useCallback, useRef, useState } from 'react'

import { Input } from '../input'
import { InputOTPProps, InputOTPWrapper } from '.'

export const InputOTP = (props: InputOTPProps) => {
  const [otp, setOtp] = useState<string[]>(new Array(props.length).fill(''))
  const inputsRef = useRef<(HTMLInputElement | null)[]>([])
  const wrapperRef = useRef<HTMLDivElement | null>(null)

  const handlePaste = useCallback(
    (index: number, e: ClipboardEvent<HTMLInputElement>) => {
      e.preventDefault()

      const pasteData = e.clipboardData.getData('Text')
      const digits = pasteData.replace(/\D/g, '').split('')

      if (!digits.length) return

      setOtp(prevOtp => {
        const newOtp = [...prevOtp]
        let currentIndex = index

        for (let i = 0; i < digits.length && currentIndex < newOtp.length; i++) {
          newOtp[currentIndex] = digits[i]
          currentIndex++
        }

        const joined = newOtp.join('')

        props.onChange?.(joined)

        if (newOtp.every(char => char !== '')) {
          props.onComplete?.(joined)
        }

        setTimeout(() => {
          const firstEmpty = newOtp.findIndex(char => char === '')
          if (firstEmpty !== -1) {
            inputsRef.current[firstEmpty]?.focus()
          } else if (currentIndex < newOtp.length) {
            inputsRef.current[currentIndex]?.focus()
          }
        }, 0)

        return newOtp
      })
    },
    [props]
  )

  const handleChange = useCallback(
    (index: number, value: string) => {
      if (!/^\d*$/.test(value)) return

      setOtp(prevOtp => {
        const newOtp = [...prevOtp]
        newOtp[index] = value.slice(-1)

        if (props.onChange) {
          props.onChange(newOtp.join(''))
        }

        if (newOtp.every(char => char !== '')) {
          props.onComplete?.(newOtp.join(''))
        }

        if (value && index < prevOtp.length - 1) {
          setTimeout(() => {
            inputsRef.current[index + 1]?.focus()
          }, 0)
        }

        return newOtp
      })
    },
    [props]
  )

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    const input = inputsRef.current[index]

    if (!input) return

    if (e.key === 'ArrowRight') {
      const nextIndex = index < otp.length - 1 ? index + 1 : 0
      const nextInput = inputsRef.current[nextIndex]

      if (nextInput) {
        nextInput.focus()
        setTimeout(() => nextInput.setSelectionRange(0, nextInput.value.length), 0)
      }
    }

    if (e.key === 'ArrowLeft') {
      const prevIndex = index > 0 ? index - 1 : otp.length - 1
      const prevInput = inputsRef.current[prevIndex]

      if (prevInput) {
        prevInput.focus()
        setTimeout(() => prevInput.setSelectionRange(0, prevInput.value.length), 0)
      }
    }

    if (e.key === 'Backspace') {
      if (input.value) {
        setTimeout(() => input.setSelectionRange(0, input.value.length), 0)
      } else if (index > 0) {
        setTimeout(() => {
          const prevInput = inputsRef.current[index - 1]
          if (prevInput) {
            prevInput.focus()
            prevInput.setSelectionRange(0, prevInput.value.length)
          }
        }, 0)
      }
    }
  }

  const handleFocusInput = useCallback((e: FocusEvent<HTMLInputElement>) => {
    setTimeout(() => e.target.setSelectionRange(0, e.target.value.length), 0)
  }, [])
  return (
    <>
      <InputOTPWrapper
        $error={props.error}
        $size={props.size}
        id={props.id}
        ref={wrapperRef}
        onBlur={e => {
          setTimeout(() => {
            if (wrapperRef.current && !wrapperRef.current.contains(document.activeElement)) {
              props.onBlur?.(e)
            }
          }, 0)
        }}
        onFocus={e => {
          setTimeout(() => {
            if (wrapperRef.current?.contains(document.activeElement)) {
              props.onFocus?.(e)
            }
          }, 0)
        }}
        $sx={props.sx}
      >
        {otp.map((digit, index) => (
          <Input
            isWidthAsHeight
            key={index}
            tabIndex={index + 1}
            ref={el => {
              inputsRef.current[index] = el
            }}
            variety="standard"
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onFocus={handleFocusInput}
            onPaste={e => handlePaste(index, e)}
            onChange={value => handleChange(index, value)}
            onKeyDown={e => handleKeyDown(index, e)}
            genre={props.genre}
            size={props.size}
          />
        ))}
      </InputOTPWrapper>
      {props?.error ? <ErrorMessage {...props.error} size={props?.error.size ?? props.size} /> : null}
    </>
  )
}
