import Typed from 'typed.js';

export function TESTE(a) {
  var typed = new Typed(a, {
    strings: ["Olá!", "Eu sou o Chris", "Chris Schneider"],
    smartBackspace: true,
    typeSpeed: 30,
    showCursor: true,
    cursorChar: '_',
    autoInsertCss: false,
    fadeOut : false , 
    fadeOutClass : 'typed-fade-out' , 
    fadeOutDelay : 500 , 
  });
  return typed;
}