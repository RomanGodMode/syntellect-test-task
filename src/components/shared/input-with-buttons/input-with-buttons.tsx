import s from './input-with-buttons.module.scss'
import { Input } from '../input/input'
import { IInputViewModel } from '../../../store/input-view-model/input-view-model.interface'
import { Button } from '../button/button'
import { EMPTY_LIST } from '../../../constants/empty-list'

export type ButtonConfig = {
  text: string
  onClick: (text: string) => void
}

type Props = {
  viewModel: IInputViewModel
  leftButtons?: ButtonConfig[]
  rightButtons?: ButtonConfig[]
}


export const InputWithButtons = ({ viewModel, leftButtons = EMPTY_LIST, rightButtons = EMPTY_LIST }: Props) => {
  return (
    <div className={s.wrapper}>
      {
        leftButtons.length > 0
        && <Buttons className={s.leftButtons} buttons={leftButtons} viewModel={viewModel}/>
      }
      <Input className={s.input} viewModel={viewModel}/>
      {
        rightButtons.length > 0
        && <Buttons className={s.rightButtons} buttons={rightButtons} viewModel={viewModel}/>
      }
    </div>
  )
}

type ButtonsProps = {
  className?: string
  buttons: ButtonConfig[]
  viewModel: IInputViewModel
}

const Buttons = ({ buttons, className, viewModel }: ButtonsProps) => {
  return (
    <div className={`${s.buttons} ${className}`}>
      {
        buttons.map(({ onClick, text }) => (
          <Button key={text} onClick={() => onClick(viewModel.value)}>
            {text}
          </Button>
        ))
      }
    </div>
  )
}
