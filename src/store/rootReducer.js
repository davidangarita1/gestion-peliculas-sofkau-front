import { combineReducers } from 'redux'
import CourseReducer from '../reducers/CourseReducer'

const rootReducer = () => {
  return combineReducers(
    {
      courses: CourseReducer
    }
  )
}

export default rootReducer
