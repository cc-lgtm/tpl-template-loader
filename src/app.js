import tpl from './info.tpl';

const  oApp = document.querySelector('#app');

oApp.innerHTML = tpl({
  name: 'coderC',
  age: 20,
  career: 'web前端开发实习生',
  hobby: '读书'
})