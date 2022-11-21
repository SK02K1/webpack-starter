import './App.css';
import Tanay from './tanay.gif';
import Logo from './logo.svg';

const App = ({ header }) => {
  return `
    <div class="App">
      <h2>${header}</h2>
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
