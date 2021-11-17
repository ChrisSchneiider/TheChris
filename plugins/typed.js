import Typed from 'typed.js';

export function DESTROY_ANIME(a){new Typed(a).destroy();}


export function INTRO(a,b) {
  var typed = new Typed(a, {
    strings: b,
    smartBackspace: true,
    typeSpeed: 30,
    showCursor: true,
    cursorChar: '_',
    autoInsertCss: false,
    fadeOut : false , 
    fadeOutClass : 'typed-fade-out' , 
    fadeOutDelay : 500 ,
    onComplete: function() { 
      typed.toggle()
    }
  });
}


export function INTRO_FOLLOW(a,b) {
  var typed = new Typed(a, {
    strings: b,
    smartBackspace: true,
    typeSpeed: 30,
    showCursor: false, 
  });
  return typed;
}