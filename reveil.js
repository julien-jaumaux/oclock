window.addEventListener("load",function(){
  setInterval(function(){
    var d = new Date();
    document.getElementById("heure").textContent = d.toLocaleTimeString();
  },1000);
});

function addField(){
  var newdiv = document.createElement('div');
          newdiv.innerHTML = " <div class='champs'><br><input type='checkbox' name='chbox[]' onclick='reveil(this)'> <input type='number' value='0' min='0' max='23' name='h[]' id='h'> <input type='number' value='0' min='0' max='59' name='min[]' id='m'> <input type='text' placeholder='Description' name='description[]'> <input type='submit' value='alarme' onclick='playSound()'> <input type='submit' value='-' onclick='delField(this)'></div>";
          document.getElementById('champs').appendChild(newdiv);
}

function delField(div){
  var parent = div.parentNode;
  parent.parentNode.removeChild(parent);
}
//////////////////////////////////////
function message(){
  var message = document.getElementById("mess");
  alert(message);
}
//////////////////////////////////////

function playSound(){
  var sound = document.getElementById("son");
  sound.play();
}

function reveil(alarme){
  var interv;
  if(alarme.checked===true){
    alert("Activation du reveil !");
    interv = setInterval(function(){
      var now = new Date();
      hour=now.getHours();
      min=now.getMinutes();
      if(document.getElementById("h").value === hour.toString()){
        if(document.getElementById("m").value === min.toString()){
          playSound();
          //message();
        }
      }
      if(alarme.checked===false){
        alert("Desactivation du reveil");
        clearInterval(interv);
      }
      
    },1000);
  }
}