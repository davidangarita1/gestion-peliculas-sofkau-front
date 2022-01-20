import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Accordion, Button } from 'react-bootstrap'
import { getCatalogo } from '../utils/get'
import Pelicula from './Pelicula'

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
    <>
      {catalogs && catalogs.map((catalog) => {
        return (
          <div key={catalog._id} className='card mt-3' style={{ width: '100%' }}>
            <div className='card-body'>
              <h5 className='card-title'>{catalog.nombre}</h5>
              <Accordion defaultActiveKey='0' flush>
                <Accordion.Item eventKey='0'>
                  <Accordion.Header>Peliculas</Accordion.Header>
                  <Accordion.Body>
                    {catalog.pelicula &&
                      Object.keys(catalog.pelicula).map((key) => {
                        return (
                          <div key={key}>
                            <Pelicula pelicula={catalog.pelicula[key]} />
                          </div>
                        )
                      })}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        )
      })}
      {isLoading && <h1>Cargando...</h1>}
      {error && <h1>Error {error}</h1>}
    </>
  )
}

export default Catalogos
