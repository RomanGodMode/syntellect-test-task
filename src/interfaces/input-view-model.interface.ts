export interface IInputViewModel {
  value: string
  onChange: (value: string) => void
}

export interface IAutocompleteInputViewModel<T> extends IInputViewModel {
  suggestions: T[]
  selectSuggestion: (value: string) => void
  isSuggestionsVisible: boolean
  hideSuggestions: () => void
}
