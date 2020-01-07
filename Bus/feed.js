
var tseat=[];
var tto=[];   
var tname=[];
var tfrom=[];

function startfeed(){
    if(localStorage.length!=0){
        tname=JSON.parse(localStorage.getItem("tnames"));
        tseat=JSON.parse(localStorage.getItem("tseats"));
        tto=JSON.parse(localStorage.getItem("ttos"));
        tfrom=JSON.parse(localStorage.getItem("tfroms"));
    }
    var tslots=[];
    var ctslots=[];
  
    tname.push(document.getElementById("tname").value);
    tfrom.push(document.getElementById("tfrom").value);
    tto.push(document.getElementById("tto").value);
    tseat.push(document.getElementById("tseat").value);
    for(var i=1;i<=(document.getElementById("tseat").value);i++){
        tslots.push(0);
        ctslots.push(0);
    }
    localStorage.setItem("tslots"+document.getElementById("tname").value,JSON.stringify(tslots));
    localStorage.setItem("ctslots"+document.getElementById("tname").value,JSON.stringify(ctslots));
    localStorage.setItem("tnames",JSON.stringify(tname));
    localStorage.setItem("tfroms",JSON.stringify(tfrom));
    localStorage.setItem("ttos",JSON.stringify(tto));
    localStorage.setItem("tseats",JSON.stringify(tseat));
    window.location.href="bus.html";
}
function checkbus(){
    var status=localStorage.getItem("tnames");
    if(status){
        document.getElementById("feedstatusid").innerHTML="start booking";
    }
    else{
        document.getElementById("feedstatusid").innerHTML="Enter Details First";
    }
}
function reset(){
    alert("cleared");
    window.localStorage.clear();
    
}
var destination;


function bookcall(){
    if(localStorage.length==0) {
        alert("Enter");
        window.location.href="bus.html";
    }
    localStorage.setItem("ctfroms",localStorage.getItem("tfroms"));
    localStorage.setItem("cttos",localStorage.getItem("ttos")) ;
    localStorage.setItem("ctnames",localStorage.getItem("tnames"));
    localStorage.setItem("ctslots",localStorage.getItem("tslots"));


var selectdest = document.getElementById("selectdest"); 
var selectsrce = document.getElementById("selectsource"); 

var destination=JSON.parse(localStorage.getItem("cttos"));
var source=JSON.parse(localStorage.getItem("ctfroms"));

let udestination = [...new Set(destination)];
let usource = [...new Set(source)];

for(var i = 0; i < udestination.length; i++) {
    var destopt = udestination[i];
    selectdest.innerHTML += "<option value=\"" + destopt + "\">" + destopt + "</option>";
    
}
for(var i = 0; i < usource.length; i++){
    var  srceopt=usource[i];
    selectsrce.innerHTML+= "<option value=\"" + srceopt + "\">" + srceopt + "</option>";
}
}
function selectbus(){
    document.getElementsByClassName("selectbus").innerHTML="";

    var select = document.getElementById("selectbus"); 
    select.innerHTML="";
    var destination=JSON.parse(localStorage.getItem("cttos"));
    var source=JSON.parse(localStorage.getItem("ctfroms"));

    var bus=JSON.parse(localStorage.getItem("ctnames"));

    var dest = document.getElementById("selectdest").value; 
    var srce = document.getElementById("selectsource").value; 

    for(var i=0;i<destination.length;i++){
        if(dest==destination[i] && srce==source[i]){
            var opt=bus[i];
            select.innerHTML += "<option></option><option value=\"" + opt + "\">" + opt + "</option>";
        }
    }
}

function slotcolor(ctslots,bus,bookslots){
    var slot=document.getElementById(bus+bookslots);

    if(slot.style.backgroundColor=="grey"){
        slot.style.backgroundColor="green";
        custcount+=1;
    }
    else if(slot.style.backgroundColor=="green"){
        slot.style.backgroundColor="grey";
        custcount-=1;
    }
   
}
var custcount=0;


function bookslots(id){
    var bus=localStorage.getItem("bus");
    var bookslots=id.slice(bus.length,id.length);
    var ctnames=[];
    var ctslots=[];
    slotcolor(ctslots,bus,bookslots);
    var slot=document.getElementById(bus+bookslots);
    if(slot.style.backgroundColor=="green"){
    ctnames=JSON.parse(localStorage.getItem("ctnames"));
    ctslots=JSON.parse(localStorage.getItem("ctslots"+bus));
    for(var i=0;i<ctnames.length;i++){
        if(ctnames[i]==bus){
            ctslots[bookslots-1]=1;
            localStorage.setItem("ctslots"+bus,JSON.stringify(ctslots));
                        }
                }
    }
    if(slot.style.backgroundColor=="grey"){
        ctnames=JSON.parse(localStorage.getItem("ctnames"));
        ctslots=JSON.parse(localStorage.getItem("ctslots"+bus));
        for(var i=0;i<ctnames.length;i++){
            if(ctnames[i]==bus){
                ctslots[bookslots-1]=0;
                localStorage.setItem("ctslots"+bus,JSON.stringify(ctslots));
                            }
                    }
        }
    }
 


function bookseats(){
   
    var buscount=0;
    var bus=document.getElementById("selectbus").value;
    localStorage.setItem("bus",bus);
    document.getElementById("busseats").innerHTML="";
    var slots=JSON.parse(localStorage.getItem("tslots"+bus));
    for(var i=1;i<=slots.length;i++){
        if(slots[i-1]==1){
            buscount+=1;
        }
    }
    if(buscount==slots.length){
        alert("Tickets are full");
        window.location.href="bus.html";
    }
    for(i=1;i<=slots.length;i++)
    {
       var element=`
                    <div class="selectbus`+bus+`">
                        <div>
                        <button onclick="bookslots(this.id)" id="`+bus+i+`" style="background-color:grey">seat `+i+`</button>
                        </div>
                    </div>
        
                    `
                    var post=document.getElementsByClassName('busseats');
                    last=post.length-1;
                    var reqele=post[last];
                    reqele.insertAdjacentHTML("beforeend",element);

                   if(slots[i-1]==1){
                       document.getElementById(bus+i).style.backgroundColor="red";
                       document.getElementById(bus+i).disabled=true;
                   }
    }
    var post=document.getElementsByClassName('busseats');
    last=post.length-1;
    var reqele=post[last];
    var element=`<div class="confirm1">
    <button onclick="bookedseats()">Confirm seat</button>
</div>`
    reqele.insertAdjacentHTML("beforeend",element);
}
function pickup(){
    bookseats();
    var drop=document.getElementById("drop");
    var dest = document.getElementById("selectdest").value; 
    if(1){
        drop.innerHTML="<option>stop1</option><option>stop2</option>"
    }

    var pickup=document.getElementById("pickup");
    var dest = document.getElementById("selectdest").value; 
    if(1){
        pickup.innerHTML="<option>ukkadam</option><option>Gandhipuram</option>"
    }

}
function addname(id){

    var buttonid=id.slice(6,id.length);
    var name=document.getElementById("name"+buttonid).value
    names.push(name);
}
function bookedseats(){
    var bus=document.getElementById("selectbus").value;
    var slots=JSON.parse(localStorage.getItem("ctslots"+bus));

    if(custcount==0){
        alert("Select seats");
        return;
    }

    for(i=1;i<=slots.length;i++){
        document.getElementById(bus+i).disabled=true;
    }
    for(i=1;i<=custcount;i++)
    {
        element=`
        <div class="namebody" id="person`+i+`">
                        <div class="names">
                            <div class="name">
                                <p>Enter Name `+i+`</p>
                            </div>
                            <div class="type">
                                <input type="text" id="name`+i+`"/>
                            </div>
                        </div>
                    </div>
        
                    `
                    var post=document.getElementsByClassName('confirm1');
                    last=post.length-1;
                    var reqele=post[last];
                    reqele.insertAdjacentHTML("beforeend",element);
    }
}
function preview(){
    localStorage.setItem("travelfrom",document.getElementById("selectdest").value);
    localStorage.setItem("travelto",document.getElementById("drop").value);
    localStorage.setItem("ticketcount",custcount);
    var bus=localStorage.getItem("bus");
    for(i=1;i<=custcount;i++){
        localStorage.setItem("name"+i,document.getElementById("name"+i).value);
    }
    window.location.href="preview.html";    
}

function previewalert(){
    
    var bus=localStorage.getItem("bus");
    var source=document.getElementById("psource");
    source.innerHTML+=localStorage.getItem("travelfrom");
    document.getElementById("pdestination").innerHTML+=localStorage.getItem("travelto");
    document.getElementById("pcount").innerHTML+=localStorage.getItem("ticketcount");
    for(var i=1;;i++){
        if(localStorage.getItem("name"+i)==null){
            break;
        }
    var footer=document.getElementById("pnames");
    var z=document.createElement('div');
    z.setAttribute("class","names");
    z.innerHTML=localStorage.getItem("name"+i);
    footer.appendChild(z);
    }
    for(var i=1;;i++){
        if(localStorage.getItem("name"+i)==null){
            break;
        }
        else
        localStorage.removeItem("name"+i,localStorage.getItem("name"+i));
    } 
}

function confirm(){
    var bus=localStorage.getItem("bus");
    localStorage.setItem("tslots"+bus,localStorage.getItem("ctslots"+bus));
    alert("Booking Confirmed");
    window.location.href="bus.html";
}