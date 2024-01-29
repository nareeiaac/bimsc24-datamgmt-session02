<!-- the script is where the js code goes -->
<script setup>
import { ref } from "vue" 

//Reference variable
let user = ref("- Naree")
let text = ref("")
let newtext = ref("")

//function increment () {
    //count.value++;
    //console.log(count);

//}

function updateMainText() {
text.value += newtext.value;
}

//Change Main Box Colour 
let Colour = ref('White'); 
let newColour = ref(''); 

// Update the mainColor with the value from the text box
function changeColour (){
    Colour.value = newColour.value;
}

function reset () {
    reset.addEventListener("click",reset)
}
</script>

<!-- the template is where the html code goes -->
<template>
 <div id="navbar" class="container">  
        <div id="title">Data Management Assignment 02 {{ user }} </div>
       
</div>

<div id="flex">
            <div id="flexside">
                <div id="sidebar1" class="container"> 
                    Input your text here:
                    <input type="text" v-model="newtext" placeholder="Add text">
                    <button @click="updateMainText">Update Text</button>
                </div>

                <div id="sidebar2" class="container"> Input colour:
                    <input type="text" v-model="newColour" placeholder="Colour">
                    <button @click="changeColour">Change Colour</button>
                </div>
            </div>
            <div id="main" :style="{ backgroundColor:Colour }" class="container"> 
                {{ text }} 
            </div>
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
    height:100%;
    border-color: grey;
    background-color: white;
    color: black;
}

#sidebar2{
    
    height:100%;
    background-color: lightblue;
color: black;
}

#main{
    width:80%;
    border-color: grey;
    background-color: white;

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