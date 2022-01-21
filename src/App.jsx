import Catalogos from './components/Catalogos'
import 'bootstrap/dist/css/bootstrap.min.css'
import popcorn from './media/popcorn.png'

function App () {
  return (
    <div className='App'>
      <div className='row'>
        <nav className='navbar navbar-dark bg-dark mb-5'>
          <div className='container'>
            <a className='navbar-brand' href='#'>
              <div className='row'>
                <div className='col-2'>
                  <img src={popcorn} alt='popcorn' style={{ width: '50px' }} />
                </div>
                <div className='col-10'>
                  <h1>Catalogos de Peliculas</h1>
                </div>
              </div>
            </a>
          </div>
        </nav>
      </div>
      <div className='row'>
        <div className='col-8 offset-2'>
          <Catalogos />
        </div>
      </div>
    </div>
  )
}

export default App
