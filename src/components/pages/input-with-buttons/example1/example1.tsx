import { ButtonConfig, InputWithButtons } from '../../../shared/input-with-buttons/input-with-buttons'
import { Example1ViewModel } from './example1.view-model'
import { useState } from 'react'


export const Example1 = () => {
  const [viewModel] = useState(() => new Example1ViewModel())
  const buttons: ButtonConfig[] = [
    { text: 'Clear', onClick: viewModel.clear },
    { text: 'Show hello', onClick: viewModel.showHello }
  ]

  return (
    <InputWithButtons viewModel={viewModel} rightButtons={buttons}/>
  )
}
