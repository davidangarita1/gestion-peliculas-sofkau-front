import actionsTypesCourses from '../actions/actionsTypes/ActionsTypeMyQuestions'

const initialState = {
  isLoading: false,
  courses: null,
  error: null
}

const CourseReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionsTypesCourses.LOADING_SUCCESS_COURSES:
      return {
        ...state,
        isLoading: true
      }
    case actionsTypesCourses.LOAD_SUCCESS_COURSES:
      return {
        ...state,
        isLoading: false,
        courses: payload
      }
    case actionsTypesCourses.LOAD_FAILURE_COURSES:
      return {
        ...state,
        isLoading: false,
        error: payload
      }

    default: return state
  }
}

export default CourseReducer
