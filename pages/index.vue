<template>
  <div id="master" @mousemove="MOUSE_EVENTS">
    <!-- <span ref="ui_tag_teste" >Ei {{myName}}...</span> -->

    <div id=branchs >
      <canvas 
        ref="ui_line_one"
        id='cv'
        class="l-1"
        :width="innerWidth" 
        :height="innerHeight"
      />
    </div>
    
    <svg  id="SVG" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1000 1000">
      <g id="Prancheta_1" data-name="Prancheta 1">
        <circle ref="cicle_one" id="Elipse_2" class="cls-1" cx="482" cy="463" r="55"/>
        <circle id="Elipse_1" class="cls-2" cx="482" cy="463" r="44"/>
        <circle ref="cicle_two" id="ui_svg_path_1" data-name="2_Elipse_2" class="cls-1" cx="804" cy="193" r="55"/>
        <circle id="_2_Elipse_1" data-name="2_Elipse_1" class="cls-2" cx="804" cy="193" r="44"/>
      </g>
    </svg>
    
    



  </div>
</template>

<script>
  import { 
    EVENTTESTE
  } from '~/assets/animate';
  export default {
   data(){
     return{
        myName:'ChrisSchneider',
        innerWidth:0,
        innerHeight:0,
     }
   },
   mounted: function () {
    /** buscando elementos don  */ 
      this.LINE_1 = this.$refs.ui_line_one

    /** iniciando evento */
      this.FIRSTEVENT()

      console.log("elemento"+this.$refs.cicle_one.getBoundingClientRect().top)

      console.log("y"+window.innerHeight)
      console.log("x"+window.innerWidth)

      this.innerHeight = window.innerHeight
      this.innerWidth = window.innerWidth


      let IsNextEvent = setTimeout(() => {
        
        console.log("this is the first message")
      
      
        var cv= this.LINE_1;
        var ctx = cv.getContext('2d');
        this.vueCanvas = ctx;

        this.vueCanvas.beginPath();
        this.vueCanvas.height = window.innerHeight;
        this.vueCanvas.width = window.innerWidth;
        this.vueCanvas.lineWidth = 10;
        this.vueCanvas.strokeStyle = "#9e4a4a"

        this.vueCanvas.moveTo((this.$refs.cicle_one.getBoundingClientRect().left+35),(this.$refs.cicle_one.getBoundingClientRect().top+35))
        this.vueCanvas.lineTo((this.$refs.cicle_two.getBoundingClientRect().left+35),(this.$refs.cicle_two.getBoundingClientRect().top+35))
        this.vueCanvas.stroke()
      }, 1000);
   },
   methods:{
     /** iniciando functions do projeto */
      
      MOUSE_EVENTS(x){
        
        // this.vueCanvas.lineTo((x.clientX+500),(x.clientY+700))
        // this.vueCanvas.stroke()

        //console.log(x.clientX)
      },
      
      
      FIRSTEVENT(){
          console.log('dentro do primeiro evento')
        // iniciando anime.js, chamando a função e passando o elemento.
          //EVENTTESTE(this.LINE_1)
        // teste

        
        


            // function buildUnitVector(p1, p2, uVect) {
            //     uVect.x = (p2.x - p1.x);
            //     uVect.y = (p2.y - p1.y );
            //     var vectorNorm = Math.sqrt( sq(uVect.x)+sq(uVect.y) );
            //     uVect.x/=vectorNorm;
            //     uVect.y/=vectorNorm;
            // }


            // function drawShorterLine(ctx, p1, p2, a, b) {
            //     buildUnitVector(p1, p2, unitVector);
            //     sp1.x = p1.x + unitVector.x * a;
            //     sp1.y = p1.y + unitVector.y * a;
            //     sp2.x = p2.x - unitVector.x * b;
            //     sp2.y = p2.y - unitVector.y * b;
            //     ctx.beginPath();
            //     ctx.moveTo(sp1.x, sp1.y);
            //     ctx.lineTo(sp2.x, sp2.y);
            //     ctx.stroke();
            // }
            // var unitVector = { x:0, y:0 }, sp1 = {x:0,y:0},
            //             sp2 = {x:0, y:0 } ; 

            // // use with
            // var p1 = {x:200, y:500}, p2 = {x:100, y:2500} ;
            // drawShorterLine(this.vueCanvas, p1, p2, 10, 10);


            function sq(x) { return x*x ;}




      }
   }
  }
</script>

<style lang="scss" scoped>
  #master{
    position: fixed;
    margin:auto;
    width: 100%;
    height: 100%;

    .l-1{
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      background-color: greenyellow;
    }
    
    #SVG{
      display: block;
      position: fixed;
      margin: auto;
      width: 100%;
      height: 100%;
      margin-top: 0%;
      .cls-1 {
        fill: #9e4a4a;
      }

      .cls-2, .cls-3 {
        fill: #ac5454;
      }

      .cls-3 {
        fill-rule: evenodd;
      }
    }
  }
</style>
