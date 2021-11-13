import anime from 'animejs';

  var event = 0;

  export function PING(){
    return event;
  }

export function ANIME_GROUPS(a,b,c,d,e,f,g,h,i,j,l,m,n,o,p,q) {
  anime({
    targets:[a,b,c,d,e,f,g,h,i,j,l,m,n,o,p,q],
    translateY: function() { return anime.random(-5, 15); },
    translateX: function() { return anime.random(-15, 5); },
		duration: 1500,
		easing: 'cubicBezier(0.715, 0.255, 0.375, 0.825)',
    direction: 'alternate',
    loop: true,
    delay: anime.stagger(100)
  });
}

export function EFFECT_CI(a,b,c,d) {
  anime({
    targets:[a,b,c,d],
    r:["+=25"],
    opacity:[1,0],
    fill:['#f15c5c'],
		duration: 1500,
		easing: 'linear',
    direction: 'normal',
    loop: true,
    //delay: anime.stagger(100)
  });
}

export function EFFECT_LI(a) {
  anime({
    targets:[a],
    opacity:[0,1],
		duration: 1500,
		easing: 'linear',
    direction: 'normal',
    //loop: true,
    //delay: anime.stagger(100)
  });
}
