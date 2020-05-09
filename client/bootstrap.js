import { store } from '@things-factory/shell'
import tutorial from './reducers/main'

export default function bootstrap() {
  store.addReducers({
    tutorial
  })
}
