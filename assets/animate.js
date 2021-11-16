import anime from 'animejs';

  var color_1 = "#FFFFFF";
  var color_2 = "#222222";
  var color_3 = "#202124";
  var color_4 = "#5d71ae";
  var bezier  = 'cubicBezier(0.715, 0.255, 0.375, 0.825)';


export function ANIME_GROUPS(a,b,c,d,e,f,g,h,i,j,l,m,n,o,p,q) {
  anime({
    targets:[a,b,c,d,e,f,g,h,i,j,l,m,n,o,p,q],
    translateY: function() { return anime.random(-5, 15); },
    translateX: function() { return anime.random(-15, 5); },
		duration: 1500,
		easing: bezier,
    direction: 'alternate',
    loop: true,
    delay: anime.stagger(100)
  });
}

export function PRESENT_EVENT(a,b,c,d,e,f) { // cx="842" cy="383"
  anime({
    targets:[a,b,c,f],
    cx:842,
    cy:383,
		duration: 1000,
		//easing: bezier,
    direction: 'normal'
    //delay: anime.stagger(100)
  });
  anime({
    targets:[e],
    x:842,
    y:383,
		duration: 1000,
		opacity:[1,0],
    direction: 'normal'
    //delay: anime.stagger(100)
  });
  anime({
    targets:[d],
		duration: 1500,
		opacity:[0,1],
    direction: 'normal',
    delay:1000
  });
  anime({
    targets:b,
    r:[
      {value:[2,5]},
      {value:55,delay:100}
    ],
    fill:[
      {value:color_1},
      {value:color_3,delay:150}
    ]
  });
  anime({
    targets:[c,f],
    r:44,
    fill:"#758acb"
  });
}

export function EFFECT_CI(a) {
  anime({
    targets:[a],
    r:["+=25"],
    opacity:[1,0],
    fill:['#758acb'],
		duration: 1500,
		easing: 'linear',
    direction: 'normal',
    loop: true,
    //delay: anime.stagger(100)
  });
}

export function STARTING_POINT(b,x,y,z){ // cy="278.75" r="38.906"
  anime({
    targets:x,
    //opacity:[0,1],
		duration: 1300,
		easing: bezier,
    direction: 'normal',
    r:[
      {value:[2,5]},
      {value:38.906,delay:100}
    ],
    fill:[
      {value:color_1},
      {value:color_3,delay:150}
    ]
  });
  anime({
    targets:y,
    opacity:[{
      value:[0,1],
      delay:100,
      duration:50
    }],
		duration: 1300,
		easing: bezier,
    direction: 'normal',
    r:[
      {value:[0,2]},
      {value:31.125,delay:200}
    ],
    fill:[
      {value:color_2},
      {value:color_4,delay:250}
    ]
  });
  anime({
    targets:[b,z],
    opacity:[0,1],
    duration: 1500,
    delay:1500
  });
}

export function STARTING_POINT_BIG(b,x,y,z,e){ // cy="278.75" r="38.906"
  anime({
    targets:x,
    //opacity:[0,1],
		duration: 1000,
		easing: bezier,
    direction: 'normal',
    r:[
      {value:[2,5]},
      {value:55,delay:100}
    ],
    fill:[
      {value:color_1},
      {value:color_3,delay:150}
    ]
  });
  
  anime({
    targets:y,
    opacity:[{
      value:[0,1],
      delay:100,
      duration:50
    }],
		duration: 1000,
		easing: bezier,
    direction: 'normal',
    r:[
      {value:[0,2]},
      {value:44,delay:200}
    ],
    fill:[
      {value:color_2},
      {value:"#758acb",delay:250}
    ]
  });

  anime({
    targets:[b,z],
    opacity:[0,1],
    duration: 1300,
    delay:1500
  });

  anime({
    targets:[e],
    r:["+=25"],
    opacity:[1,0],
    fill:['#758acb'],
		duration: 1250,
		easing: 'linear',
    direction: 'normal',
    loop: true
  });
}

export function STARTING_POINT_SMALL(b,x,y,z){ // cy="278.75" r="38.906"
  anime({
    targets:x,
    //opacity:[0,1],
		duration: 1000,
		easing: bezier,
    direction: 'normal',
    rx:[
      {value:[2,5]},
      {value:34.031,delay:100}
    ],
    ry:[
      {value:[2,5]},
      {value:34.031,delay:100}
    ],
    fill:[
      {value:color_1},
      {value:color_3,delay:150}
    ]
  });

//    rx="34.031" ry="34.031"
//    rx="27.031" ry="27.031"


  anime({
    targets:y,
    opacity:[{
      value:[0,1],
      delay:100,
      duration:50
    }],
		duration: 1000,
		easing: bezier,
    direction: 'normal',
    rx:[
      {value:[0,2]},
      {value:27.031,delay:200}
    ],
    ry:[
      {value:[0,2]},
      {value:27.031,delay:200}
    ],
    fill:[
      {value:color_2},
      {value:color_4,delay:250}
    ]
  });
  anime({
    targets:[b],
    opacity:[0,1],
    duration: 1500,
    delay:1000
  });
  anime({
    targets:[z],
    opacity:[0,1],
    duration: 1500,
    delay:1500
  });
}