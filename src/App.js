import './App.css';
import Header from './header';
import Home from './home';
import Checkout from './checkout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route
            path='/checkout'
            element={
              <>
                <Header />
                <Checkout />{' '}
              </>
            }
          ></Route>
          <Route
            path='/'
            element={
              <>
                <Header />
                <Home />
              </>
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
