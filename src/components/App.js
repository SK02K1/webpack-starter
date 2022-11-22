import 'styles/App.css';
import Logo from 'assets/logo.svg';
import _ from 'lodash';

const App = () => {
  const header = 'vanillaJS app Builder';
  return `
        <div class="App">
          <h1>${_.join([header], ' ')}</h1>
          <p>Build apps with plain JS but with modern tooling</p>
          <img class="logo" src=${Logo} alt="logo" />
          <button class="btn-magic">show some magic</button>
        </div>
    `;
};

export default App;
