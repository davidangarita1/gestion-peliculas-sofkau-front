import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getCatalogo } from '../utils/get'

function Catalogos() {
  const dispatch = useDispatch()
  const { isLoading, catalogs, error } = useSelector(state => state.catalogs)

  useEffect(() => {
    dispatch(getCatalogo('bbbb'))
  }, [])

  useEffect(() => {
    const socket = new WebSocket('ws://' + 'localhost:8080' + '/retrieve/' + 'xxxx')
    socket.onmessage = function (m) {
      const data = JSON.parse(m.data)
      dispatch(data.type)
      console.log('Got message: ' + data.type)
    }
  }, [])

  return (
    <div>
      {catalogs && console.log(catalogs)}
      {catalogs && catalogs.map((catalog) => {
        return (
          <div key={catalog._id}>
            <h1>{catalog.nombre}</h1>
            <>
              {
              catalog.pelicula &&
              Object.keys(catalog.pelicula).map((key) => {
                return (
                  <h4 key={key}>{catalog.pelicula[key].nombre}</h4>
                )
              })
              }
            </>
          </div>
        )
      })}
      {isLoading && <h1>Cargando...</h1>}
      {error && <h1>Error {error}</h1>}
    </div>
  )
}

export default Catalogos
