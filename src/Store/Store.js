import {createStore} from 'redux'
import Reducer from './Reducers'

const Store = createStore(Reducer)

export default Store