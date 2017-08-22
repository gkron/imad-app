//console.log('Loaded!');

//change the text of the main text div
/*var element = document.getElementById('main-text');
element.innerHTML='New Value';

//move the image
var img =  document.getElementById('madi');

var marginLeft=0;
function moveRight(){
    marginLeft = marginLeft+1;
    img.style.marginLeft = marginLeft + 'px';
 }
 
img.onclick = function(){
    var interval = setInterval(moveRight, 50)*/
//};

//counter code
var button = document.getElementById("counter");

button.onclick=function(){
    
    //capture the response & store in a variable
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(request.readyState===XMLHttpRequest.DONE){
            //Take some action
         if(request.status===200){
             var counter = request.responseText;
            var span= document.getElementById("count");
            span.innerHTML=counter.toString();
         }    
        }
        //not done
    };
    
    //Make a request
   request.open('GET', 'http://gkron18.imad.hasura-app.io/counter', true); 
   request.send(null);
    
};