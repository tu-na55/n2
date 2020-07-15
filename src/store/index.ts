import { ActionTree, Store } from 'vuex'

import { initialiseStores } from '@/utils/store-accessor.ts'
import { IAppState } from '@/store/app'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const initializer = (store: Store<any>): void => initialiseStores(store)
export const plugins = [initializer]
export * from '@/utils/store-accessor'

export interface IRootState {
  appState: IAppState
}

export const actions: ActionTree<IAppState, IRootState> = {
  // async nuxtServerInit({ commit }): Promise<void> {
  //   const res = await this.$axios.$get('/api/wine_attributes')
  //   if (res.wine_attributes) {
  //     commit('app/SET_WINE_ATTR', res.wine_attributes)
  //   }
  // },
}
