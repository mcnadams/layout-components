//import { unlink } from "fs";
import styles from './index.css';

const root = document.getElementById('root');
const list = document.createElement('ul');
list.className = styles.dogs;

root.appendChild(list);

const dogs = ['rover', 'bingo', 'fido', 'banjo'];

dogs.forEach(dog => {
  const li = document.createElement('li');
  li.textContent = dog;
  list.appendChild(li);
});
