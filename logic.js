
document.querySelector("#tbtn").addEventListener("click",()=>{
document.querySelector(".triangle").style.display="block";
document.querySelector( ".square" ).style.display="none";
document.querySelector( ".rectangle" ).style.display="none";
document.querySelector( ".circle" ).style.display="none";

})
document.querySelector("#cbtn").addEventListener("click",()=>{
document.querySelector(".circle").style.display="block";
document.querySelector( ".square" ).style.display="none";
document.querySelector( ".rectangle" ).style.display="none";
document.querySelector( ".triangle" ).style.display="none";
})
document.querySelector("#rbtn").addEventListener("click",()=>{
document.querySelector(".rectangle").style.display="block";
document.querySelector( ".square" ).style.display="none";
document.querySelector( ".triangle" ).style.display="none";
document.querySelector( ".circle" ).style.display="none";
})
document.querySelector("#sbtn").addEventListener("click",()=>{
document.querySelector(".square").style.display="block";
document.querySelector( ".triangle" ).style.display="none";
document.querySelector( ".rectangle" ).style.display="none";
document.querySelector( ".circle" ).style.display="none";
})


/* ******************* colors***************************** */
document.querySelector("#blue").addEventListener("click",()=>{
    console.log("blue has been clicked");
    document. querySelector(".rectangle") .style.backgroundColor="blue";
    document. querySelector(".triangle") .style.color="blue";
    document. querySelector(".circle") .style.backgroundColor="blue";
    document. querySelector(".square") .style.backgroundColor="blue";
    })
document.querySelector("#red").addEventListener("click",()=>{
    console.log("blue has been clicked");
    document. querySelector(".rectangle") .style.backgroundColor="red";
    document. querySelector(".triangle") .style.color="red";
    document. querySelector(".circle") .style.backgroundColor="red";
    document. querySelector(".square") .style.backgroundColor="red";
    })
document.querySelector("#black").addEventListener("click",()=>{
    console.log("blue has been clicked");
    document. querySelector(".rectangle") .style.backgroundColor="black";
    document. querySelector(".triangle") .style.color="black";
    document. querySelector(".circle") .style.backgroundColor="black";
    document. querySelector(".square") .style.backgroundColor="black";
    })
document.querySelector("#pink").addEventListener("click",()=>{
    console.log("blue has been clicked");
    document. querySelector(".rectangle") .style.backgroundColor="pink";
    document. querySelector(".triangle") .style.color="pink";
    document. querySelector(".circle") .style.backgroundColor="pink";
    document. querySelector(".square") .style.backgroundColor="pink";
    })
document.querySelector("#green").addEventListener("click",()=>{
    console.log("blue has been clicked");
    document. querySelector(".rectangle") .style.backgroundColor="green";
    document. querySelector(".triangle") .style.color="green";
    document. querySelector(".circle") .style.backgroundColor="green";
    document. querySelector(".square") .style.backgroundColor="green";
    })
document.querySelector("#yellow").addEventListener("click",()=>{
    console.log("blue has been clicked");
    document. querySelector(".rectangle") .style.backgroundColor="yellow";
    document. querySelector(".triangle") .style.color="yellow";
    document. querySelector(".circle") .style.backgroundColor="yellow";
    document. querySelector(".square") .style.backgroundColor="yellow";
    })