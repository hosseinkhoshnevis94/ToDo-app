import {combineReducers} from 'redux'
import todosReducer from '../components/ToDos/todosSlice'

const rootReducer = combineReducers({
    todos:todosReducer
})

export default rootReducer