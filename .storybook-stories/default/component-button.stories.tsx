import type { Meta } from '@storybook/react-vite'
import { FC } from 'react'
import 'styled-components'

import { Button as ButtonComponent } from '@local/components/button'

import { WrapperBig, WrapperMin } from './tools'

const meta: Meta<typeof ButtonComponent> = {
  component: ButtonComponent,
  title: 'Component/Button'
}

export default meta

const ButtonWrapper: FC = () => {
  return (
    <WrapperBig>
      <WrapperMin>
        <ButtonComponent size="medium" genre="black" isDisabledRipple isWhileTapEffect>
          black
        </ButtonComponent>
        <ButtonComponent size="medium" genre="blackBorder">
          blackBorder
        </ButtonComponent>
        <ButtonComponent size="medium" genre="gray">
          gray
        </ButtonComponent>
        <ButtonComponent size="medium" genre="grayBorder">
          grayBorder
        </ButtonComponent>
        <ButtonComponent size="medium" genre="greenTransparent">
          greenTransparent
        </ButtonComponent>
        <ButtonComponent size="medium" genre="product">
          product
        </ButtonComponent>
        <ButtonComponent size="medium" genre="productBorder">
          productBorder
        </ButtonComponent>
        <ButtonComponent size="medium" genre="realebail-gray">
          realebail-gray
        </ButtonComponent>
        <ButtonComponent size="medium" genre="realebail-product">
          realebail-product
        </ButtonComponent>
        <ButtonComponent size="medium" genre="realebail-white">
          realebail-white
        </ButtonComponent>
        <ButtonComponent size="medium" genre="redTransparent">
          redTransparent
        </ButtonComponent>
        <ButtonComponent size="medium" genre="white">
          white
        </ButtonComponent>
        <ButtonComponent size="medium" genre="yellowTransparent">
          yellowTransparent
        </ButtonComponent>
      </WrapperMin>
      <WrapperMin>
        <ButtonComponent size="large" genre="black">
          large
        </ButtonComponent>
        <ButtonComponent size="largeMedium" genre="black">
          largeMedium
        </ButtonComponent>
        <ButtonComponent size="medium" genre="black">
          medium
        </ButtonComponent>
        <ButtonComponent size="mediumSmall" genre="black">
          mediumSmall
        </ButtonComponent>
        <ButtonComponent size="small" genre="black">
          small
        </ButtonComponent>
      </WrapperMin>
    </WrapperBig>
  )
}

export const Button = {
  render: () => <ButtonWrapper />
}
