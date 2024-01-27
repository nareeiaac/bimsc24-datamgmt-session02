// This is main JavaScript file

// From vue, we import a function to create a Vue application
import { createApp } from "vue"

// Import of the App.vue file
import App from "./App.vue"

// Import styles
import '@/styles/button-styles.css'
import '@/styles/styles.css'
import '@/styles/toggle-styles.css'

// Create Vue appliction with App.vue component and inject it into element with id 'app'
createApp(App).mount("#app")

//link the js script file with the website created by using a constant

const doc = document.documentElement;
console.log(doc)

//access particular elements
const sidebar = document.querySelector('#sidebar')

//create a form element in the sidebar
let input = document.createElement("input")
input.style.width = "90%"
input.style.fontsize = "10px"
sidebar.appendChild(input)


//make the submit button
let submitbutton = document.createElement("button")
sidebar.appendChild(submitbutton)
//what should be written on the button
submitbutton.innerHTML="Submit"
submitbutton.style.fontSize="20px"


//add rest button, first selected where to add so call it
let resetbutton = document.createElement("button")
sidebar.appendChild(resetbutton)
//what should be written on the button
resetbutton.innerHTML="Reset"
submitbutton.style.fontSize="20px"

//create an event when you click the button, attatch a function to it

submitbutton.addEventListener("click",dosomething)
resetbutton.addEventListener('click',Refresh)

//selecting where you want the change
const main = document.querySelector("#main")

function dosomething(){
//create a p element
let p = document.createElement("p")

//fill that p element with some text
let inputext = input.value
    p.innerHTML += inputext
    console.log(inputext)
    
// append that element to main
main.appendChild(p)


 //just = will replace text, += will keep adding to it

//console.log(inputText) // to check on the console of this is working, which means whatever you type in the box you get it in the console


}

function Refresh(){
    let p = document.querySelectorAll("p")
    main.innerHTML = ""
}