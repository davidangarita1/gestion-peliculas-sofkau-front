import actionsTypesCatalogs from './actionsTypes/ActionsTypeMyCatalogs'

export const CatalogsLoading = () => {
  return {
    type: actionsTypesCatalogs.LOADING_SUCCESS_CATALOGS
  }
}

export const CatalogsLoadSucces = (catalogs) => {
  return {
    type: actionsTypesCatalogs.LOAD_SUCCESS_CATALOGS,
    payload: catalogs
  }
}

export const CatalogsLoadError = (error) => {
  return {
    type: actionsTypesCatalogs.LOAD_FAILURE_CATALOGS,
    payload: error
  }
}
