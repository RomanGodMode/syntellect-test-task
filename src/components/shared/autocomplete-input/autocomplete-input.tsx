import s from './autocomplete-input.module.scss'
import { Input } from '../input/input'
import { IAutocompleteInputViewModel } from '../../../interfaces/input-view-model.interface'
import { observer } from 'mobx-react-lite'
import React, { ReactNode } from 'react'
import { useOnAnyClick } from '../../../hooks/dom/use-on-any-click'

type Props<T> = {
  maxTipsCount: number
  viewModel: IAutocompleteInputViewModel<T>
  renderSuggestion: (suggestion: T) => ReactNode
  valueProp: keyof T
  keyProp: keyof T
  placeholder?: string
}


export const AutocompleteInput = observer(<T, >(props: Props<T>) => {
  const { maxTipsCount, viewModel, renderSuggestion, valueProp, keyProp, placeholder } = props

  useOnAnyClick(viewModel.hideSuggestions)

  return (
    <div className={s.wrapper}>
      <Input className={s.input} viewModel={viewModel} placeholder={placeholder}/>
      {
        viewModel.isSuggestionsVisible && viewModel.suggestions.length > 0 &&
        <div className={s.suggestions}>
          {
            viewModel.suggestions.slice(0, maxTipsCount).map(suggestion =>
              (<button
                key={suggestion[keyProp] as string} className={s.suggestion}
                onClick={() => viewModel.selectSuggestion(suggestion[valueProp] as string)}
              >
                {renderSuggestion(suggestion)}
              </button>)
            )
          }
        </div>
      }
    </div>
  )
})
