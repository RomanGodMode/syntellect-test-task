import s from './partially-selected-text.module.scss'
import { Fragment, memo } from 'react'

type Props = {
  text: string
  selectedText: string
}


export const PartiallySelectedText = memo(({ selectedText, text }: Props) => {
  if (!selectedText) return <>{text}</>
  const regexp = new RegExp('^' + selectedText, 'ig')
  const matchValue = text.match(regexp)

  if (matchValue) {
    return <>
      {
        text.split(regexp).map((symbol, index, array) => {
          if (index < array.length - 1) {
            const c = matchValue.shift()
            return <Fragment key={index}>
              {symbol}
              <span className={s.highlight}>{c}</span>
            </Fragment>
          }
          return symbol
        })
      }
    </>
  }
  return <>{text}</>
})
