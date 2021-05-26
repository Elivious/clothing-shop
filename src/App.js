import './App.css';
import HomePage from './pages/homepage/homepage.component';
import './pages/homepage/homepage.styles.scss';
import {Route} from 'react-router-dom';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
    <a href='/'>HOME</a>
  </div>
)

const JacketsPage = () => (
  <div>
    <h1>JACKETS PAGE</h1>
    <a href='/'>HOME</a>
  </div>
)

const SneakersPage = () => (
  <div>
    <h1>SNEAKERS PAGE</h1>
    <a href='/'>HOME</a>
  </div>
)

const WomensPage = () => (
  <div>
    <h1>WOMENS PAGE</h1>
    <a href='/'>HOME</a>
  </div>
)

const MensPage = () => (
  <div>
    <h1>MENS PAGE</h1>
    <a href='/'>HOME</a>
  </div>
)

function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop/hats' component={HatsPage} />
      <Route path='/shop/jackets' component={JacketsPage} />
      <Route path='/shop/sneakers' component={SneakersPage} />
      <Route path='/shop/womens' component={WomensPage} />
      <Route path='/shop/mens' component={MensPage} />
    </div>
  );
}

export default App;
