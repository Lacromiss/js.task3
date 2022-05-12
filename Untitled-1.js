var cr3= document.getElementById('cr3')
var cr2= document.getElementById('cr2')
var cr1= document.getElementById('cr1')
let bigCr=document.getElementById('bigCr')
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
 
  if(document.getElementById(data).id == 'cr3'){             
    document.getElementById('bigCr').style.background = 'lightblue'; 
  }
  if(document.getElementById(data).id == 'cr2'){             
    document.getElementById('bigCr').style.background = 'lightgreen'; 
  }
  if(document.getElementById(data).id == 'cr1'){             
    document.getElementById('bigCr').style.background = 'brown'; 
  }
}

  

