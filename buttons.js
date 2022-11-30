function colorChange(){
    var curButton = document.getElementById("bot")
    var inpu = document.getElementById("in");
    curButton.classList.add("btn-success");
    curButton.innerText = "Project Created";
    
    inpu.removeAttribute('disabled','');
    inpu.classList.remove("btn-light");

    inpu.classList.add("btn-warning");

    

}

function colorReseter(){
    var curButton = document.getElementById("bot")
    var inpu = document.getElementById("in");

    curButton.classList.remove("btn-success");
    inpu.classList.remove("btn-warning");
    inpu.classList.add("btn-light");
    inpu.setAttribute('disabled','');


    curButton.innerText = "Create Project";





}