import { combineReducers } from 'redux'
import CatalogsReducer from '../reducers/CatalogsReducer'

const rootReducer = () => {
  return combineReducers(
    {
      catalogs: CatalogsReducer
    }
  )
}

export default rootReducer
