let  img1 = document.getElementById("img");
let pera = document.getElementById("pera");
let marq = document.getElementById("marq");
let btn1 = document.getElementById("pre");
let btn2 = document.getElementById("next");
let hell = document.getElementById("hell");
let container = document.getElementById("container");

let image = ["./images/image1.jpg","./images/image2.jpg","./images/image3.png","./images/image4.png"];
let index = 0;


img1.addEventListener("mouseover", () => {

    if (image[index] === "./images/image1.jpg") {
        img1.src = "./images/card1.jpg";
        marq.textContent= "LORD BEERUS"
    }

});

img1.addEventListener("mouseout", () => {

    if (image[index] === "./images/image1.jpg") {
        img1.src = "./images/image1.jpg";
     
        marq.textContent= "LORD BEERUS";
    }

});

function next() {
    index++;

    if (index >= image.length) {
        index = 0;
    }
    img1.src= image[index];

    if (image[index] === "./images/image2.jpg") {
        pera.innerHTML = "Blade is a skilled and mysterious warrior He is known for his incredible sword-fighting abilities."
        marq.textContent = "BLADE";
        btn1.style.backgroundColor ="red";
        btn2.style.backgroundColor ="red";
         hell.textContent="LIFE SAVIOUR";
          container.style.backgroundImage =  "url('./images/main2.jpg')";
         

    }else if (image[index] === "./images/image3.png") {
        pera.innerHTML = "Liebe is the devil who lives inside Asta’s five-leaf Grimoire. He possesses Anti-Magic, which can cancel and destroy magic. Unlike many devils, Liebe has a strong bond with Asta."
        marq.textContent = "ASTA FROM BLACK BULLS"
        btn1.style.backgroundColor =" black";
         btn2.style.backgroundColor ="black";
          btn1.style.color =" white";
         btn2.style.color ="white";
         hell.textContent="SINISTER";
         container.style.backgroundImage =  "url('./images/main3.jpg')";

         img1.addEventListener("mouseover", () => {

    if (image[index] === "./images/image3.png") {
        img1.src = "./images/card2.jpg";
        
    }

});

img1.addEventListener("mouseout", () => {

    if (image[index] === "./images/image3.png") {
        img1.src = "./images/image3.png";
     
    }

});





        
    }  else if (image[index] === "./images/image4.png") {
        pera.innerHTML = "Jinwoo starts as the weakest hunter but becomes an incredibly powerful fighter.He gains the ability to level up and grow stronger through the System His Shadow Monarch powers allow him to command a powerful army of shadows."
        marq.textContent = "JINWOO SUNG";
         btn1.style.backgroundColor ="blue";
         btn2.style.backgroundColor ="blue";
          hell.textContent="The Shadow Monarch ";
           container.style.backgroundImage =  "url('./images/main4.png')";

           
         img1.addEventListener("mouseover", () => {

    if (image[index] === "./images/image4.png") {
        img1.src = "./images/main.png"
        
    }

});

img1.addEventListener("mouseout", () => {

    if (image[index] === "./images/image4.png") {
        img1.src = "./images/image4.png";
     
    }

});


           
     } 
    else if (image[index] === "./images/image1.jpg") {
     pera.innerHTML = "No need for an introduction, but his name is Lord Beerus, and he is the God of Destruction of Universe 7. He hasn't mastered Ultra Instinct yet. His primary divine technique is Hakai (Destruction)."
        marq.textContent = "LORD BEERUS";
        btn1.style.backgroundColor ="purple";
       btn2.style.backgroundColor ="purple";
       hell.textContent="GOD OF DISTURCTION";
        container.style.backgroundImage =  "url('./images/image1.jpg')";
       
    }



}



function pre(){
    index--;

    if (index < 0) {
        index = image.length-1;
    }
    img1.src= image[index];

    if (image[index] === "./images/image2.jpg") {
        pera.innerHTML = "Blade is a skilled and mysterious warrior He is known for his incredible sword-fighting abilities."
        marq.textContent = "BLADE";
        btn1.style.backgroundColor ="red";
        btn2.style.backgroundColor ="red";
         hell.textContent="LIFE SAVIOUR";
          container.style.backgroundImage =  "url('./images/main2.jpg')";
         

    }else if (image[index] === "./images/image3.png") {
        pera.innerHTML = "Liebe is the devil who lives inside Asta’s five-leaf Grimoire. He possesses Anti-Magic, which can cancel and destroy magic. Unlike many devils, Liebe has a strong bond with Asta."
        marq.textContent = "ASTA FROM BLACK BULLS"
        btn1.style.backgroundColor =" black";
         btn2.style.backgroundColor ="black";
          btn1.style.color =" white";
         btn2.style.color ="white";
         hell.textContent="SINISTER";
         container.style.backgroundImage =  "url('./images/main3.jpg')";

         img1.addEventListener("mouseover", () => {

    if (image[index] === "./images/image3.png") {
        img1.src = "./images/card2.jpg";
        
    }

});

img1.addEventListener("mouseout", () => {

    if (image[index] === "./images/image3.png") {
        img1.src = "./images/image3.png";
     
    }

});





        
    }  else if (image[index] === "./images/image4.png") {
        pera.innerHTML = "Jinwoo starts as the weakest hunter but becomes an incredibly powerful fighter.He gains the ability to level up and grow stronger through the System His Shadow Monarch powers allow him to command a powerful army of shadows."
        marq.textContent = "JINWOO SUNG";
         btn1.style.backgroundColor ="blue";
         btn2.style.backgroundColor ="blue";
          hell.textContent="The Shadow Monarch ";
           container.style.backgroundImage =  "url('./images/main4.png')";

           
         img1.addEventListener("mouseover", () => {

    if (image[index] === "./images/image4.png") {
        img1.src = "./images/main.png"
        
    }

});

img1.addEventListener("mouseout", () => {

    if (image[index] === "./images/image4.png") {
        img1.src = "./images/image4.png";
     
    }

});


           
     } 
    else if (image[index] === "./images/image1.jpg") {
     pera.innerHTML = "No need for an introduction, but his name is Lord Beerus, and he is the God of Destruction of Universe 7. He hasn't mastered Ultra Instinct yet. His primary divine technique is Hakai (Destruction)."
        marq.textContent = "LORD BEERUS";
        btn1.style.backgroundColor ="purple";
       btn2.style.backgroundColor ="purple";
       hell.textContent="GOD OF DISTURCTION";
        container.style.backgroundImage =  "url('./images/image1.jpg')";
       
    }



}
