import 'styles/Magic.css';
import Tanay from 'assets/tanay.gif';

const Magic = ({ header }) => {
  return `
    <div class="Magic">
        <img class="omg-tanay" src=${Tanay} alt="omg-tanay" />
        <h2>${header}</h2>
    </div>
  `;
};

export default Magic;
