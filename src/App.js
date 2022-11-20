import './App.css';
import Tanay from './tanay.gif';

const App = ({ header }) => {
  return `
    <div class="App">
      <h2>${header}</h2>
      <img 
        class="tanay" 
        src=${Tanay} 
        alt="omg-tanay" 
      />
    </div>
  `;
};

export default App;
