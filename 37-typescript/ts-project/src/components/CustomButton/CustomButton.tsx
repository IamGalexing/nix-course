import { ButtonHTMLAttributes, MouseEvent, ReactNode } from 'react'
// write type for every properties of ButtonProps
type ButtonProps = {
  className: string
  children: ReactNode
  onClick: (event: MouseEvent<HTMLButtonElement>) => void
} & ButtonHTMLAttributes<HTMLButtonElement>

export const CustomButton = (props: ButtonProps) => {
  const { children } = props

  return (
    <button type="button" {...props}>
      {children}
    </button>
  )
}
