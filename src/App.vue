<template>
<div id="uc">
  <!--<img alt="Vue logo" src="./assets/logo.png">-->
  <div class="mainContent">
    <HelloWorld class="messages" msg="Sorry it's Slowbro right now..." msg2="I'm currently in the process of redesigning this site. So enjoy this Pokemon and checkout the links below."/>
</div>
  
  <div class="mylinks">
    <!--<a href="/">Home</a>-->
    <a href="/about">About</a>
    <a href="/projects">Projects</a>
    <!--<a href="mailto: samira.gibsonCHC@gmail.com" method="POST">Contact</a>-->
    </div>  
</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 auto;
  letter-spacing: 2px;
}
.mainContent{
  text-align: left;
  margin-left: 10%;
  margin-right: 48%;
  color: #ffffff;
  text-shadow: #2c3e50 0px 1px 3px;
  margin-top: 15%;
  margin-bottom: auto;
}
html{
    background-image: url('./assets/under_construction_slowbro.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 100% !important;
    width: 100% !important;
    overflow-clip-margin: 0px !important;
    -webkit-overflow-clip-margin: 0px !important;
    -moz-overflow-clip-margin: 0px !important;
    -ms-overflow-clip-margin: 0px !important;
    overflow: hidden;
}


.mylinks{
  text-align: left;
  margin-left: 9vw;
  margin-right: 48%;
}

.mylinks a{
  color: #ffffff;
  text-shadow: #2c3e50 0 1px 3px;
  text-decoration: none;
  font-size: 22px;
  padding: 8px;  
}
a:hover{
    background-color: rgba(211, 102, 150, 0.1);
    background-image: linear-gradient(120deg, #fb8dd5 0%, #e55d98 100%);
    opacity: 0.3;
    border-radius: 30px;

  }
/*mobile styles */
@media only screen and (max-width: 650px){
  html{
    background-image: url('./assets/mobile-uc.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 100% !important;
    width: 100% !important;
    overflow-clip-margin: 0px !important;
    -webkit-overflow-clip-margin: 0px !important;
    -moz-overflow-clip-margin: 0px !important;
    -ms-overflow-clip-margin: 0px !important;
    overflow: hidden;
  }
  .mainContent{
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 10%;
    margin-bottom: 2%;
   /* background-color: rgba(255, 255, 255, 0.1);
    padding: 10px;
    border-radius: 10px;
    box-shadow: #2c3e50 0.75px 0.5px 0.75px ;*/
    font-size: calc(3px + 2vmin);
  }
  .mainContent h1{
    font-size:calc(10px + 4vmin);
  }
  .mylinks{
    margin-left: 5%;
    margin-right: 5%;
    width: 100%;
  }
  .mylinks a{
    font-size: 18px;
  }


}


@media only screen and (max-width: 800px){
  html{
    background-image: url('./assets/tablet-uc.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 100% !important;
    width: 100% !important;
    overflow-clip-margin: 0px !important;
    -webkit-overflow-clip-margin: 0px !important;
    -moz-overflow-clip-margin: 0px !important;
    -ms-overflow-clip-margin: 0px !important;
    overflow: hidden;
  }
  .mainContent{
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 10%;
    margin-bottom: 2%;
   /* background-color: rgba(255, 255, 255, 0.1);
    padding: 10px;
    border-radius: 10px;
    box-shadow: #2c3e50 0.75px 0.5px 0.75px ;*/
    font-size: calc(3px + 2vmin);
  }
  .mainContent h1{
    font-size:calc(10px + 4vmin);
  }
  .mylinks{
    margin-left: 5%;
    margin-right: 5%;
    width: 100%;
  }
  .mylinks a{
    font-size: 18px;
  }


}




</style>
