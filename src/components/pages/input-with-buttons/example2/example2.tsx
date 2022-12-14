import { Example2ViewModel } from './example2.view-model'
import { ButtonConfig, InputWithButtons } from '../../../shared/input-with-buttons/input-with-buttons'
import { useState } from 'react'


export const Example2 = () => {
  const [viewModel] = useState(() => new Example2ViewModel())
  const leftButtons: ButtonConfig[] = [
    { text: 'Number alert', onClick: viewModel.numberAlert }
  ]
  const rightButtons: ButtonConfig[] = [
    { text: 'Alert', onClick: viewModel.alert }
  ]

  return (
    <InputWithButtons viewModel={viewModel} leftButtons={leftButtons} rightButtons={rightButtons}/>
  )
}
