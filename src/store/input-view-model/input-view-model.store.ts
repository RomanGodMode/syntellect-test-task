import { makeAutoObservable } from 'mobx'
import { IInputViewModel } from './input-view-model.interface'

export class InputViewModel implements IInputViewModel {
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true })
  }

  value = ''

  onChange(value: string): void {
    this.value = value
  }
}
