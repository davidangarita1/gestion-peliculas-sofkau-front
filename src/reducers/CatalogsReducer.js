import actionsTypesCatalogs from '../actions/actionsTypes/ActionsTypeMyCatalogs'

const initialState = {
  isLoading: false,
  catalogs: null,
  error: null
}

const CatalogsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionsTypesCatalogs.LOADING_SUCCESS_CATALOGS:
      return {
        ...state,
        isLoading: true
      }
    case actionsTypesCatalogs.LOAD_SUCCESS_CATALOGS:
      return {
        ...state,
        isLoading: false,
        catalogs: payload
      }
    case actionsTypesCatalogs.LOAD_FAILURE_CATALOGS:
      return {
        ...state,
        isLoading: false,
        error: payload
      }

    default: return state
  }
}

export default CatalogsReducer
