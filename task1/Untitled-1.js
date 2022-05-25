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
  if(document.getElementById(data).id == 'cr4'){             
    document.getElementById('bigCr').style.background = 'black'; 
  }
  if(document.getElementById(data).id == 'cr5'){             
    document.getElementById('bigCr').style.background = 'blueviolet'; 
  }
  if(document.getElementById(data).id == 'cr6'){             
    document.getElementById('bigCr').style.background = 'salmon'; 
  }
  if(document.getElementById(data).id == 'cr7'){             
    document.getElementById('bigCr').style.background = 'aqua'; 
  }
  if(document.getElementById(data).id == 'cr8'){             
    document.getElementById('bigCr').style.background = 'deeppink'; 
  }
  if(document.getElementById(data).id == 'cr9'){             
    document.getElementById('bigCr').style.background = 'gold'; 
  }
  if(document.getElementById(data).id == 'cr10'){             
    document.getElementById('bigCr').style.background = 'firebrick'; 
  }
  if(document.getElementById(data).id == 'cr11'){             
    document.getElementById('bigCr').style.background = 'peachpuff'; 
  }
  if(document.getElementById(data).id == 'cr12'){             
    document.getElementById('bigCr').style.background = 'gray'; 
  }
  if(document.getElementById(data).id == 'cr13'){             
    document.getElementById('bigCr').style.background = 'darkslategrey'; 
  }
  if(document.getElementById(data).id == 'cr14'){             
    document.getElementById('bigCr').style.background = 'khaki'; 
  }
  if(document.getElementById(data).id == 'cr15'){             
    document.getElementById('bigCr').style.background = 'cornflowerblue'; 
  }
}

  

