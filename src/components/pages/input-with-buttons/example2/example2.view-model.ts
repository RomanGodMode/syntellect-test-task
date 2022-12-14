import { makeAutoObservable } from 'mobx'
import { IInputViewModel } from '../../../../store/input-view-model/input-view-model.interface'
import { isNumber } from '../../../../functions/is-number'

export class Example2ViewModel implements IInputViewModel {
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true })
  }

  value = ''

  onChange(value: string): void {
    this.value = value
  }

  alert() {
    alert(this.value)
  }

  numberAlert() {
    if (isNumber(this.value))
      alert(this.value)
  }
}
