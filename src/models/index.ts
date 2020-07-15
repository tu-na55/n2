export interface IResult {
  value: number
  comment: string
  status: boolean
}

export interface IWineAttribute {
  id: number
  japaneseTitle: string
  englishTitle: string
  value: number
  step: number
  maxValue: number
  minValue: number
}

export interface IInputValue {
  id: number
  value: number
}
