import { IInputViewModel } from '../../../../store/input-view-model/input-view-model.interface'
import { makeAutoObservable } from 'mobx'

// мы не можем использовать наследование с makeAutoObservable(но я предпочёл makeAutoObservable)
export class Example1ViewModel implements IInputViewModel {
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true })
  }

  value = ''

  onChange(value: string): void {
    this.value = value
  }

  clear() {
    this.value = ''
  }

  showHello() {
    this.value = 'Hello world!'
  }
}
