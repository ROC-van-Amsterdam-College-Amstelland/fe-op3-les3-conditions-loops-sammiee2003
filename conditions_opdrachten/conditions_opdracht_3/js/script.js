//javascript code
function checkSaldo(){

    var geldOpname = document.getElementById("geldOpname").value;

    if( geldOpname == 500){
        alert("salaris is gestort")
    }
  
    if(geldOpname > 500){
        alert("er is bonus gestort")
    }

    if(geldOpname < 500){
        alert("er is niks gestort")
    }



}
