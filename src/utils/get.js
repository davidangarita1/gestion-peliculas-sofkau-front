import axios from 'axios'
import { CoursesLoading, CoursesLoadSucces, CoursesLoadError } from '../actions/CoursesActions'

export const getCourse = (id) => (dispatch) => {
  dispatch(CoursesLoading())

  const options = {
    method: 'GET',
    url: `http://localhost:8080/api/course/${id}`
  }

  axios.request(options).then(function (response) {
    dispatch(CoursesLoadSucces(response.data))
  }).catch(function (error) {
    dispatch(CoursesLoadError(error))
  })
}
