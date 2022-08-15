
var modal = document.createElement("div");
modal.insertAdjacentHTML("beforeend", `
<div id="myModal" class="modal">
   
  <div class="modal-content">
    <span class="close">&times;</span>
    <iframe  class="video__modal" width="560" height="315" src="https://www.youtube.com/embed/K5T_Vuzdm1I" 
     title="YouTube video player" frameborder="0" allow="accelerometer;
     autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
     allowfullscreen></iframe>
  </div>

</div>`);

document.body.insertAdjacentElement("beforeend", modal);

let modalElement = document.getElementById("myModal");

var btn = document.getElementById("video-btn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modalElement.style.display = "block";
}

span.onclick = function() {
  modalElement.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modalElement) {
    modalElement.style.display = "none";
  }
}


