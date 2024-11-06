// Because of webpack, CSS rules need to be imported here and not in the .html file
import './styles.css';

// Just to have a template for the file importing
import { LinkedList } from './linkedList.js';
import { node } from './linkedList.js';

// Another webpack check
if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

// ---------------------- START YOUR CODE BELOW HERE

let list1 = new LinkedList();
list1.append(1);
list1.append(3);
list1.prepend(0);
console.log(list1);
console.log(list1.size());
