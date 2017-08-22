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

//submit name
var nameInput = document.getElementById('name');
var name = nameInput.value;

var submit= document.getElementById('submit_btn');
submit.onclick = function(){
    
    //make a request to server & send the name
    //capture a list of name & render as list
    var names = ['name1','name2','name3','name4'];
    var list ='';
    for(var i=0; i<names.length;i++){
        list='<li>' + names[i] + '</li>';
    }
    
    var ul=document.getElementById('namelist');
    ul.innerHTML=list;
    
};



    











