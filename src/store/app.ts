// import axios, { AxiosResponse } from 'axios'
import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'
// import { IInputValue, IResult, IWineAttribute } from '@/models'
import { IResult, IWineAttribute } from '@/models'

export interface IAppState {
  title: string
  wineAttributes: IWineAttribute[]
  result: IResult
}

@Module({ stateFactory: true, name: 'app', namespaced: true })
export default class App extends VuexModule implements IAppState {
  public title: string = ''
  public wineAttributes: IWineAttribute[] = []
  public result: IResult = { value: 0, comment: '', status: false }

  @Mutation
  public SET_TITLE(title: string): void {
    this.title = title
  }

  @Mutation
  public SET_WINE_ATTR(wineAttributes: IWineAttribute[]): void {
    this.wineAttributes = wineAttributes
  }

  @Mutation
  public SET_WINE_VALUE(payload: { id: number; value: number }): void {
    this.wineAttributes[payload.id - 1].value = payload.value
  }

  @Mutation
  public CLEAR(): void {
    this.wineAttributes = this.wineAttributes.map(
      (w): IWineAttribute => {
        delete w.value
        return w
      }
    )
    this.result = { value: 0, comment: '', status: false }
  }

  @Mutation
  public SET_RESULT({ value, status }): void {
    this.result.value = value
    this.result.status = status
  }

  @Action({})
  public async POST_WINE_VALUE(): Promise<void> {
    // const inputValues = this.wineAttributes.map((attr): IInputValue => ({ id: attr.id, value: attr.value }))
    // // eslint-disable-next-line @typescript-eslint/no-explicit-any
    // const res: AxiosResponse<IResult> = await axios.post('/api/predict', inputValues)
    // if (res.data.status) {
    //   this.context.commit('SET_RESULT', res.data)
    // }
  }

  public get IsAllValueSet(): () => boolean {
    return (): boolean => {
      return this.wineAttributes.every((attr): boolean => {
        return 'value' in attr && attr.value !== 0
      })
    }
  }
}
