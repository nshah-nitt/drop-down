let a = 0;
function func(){
    if(a == 0){
        document.getElementById("drop").style.display = "block";
        var cols = document.getElementsByClassName("fitem")[2].style.backgroundColor = 'grey';
    }
    
    else{
        document.getElementById("drop").style.display = "none";
        var cols = document.getElementsByClassName("fitem")[2].style.backgroundColor = 'black';
    }
    a = !a;
}