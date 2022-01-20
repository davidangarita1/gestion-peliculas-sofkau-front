import { useEffect } from 'react'
import { getCourse } from './utils/get'
import { useDispatch } from 'react-redux'

function App () {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCourse('bbbb'))
  }, [])

  useEffect(() => {
    const socket = new WebSocket('ws://' + 'localhost:8080' + '/retrieve/' + 'bbbb')
    socket.onmessage = function (m) {
      const data = JSON.parse(m.data)
      dispatch(data.type)
      console.log('Got message: ' + data.type)
    }
  }, [])

  return (
    <div className='App'>
      <h1>oe</h1>

    </div>
  )
}

export default App
