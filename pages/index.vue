<template>
  <div id="MEGA_CONTAINER">
    <MooringGroups
      :width="window.width"
      :height="window.height"
    />
  </div>
</template>

<script>
  export default {
    data(){
      return{
        window:{
          width:0,
          height:0
        }
      }
    },
    mounted() {
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
    color: red;
  }
</style>