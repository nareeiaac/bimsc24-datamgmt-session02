<!-- the script is where the js code goes -->
<script setup>
import { ref } from "vue" // you need this to use ref()

//Ner reference variable
let user = ref("- Naree")

</script>




<!-- the template is where the html code goes -->
<template>
 <div id="navbar" class="container">  
        <div id="title">Data Management Assignment 02 {{ user }}</div>
       
    </div>

    <div id="flex">

        <div id="sidebar" class="container"> Input</div>

        <div id="main" class="container"> Output </div>
    </div>



</template>



<!-- style is where the css code goes -->
<style scoped>

html{
    
    background-color: rgb(59, 59, 59); 
    color: white;
}

body{

    margin:0;
}

div{

    /* put the borders in the inside of container */
    box-sizing: border-box;
}

#navbar{

    height: 50px;
    border-color: grey;
background-color: pink;

}

#flex{
    
    display: flex;
    height: calc(100vh - 50px);
}

#sidebar{
    
    width:20%;
    border-color: grey;
background-color: white;
color: black;
}

#main{
    width:80%;
    border-color: grey;
background-color: lemonchiffon;


}

#title{
    width: 70%;
    float:left;
}

.container{

    border-style: dotted;
    border-width: 1px;

}
</style>