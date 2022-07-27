import Product from './components/Product'
import {AppWrap} from './components/styles/App.styled'
import GlobalStyles from './components/styles/Global';


function App() {
  return (
    <>
      <GlobalStyles/>
      <AppWrap>
        <Product/>
      </AppWrap>
    </>
  );
}

export default App;
