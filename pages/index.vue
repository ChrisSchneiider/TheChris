<template>
  <div ref="ui_mega_container" id="MEGA_CONTAINER" :width="`${window.width}px`" :height="`${window.height}px`">
    
    
    
    <div class="PRESENTATION">
      <span class="AP-TAGS T1">{{presentation.tag1}}</span>
      <div class="AP-NAME">
        <font ref="ui_teste"/>
      </div>
      <span class="AP-TAGS T2">{{presentation.tag2}}</span>
    </div>

    <MooringGroups
      class="MOORING_GROUPS"
      :width="window.width"
      :height="window.height"
    />

  </div>
</template>

<script>
  import { TESTE } from '~/plugins/typed';
  export default {
    data(){
      return{
        window:{
          width:0,
          height:0
        },
        presentation:{
          tag1:"{{",
          tag2:"}}",
          name:"Chris Schneider"
        }
      }
    },
    mounted() {
        this.teste = this.$refs.ui_teste
        TESTE(this.teste)
      /** atualizando o primeiro tamanho da janela */
        this.window.width  = window.innerWidth
        this.window.height = window.innerHeight
      /** adicionando observador de estado // ativado toda vez que o navegador sofrer mudanças */ 
        window.addEventListener('resize', this.WINDOWSIZE);
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
        }
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
        left: 82.883px;
        top: 309.7px;
      }
      .T2{
        left: 502.883px;
        top: 309.7px;
      }
      .AP-NAME {
        position: absolute;
        left: 147px;
        top: 309.7px;
        z-index: 2;
        font{
          font-size: 38px;
          font-family:Verdana, Geneva, Tahoma, sans-serif;
          color: rgb(255, 255, 255);
          font-weight: bold;
        }
        
      }
      

    }
  }
</style>

