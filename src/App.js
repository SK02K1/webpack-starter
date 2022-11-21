import './App.css';
import Tanay from './tanay.gif';
import Logo from './logo.svg';
import _ from 'lodash';

const App = ({ header }) => {
  return `
    <div class="App">
      <h2>${_.join([header], ' ')}</h2>
      <img 
        class="tanay" 
        src=${Tanay} 
        alt="omg-tanay" 
      />
      <img 
        class="logo" 
        src=${Logo} 
        alt="logo" 
      />
    </div>
  `;
};

export default App;
