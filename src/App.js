import './App.css';
import HomePage from './pages/homepage/homepage.component';
import './pages/homepage/homepage.styles.scss';
import {Route} from 'react-router-dom';
import ShopPage from './shop/shop.component'

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
    <a href='/'>HOME</a>
  </div>
)

function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
    </div>
  );
}

export default App;
