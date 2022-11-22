import 'index.css';
import App from 'components/App';

const root = document.getElementById('root');

const showMagicHandler = (e) => {
  import(/* webpackPrefetch: true */ 'components/Magic').then(
    ({ default: Magic }) => {
      root.innerHTML += Magic({ header: 'ॐ नमः शिवाय ॐ' });
    }
  );
};

const init = () => {
  root.innerHTML = App();
  const btnMagic = document.querySelector('.btn-magic');
  btnMagic.addEventListener('click', showMagicHandler);
};

init();
