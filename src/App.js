
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
        <div class="contain">
        <div class="glitch" data-text="Kritsakorn">Kritsakorn</div>
        <div class="glow">Kritsakorn</div>
        <p class="subtitle">ID 62070006</p>
        </div>
      </div>

    </Container>
    </>
  )

  
}

export default App;
