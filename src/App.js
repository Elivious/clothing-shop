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

function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage} />
      <Route path='/hats' component={HatsPage} />
    </div>
  );
}

export default App;
