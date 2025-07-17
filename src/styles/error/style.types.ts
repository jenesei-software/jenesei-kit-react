import { addSXProps } from '@local/styles/sx'
import { IThemeSize } from '@local/theme'
import { AddDollarSign } from '@local/types'

export type ErrorMessagePropsDollar = AddDollarSign<ErrorMessageProps>
export type ErrorMessageProps = {
  errorMessage?: string

  isError?: boolean

  isErrorAbsolute?: boolean

  size?: IThemeSize

  sx?: addSXProps['sx']
}
export interface addErrorProps {
  error?: ErrorMessageProps
}
export type addErrorStylesProps = AddDollarSign<addErrorProps>
