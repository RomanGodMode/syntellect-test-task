import s from './input-with-buttons-page.module.scss'
import { Example1 } from './example1/example1'
import { Example2 } from './example2/example2'


export const InputWithButtonsPage = () => {
  return (
    <div className={s.wrapper}>
      <Example1/>
      <Example2/>
    </div>
  )
}
