
import {Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import './App.scss'


const App = () => {
  return (
    <>
    <NavBar></NavBar>
    <Container className="mt-5">
    <div className='text-center' style={{'fontSize':'4rem','fontWeight':'bold'}}>
      Full-stack Web Developer
    </div>
    <div className='text-center mb-5'  style={{'fontSize':'2.5rem'}}>
      Midterm Project
    </div>
    
      <div className="myname shadow-lg">
        <div className="container">
      <div className="glitch" data-text="Kritsakorn Amnajsatit">Kritsakorn Amnajsatit</div>
      <p className="subtitle mt-2">62070006  </p>
      </div>
      </div>

    </Container>
    </>
  )

  
}

export default App;
