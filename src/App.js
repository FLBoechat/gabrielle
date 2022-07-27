import Container from './components/layout/Container';
import Product from './components/Pages/Product';
import {Appwrap} from './appStyles'


function App() {
  return (
    <div className="App">

          <Container>
            <Product/>
          </Container>

    </div>
  );
}

export default App;
