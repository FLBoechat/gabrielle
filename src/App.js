import { ThemeProvider } from "styled-components"
import Product from './components/Product'
import {StyledApp} from './components/styles/App.styled'
import GlobalStyles from './components/styles/Global';

const theme = {
  desktop: '1440px', 
}

function App() {
  return (
    <ThemeProvider theme = {theme}>
      <>
        <GlobalStyles/>
        <StyledApp>
          <Product/>
        </StyledApp>
      </>
    </ThemeProvider>
  );
}

export default App;
