import actionsTypesCourses from './actionsTypes/ActionsTypeMyQuestions'

export const CoursesLoading = () => {
  return {
    type: actionsTypesCourses.LOADING_SUCCESS_COURSES
  }
}

export const CoursesLoadSucces = (questions) => {
  return {
    type: actionsTypesCourses.LOAD_SUCCESS_COURSES,
    payload: questions
  }
}

export const CoursesLoadError = (error) => {
  return {
    type: actionsTypesCourses.LOAD_FAILURE_COURSES,
    payload: error
  }
}
