function startfeed(){
    var tslots=[];
    tname.push(document.getElementById("tname").value);
    tfrom.push(document.getElementById("tfrom").value);
    tto.push(document.getElementById("tto").value);
    tseat.push(document.getElementById("tseat").value);
    for(var i=1;i<=(document.getElementById("tseat").value);i++){
        tslots.push(0);
    }
    localStorage.setItem("tslots"+document.getElementById("tname").value,JSON.stringify(tslots));
    localStorage.setItem("tnames",JSON.stringify(tname));
    localStorage.setItem("tfroms",JSON.stringify(tfrom));
    localStorage.setItem("ttos",JSON.stringify(tto));
    localStorage.setItem("tseats",JSON.stringify(tseat));
    alert(JSON.parse(localStorage.getItem("tslots"+document.getElementById("tname").value)));
}
function checkbus(){
    var status=localStorage.getItem("tnames");
    if(status){
        document.getElementById("feedstatusid").innerHTML="start booking";
    }
    else{
        document.getElementById("feedstatusid").innerHTML="Enter Details First";

    }
alert(status);
}
function reset(){
    window.localStorage.clear();
}
var destination;


function bookcall(){
var select = document.getElementById("selectdest"); 
var destination=JSON.parse(localStorage.getItem("ttos"));
for(var i = 0; i < destination.length; i++) {
    var opt = destination[i];
    select.innerHTML += "<option value=\"" + opt + "\">" + opt + "</option>";
}
}
function selectbus(){
    var select = document.getElementById("selectbus"); 
    var destination=JSON.parse(localStorage.getItem("ttos"));
    var bus=JSON.parse(localStorage.getItem("tnames"));

    var dest = document.getElementById("selectdest").value; 
    for(var i=0;i<destination.length;i++){
        if(dest==destination[i]){
            var opt=bus[i];
            select.innerHTML += "<option value=\"" + opt + "\">" + opt + "</option>";
        }
    }
}

function slotcolor(tslots,bus,bookslots){
    alert(bookslots);
    var slot=document.getElementById(bus+bookslots);
    slot.style.backgroundColor="red";
}
var custcount=0;
function bookslots(id){
    custcount+=1;
    var bus=id.slice(0,id.length-1);
    var bookslots=id.slice(bus.length,id.length);
    var tnames=[];
    var tslots=[];
    tnames=JSON.parse(localStorage.getItem("tnames"));
    tslots=JSON.parse(localStorage.getItem("tslots"+bus));
    for(var i=0;i<tnames.length;i++){
        if(tnames[i]==bus){
            tslots[bookslots-1]=1;
            localStorage.setItem("tslots"+bus,JSON.stringify(tslots));
        }
    }
    slotcolor(tslots,bus,bookslots);
}


function bookseats(){
    var bus=document.getElementById("selectbus").value;
    var slots=JSON.parse(localStorage.getItem("tslots"+bus));
    for(i=1;i<=(JSON.parse(localStorage.getItem("tseats")));i++)
    {
       var element=`
                    <div class="busseats">
                        <div>
                        <button onclick="bookslots(this.id)" id="`+bus+i+`">seat `+i+`</button>
                        </div>
                    </div>
        
                    `
                    var post=document.getElementsByClassName('busseats');
                    last=post.length-1;
                    var reqele=post[last];
                    reqele.insertAdjacentHTML("beforeend",element);

                   if(slots[i-1]==1){
                       document.getElementById(bus+i).style.backgroundColor="red";
                   }
    }

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
    alert(custcount);
    for(i=1;i<=custcount;i++)
    {
        element=`
        <div class="namebody" id="person`+i+`">
                        <div class="names">
                            <div class="name">
                                <p>Enter name `+i+`</p>
                            </div>
                            <div class="type">
                                <input type="text" id="name`+i+`"/>
                            </div>
                        </div>
                    </div>
        
                    `
                    var post=document.getElementsByClassName('busseats');
                    last=post.length-1;
                    var reqele=post[last];
                    reqele.insertAdjacentHTML("beforeend",element);
    }
}
function preview(){
    localStorage.setItem("travelfrom",document.getElementById("selectdest").value);
    localStorage.setItem("travelto",document.getElementById("drop").value);
    localStorage.setItem("ticketcount",custcount);
    for(i=1;i<=custcount;i++){
        localStorage.setItem("name"+i,document.getElementById("name"+i).value);
    }
}

function previewalert(){
    var source=document.getElementById("psource");
    source.innerHTML+=localStorage.getItem("travelfrom");
    document.getElementById("pdestination").innerHTML+=localStorage.getItem("travelto");
    document.getElementById("pcount").innerHTML+=localStorage.getItem("ticketcount");
    for(var i=1;;i++){
        if(localStorage.getItem("name"+i)==null){
            return;
        }
        var footer=document.getElementById("pnames");
    var z=document.createElement('div');
    z.setAttribute("class","names");
    z.innerHTML=localStorage.getItem("name"+i);
    footer.appendChild(z);
    }

}