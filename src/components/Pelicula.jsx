import { Modal } from 'react-bootstrap'
import { useState } from 'react'

function Pelicula ({ pelicula }) {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <>
      <span className='modalButton' onClick={handleShow}>
        {pelicula.nombre}
      </span>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pelicula.nombre}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><strong>Sinopsis: </strong>{pelicula.sinopsis}</p>
          <p><strong>Año: </strong>{pelicula.fecha}</p>
          <p><strong>Genero: </strong>{pelicula.genero}</p>
        </Modal.Body>
        <Modal.Footer>
          <a href={pelicula.url} target='_blank' rel='noreferrer'>Ver Pelicula</a>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Pelicula
