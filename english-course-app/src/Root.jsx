import App from './App.jsx';
import { StoreProvider } from './context/StoreContext.jsx';
import Container from './components/ui/Container.jsx';
import NavBar from './components/ui/NavBar.jsx';

function Root() {
  return (
    <StoreProvider>
      <NavBar />
      <Container>
        <App />
      </Container>
    </StoreProvider>
  );
}

export default Root;
