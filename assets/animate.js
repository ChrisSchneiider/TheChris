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

export function STARTING_POINT(b,x,y,z){ // cy="278.75" r="38.906"
  anime({
    targets:x,
    //opacity:[0,1],
		duration: 1500,
		easing: 'cubicBezier(0.715, 0.255, 0.375, 0.825)',
    direction: 'normal',
    r:[
      {value:[2,5]},
      {value:38.906,delay:100}
    ],
    fill:[
      {value:"#e92525"},
      {value:"#773535",delay:150}
    ]
  });
  anime({
    targets:y,
    opacity:[{
      value:[0,1],
      delay:100,
      duration:50
    }],
		duration: 1500,
		easing: 'cubicBezier(0.715, 0.255, 0.375, 0.825)',
    direction: 'normal',
    r:[
      {value:[0,2]},
      {value:31.125,delay:200}
    ],
    fill:[
      {value:"#222222"},
      {value:"#ab4848",delay:250}
    ]
  });
  anime({
    targets:[b,z],
    opacity:[0,1],
    duration: 1500,
    delay:1500
  });
}
