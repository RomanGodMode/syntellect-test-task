import s from './autocomplete-page.module.scss'
import { AutocompleteCountriesInput } from './autocomplete-countries-input/autocomplete-countries-input'

export const AutocompletePage = () => {
  return (
    <div className={s.wrapper}>
      <AutocompleteCountriesInput maxTipsCount={3} placeholder="Максимум 3 подсказки"/>
      <AutocompleteCountriesInput maxTipsCount={10} placeholder="Максимум 10 подсказок"/>
    </div>
  )
}
