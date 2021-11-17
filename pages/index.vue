<template>
  <div ref="ui_mega_container" id="MEGA_CONTAINER" :width="`${window.width}px`" :height="`${window.height}px`">
    
    
    
    <div ref="ui_AP_CONTAINER" class="PRESENTATION">
      <span class="AP-TAGS T1">{{presentation.tag1}}</span>
      <div class="AP-NAME">
        <font ref="ui_AP_1"/>
      </div>
      <span class="AP-TAGS T2">{{presentation.tag2}}</span>
    </div>

    <MooringGroups
      class="MOORING_GROUPS"
      :width="window.width"
      :height="window.height"
      @STARTGROUPS="START_EVENT"
    />

    <a ref="ui_link" v-if="linkActive" opacity="0" href="https://github.com/ChrisSchneiider" target="_blank">github: ChrisSchneiider</a>

  </div>
</template>

<script>
  import { 
    INTRO,
    DESTROY_ANIME,
    INTRO_FOLLOW 
  } from '~/plugins/typed';
  import {
    INTRO_ANIME
  } from '~/plugins/animate';
  export default {
    data(){
      return{
        linkActive:false,
        window:{
          width:0,
          height:0
        },
        presentation:{ // this.presentation.tag1
          tag1:"{{",
          tag2:"}}",
          texts:{
            a:[
                "<font class=\"default\">👋</font>", 
                "<font class=\"default\">Olá, eu sou o Chris</font>", 
                "<font class=\"default\">Chris Schneider</font>"
              ],
            b:[
                "<font class=\"code 5d71ae\">new </font><font class=\"code 47d462\">event</font> <font class=\"code 5a5a5a\">(</font> <font class=\"code 5d71ae\">this</font><font class=\"code 5a5a5a\">.</font><font class=\"code e583f3\">circle</font><font class=\"code 5a5a5a\">).</font> <font class=\"code e0d745\">start</font><font class=\"code 5a5a5a\">();</font>"
              ],
            c:[
                "<font class=\"default\">Seja bem vindo ao<br>meu mundo! :)</font>",
              ],
            d:[
                "<font class=\"default\">💗 a programação<br>💗 o desenvolvimento</font><font class=\"normal\"><br><br>As vezes as coisas começam com uma simples<br>brincadeira igual este mini projeto aqui.<br>Mais no decorrer das coisas, você pensa;</font><br><br><font class=\"thought\">“cara... acho que eu posso aprimorar isso! Hmm... Talvez um portfólio?”<br><br></font><font class=\"normal\">Talvez... até lá, vamos conversando.</font>",
              ],
          }
        }
      }
    },
    mounted() {
      /** criando variável de elementos */
        this.AP_CONTAINER = this.$refs.ui_AP_CONTAINER
        this.AP_1         = this.$refs.ui_AP_1
        this.link         = this.$refs.ui_link
      /** atualizando o primeiro tamanho da janela */
        this.window.width  = window.innerWidth
        this.window.height = window.innerHeight
      /** adicionando observador de estado // ativado toda vez que o navegador sofrer mudanças */ 
        window.addEventListener('resize', this.WINDOWSIZE);
      /** chamando a função de apresentação */
        this.START_PRESENTATION()
    },
    methods:{
      /**
       * função para coletar e atualizar estados|mudanças no navegador do usuário
       * responsável por atualizar tamanho da tela
       */
        WINDOWSIZE(){
          // atualizando valores
            this.window.width  = window.innerWidth
            this.window.height = window.innerHeight
        },
      /**
       * iniciando função animação de texto e apresentação:
       */
        START_PRESENTATION(){
          var x = INTRO(this.AP_1,this.presentation.texts.a)
          console.log(x)
        },
        START_EVENT(x){
          this.presentation.tag1 = ''
          this.presentation.tag2 = ''
          DESTROY_ANIME(this.AP_1)
          INTRO_FOLLOW(this.AP_1,this.presentation.texts.b)
          
          setTimeout(() => {INTRO_ANIME(this.AP_CONTAINER);this.START_WELCOME();}, 10000)
        },
        START_WELCOME(){
          DESTROY_ANIME(this.AP_1)
          INTRO_FOLLOW(this.AP_1,this.presentation.texts.c)
          setTimeout(() => {this.FINISH_WELCOME();}, 3000)
        },
        FINISH_WELCOME(){
          DESTROY_ANIME(this.AP_1)
          INTRO_FOLLOW(this.AP_1,this.presentation.texts.d)
          setTimeout(() => {this.linkActive=true}, 13000)
        },

    },
    beforeUnmount() {
      /** removendo observador de estado // ativado toda vez que o navegador sofrer mudanças */ 
        window.removeEventListener('resize', this.WINDOWSIZE); 
    },
  }
</script>

<style lang="scss" scoped>
  #MEGA_CONTAINER{
      position: absolute;
      display: block;
      background-color: transparent;
      width: 100%;
      height: 100%;
    a{
      position: absolute;
      display: inline-block;
      z-index: 500;
      color: #d3f5ff;
      font-family: RobotoThin;
      text-decoration: none;
      left: 240px;
      top: 400px;
    }
    .MOORING_GROUPS{z-index: 200;}
    .PRESENTATION{
      position: fixed;
      display: block;
      width: 100%;
      height: 100%;
      z-index: 0;
      .AP-TAGS{
        font-size: 38px;
        font-family:Verdana, Geneva, Tahoma, sans-serif;
        color: #2e2e31;
        font-weight: bold;
        line-height: 1.2;
        position: absolute;
        z-index: 4;
      }
      .T1{
        left: 432.883px;
        top: 279.7px;
      }
      .T2{
        left: 872.883px;
        top: 279.7px;
      }
      .AP-NAME {
        position: relative;
        left: 540px;
        top: 279.7px;
      }
      

    }
  }
</style>

