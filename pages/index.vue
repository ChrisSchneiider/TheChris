<template>
  <div id="master">
    <span>Ei {{myName}}...</span>
  </div>
</template>

<script>
  export default {
   data(){
     return{
       myName:'ChrisSchneider'
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
    span{
      font-size: 50px;
      display: block;
      position: relative;
      margin: auto;
      margin-top: 25%;
      text-align: center;
      color: #d0fbff;
      font-family: Arial, Helvetica, sans-serif;
    }
  }
</style>
