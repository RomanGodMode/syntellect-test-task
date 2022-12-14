import s from './button.module.scss'
import { ComponentProps, ElementType, ReactNode } from 'react'

type Props<E extends ElementType = ElementType> = {
  as?: E
  children: ReactNode
} & ComponentProps<E>


const DEFAULT_TAG_NAME = 'button'


export const Button = <E extends ElementType = typeof DEFAULT_TAG_NAME>(props: Props<E>) => {
  const { as: TagName = DEFAULT_TAG_NAME, children, className } = props

  return (
    <TagName className={`${s.button} ${className}`} {...props}>
      {children}
    </TagName>
  )
}
