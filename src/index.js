import _ from 'lodash'
import './style.css'
import { cube } from './math.js'

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

// function component() {
//   let element = document.createElement('pre');

//   // Lodash, currently included via a script, is required for this line to work
//   // element.innerHTML = _.join(['Hello', 'webpack'], 'sadasdasd ');
//   element.innerHTML = [
//     'Hello webpack!',
//     '5 cubed is equal to ' + cube(5)
//   ].join('\n\n');

//   element.classList.add('hello');

//   return element;
// }

// document.body.appendChild(component());

function getComponent() {
  return import(/* webpackChunkName: "lodash" */ 'lodash').then(({ default: _ }) => {
    var element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    return element;
  }).catch(error => 'An error occurred while loading the component');
}

getComponent().then(component => {
  document.body.appendChild(component);
})