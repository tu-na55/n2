import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import App from '@/store/app'
// import { IRootState } from '@/store'

// eslint-disable-next-line import/no-mutable-exports
let appStore: App

const initialiseStores = (store: Store<any>): void => {
  appStore = getModule(App, store)
}

export { initialiseStores, appStore }
