import s from './autocomplete-countries-input.module.scss'
import { AutocompleteInput } from '../../../shared/autocomplete-input/autocomplete-input'
import { useCallback, useState } from 'react'
import { AutocompleteCountriesInputViewModel } from './autocomplete-countries-input.view-model'
import { PartiallySelectedText } from '../../../shared/partially-selected-text/partially-selected-text'
import { Observer } from 'mobx-react-lite'

type Props = {
  maxTipsCount: number
  placeholder?: string
}

export const AutocompleteCountriesInput = ({ maxTipsCount, placeholder }: Props) => {
  const [viewModel] = useState(() => new AutocompleteCountriesInputViewModel())

  const highlightSelected = useCallback((text: string) => {
    return <PartiallySelectedText selectedText={viewModel.value} text={text}/>
  }, [viewModel.value])

  return (
    <AutocompleteInput
      maxTipsCount={maxTipsCount}
      viewModel={viewModel}
      placeholder={placeholder}
      renderSuggestion={({ name, fullName, flag }) =>
        (
          <div className={s.country}>
            <img className={s.flag} src={flag} alt=""/>

            <Observer>
              {
                () => (
                  <div className={s.text}>
                    <div className={s.name}>{highlightSelected(name)}</div>
                    <div className={s.divider}/>
                    <div className={s.fullName}>{highlightSelected(fullName)}</div>
                  </div>
                )
              }
            </Observer>

          </div>
        )
      }
      keyProp="fullName" valueProp="name"
    />
  )
}
