import Container from './components/layout/Container';
import Product from './components/Pages/Product';
import Media from 'react-media'

function App() {
  return (
    <div className="App">
      <Media>
        <Container>
          <Product/>
        </Container>
      </Media>
    </div>
  );
}

export default App;
