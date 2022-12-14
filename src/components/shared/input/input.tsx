import s from './input.module.scss'
import { observer } from 'mobx-react-lite'
import { IInputViewModel } from '../../../store/input-view-model/input-view-model.interface'
import { ComponentProps } from 'react'

type Props = {
  viewModel: IInputViewModel
} & Omit<ComponentProps<'input'>, 'value' | 'onChange'>


export const Input = observer(({ viewModel, className, ...props }: Props) => {
  return (
    <input
      className={`${s.input} ${className}`}
      value={viewModel.value}
      onChange={e => viewModel.onChange(e.target.value)}
      {...props}
    />
  )
})
