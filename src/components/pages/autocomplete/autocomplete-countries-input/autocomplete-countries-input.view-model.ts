import { makeAutoObservable } from 'mobx'
import { IAutocompleteInputViewModel } from '../../../../interfaces/input-view-model.interface'
import { CountryInfo, getCountryByName } from '../../../../api/apiService'
import { debounce } from '../../../../functions/debounce'

export class AutocompleteCountriesInputViewModel implements IAutocompleteInputViewModel<CountryInfo> {
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true })
  }

  value = ''
  suggestions: CountryInfo[] = []
  isSuggestionsVisible = false

  onChange(value: string): void {
    this.value = value
    this.debouncedLoadSuggestions()
  }

  selectSuggestion(value: string): void {
    this.value = value
    this.isSuggestionsVisible = false
  }

  loadSuggestions = () => getCountryByName(this.value)
    .then(this.setSuggestions)
    .then(this.showSuggestions)

  debouncedLoadSuggestions = debounce(this.loadSuggestions, 300)

  setSuggestions(suggestions: CountryInfo[]) {
    this.suggestions = suggestions
  }

  showSuggestions() {
    this.isSuggestionsVisible = true
  }

  hideSuggestions() {
    this.isSuggestionsVisible = false
  }

}
