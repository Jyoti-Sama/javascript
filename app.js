let bar1 = document.querySelector(".bar1")
let bar2 = document.querySelector(".bar2")
let bar3 = document.querySelector(".bar3")

let indicator_red = document.getElementById("indicator_red");
let indicator_green = document.getElementById("indicator_green");
let indicator_blue = document.getElementById("indicator_blue");

let output = document.getElementById("output");
 let value = document.getElementById("value");
 value.style.background = "white"
 value.style.padding = " 5px"

let r = document.querySelector(".red");
let g = document.querySelector(".green");
let b = document.querySelector(".blue");

let red=0;
let green=0;
let blue=0;  

bar1.addEventListener('click',function(e){
    // console.log("events-->red", e.offsetX)    
    red = e.offsetX
    output.style.background = "rgb("+red+","+green+","+blue+")"
    r.innerHTML = `RED : ${red}`
    g.innerHTML = `GREEN : ${green}`
    b.innerHTML = `BLUE : ${blue}`

    value.innerHTML = `rgb(${red},${green},${blue})`

    indicator_red.style.left = red +"px"
    indicator_green.style.left = green +"px"
    indicator_blue.style.left = blue +"px"

    complement(red,green,blue);
     
})
bar2.addEventListener('click',function(e){
    // console.log("events-->green", e.offsetX)
    green = e.offsetX
    output.style.background = "rgb("+red+","+green+","+blue+")"
    r.innerHTML = `RED : ${red}`
    g.innerHTML = `GREEN : ${green}`
    b.innerHTML = `BLUE : ${blue}`

    value.innerHTML = `rgb(${red},${green},${blue})`

    indicator_red.style.left = red +"px"
    indicator_green.style.left = green +"px"
    indicator_blue.style.left = blue +"px"

    complement(red,green,blue);
})
bar3.addEventListener('click',function(e){
    // console.log("events-->blue", e.offsetX)
    blue = e.offsetX
    output.style.background = "rgb("+red+","+green+","+blue+")"
    r.innerHTML = `RED : ${red}`
    g.innerHTML = `GREEN : ${green}`
    b.innerHTML = `BLUE : ${blue}`

    value.innerHTML = `rgb(${red},${green},${blue})`

    indicator_red.style.left = red +"px"
    indicator_green.style.left = green +"px"
    indicator_blue.style.left = blue +"px"

    complement(red,green,blue);
})


 let rand = document.getElementById("random").addEventListener("click",function(){

    red = Math.floor(Math.random()*256)
    green = Math.floor(Math.random()*256)
    blue = Math.floor(Math.random()*256)
 
    output.style.background = "rgb("+red+","+green+","+blue+")"
    value.innerHTML = `rgb(${red},${green},${blue})`

    indicator_red.style.left = red +"px"
    indicator_green.style.left = green +"px"
    indicator_blue.style.left = blue +"px"

    complement(red,green,blue);

 })

 let output_com = document.getElementById("output-com")
 let value_com = document.getElementById("value-com")
 value_com.style.background = "white"
 value_com.style.padding = " 5px"

 function complement(red,green,blue){
    let red_c = 255-red;
    let green_c = 255-green;
    let blue_c = 255-blue;

    output_com.style.background = `rgb(${red_c},${green_c},${blue_c})`;
    value_com.innerHTML = `rgb(${red_c},${green_c},${blue_c})`
 }

// genaration of 4-colors
 document.querySelector(".gen").addEventListener("click",function(){
     let output_a = document.getElementById("output_a")
     let value_a = document.getElementById("value_a")

     let output_b = document.getElementById("output_b")
     let value_b = document.getElementById("value_b")

     let output_c = document.getElementById("output_c")
     let value_c = document.getElementById("value_c")

     let output_d = document.getElementById("output_d")
     let value_d = document.getElementById("value_d")

    let red = Math.floor(Math.random()*256)
    let green = Math.floor(Math.random()*256)
    let blue = Math.floor(Math.random()*256)

    let red_1 =  vv(red+63)    
    let red_2 =  vv(red_1+63)    
    let red_3 =  vv(red_2+63)

    let green_1 =  vv(green+63)    
    let green_2 =  vv(green_1+63)    
    let green_3 =  vv(green_2+63)

    let blue_1 =  vv(blue+63)    
    let blue_2 =  vv(blue_1+63)    
    let blue_3 =  vv(blue_2+63)

    


    output_a.style.background = "rgb("+red+","+green+","+blue+")"
    value_a.innerHTML = `rgb(${red},${green},${blue})`

    output_b.style.background = `rgb(${red_1},${green_1},${blue_1})`
    value_b.innerHTML = `rgb(${red_1},${green_1},${blue_1})`

    output_c.style.background = `rgb(${red_2},${green_2},${blue_2})`
    value_c.innerHTML = `rgb(${red_2},${green_2},${blue_2})`

    output_d.style.background = `rgb(${red_3},${green_3},${blue_3})`
    value_d.innerHTML = `rgb(${red_3},${green_3},${blue_3})`

 })


 function vv(value){
     let vs = value
     if (value > 255) {
         vs = value - 255
     }
     return vs;
 }