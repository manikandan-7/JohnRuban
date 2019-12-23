var arr= new Array();
var x;
function create(name){
    arr.push(name);
    var outer = document.createElement('input');
    outer.type='Text';
    outer.id= name;
    outer.placeholder='Enter';
    document.getElementById('block2').appendChild(document.createElement('br'));
    document.getElementById('block2').appendChild(outer);
    document.getElementById('block2').appendChild(document.createElement('br'));
    
}
function getbill(){
    var block=document.getElementById('block3');
    while(block.hasChildNodes()){
        block.removeChild(block.firstChild);
    }
    arr.forEach(element => {
        var block=document.createElement('div');
        block.textContent=document.getElementById(element).value+'  '+x;
        document.getElementById('block3').appendChild(block);
    });

}


function getname(){
    var block=document.getElementById('block2');
    while(block.hasChildNodes()){
        block.removeChild(block.firstChild);
    }
    block=document.getElementById('block3');
    while(block.hasChildNodes()){
        block.removeChild(block.firstChild);
    }
    arr=[];
    let t,p;
     t = document.getElementById('total').value;
     p = document.getElementById('people').value;
    x = t/p;
    for (let i=0;i<p;i++){
        create('Enter'+i);
    }
    var submitButton=document.createElement('button');
    submitButton.setAttribute('onclick','getbill()');
    submitButton.textContent='Submit';
    document.getElementById('block3').appendChild(submitButton);
}