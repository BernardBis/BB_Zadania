
//nasłuchiwanie zdarzenia
var poprzedni_sklep = null;
const sklepy = [document.getElementById("CCC"),
                document.getElementById("PepCo"),
                document.getElementById("NeoNet"),
                document.getElementById("MartesSport"),
                document.getElementById("TXM")];

//sklepy.forEach(item => console.log(item.id));
sklepy.forEach(item => document.getElementById(item.id + "Info").style.display = 'none');

sklepy.forEach(myListenAll);

function myListenAll(aktualnyElement) {
    aktualnyElement.addEventListener("click", function(e){
        //console.log(e.path[1]);
        moveUp(e.path[1])
    });
}

function moveUp(myObject) {
    
    for (let i = 0; i < myObject.children.length; i++) {
            myObject.children[i].style = "";
            //console.log(myObject.children[i]);
    }

    if(poprzedni_sklep){
        if(!(myObject.id === poprzedni_sklep.id))
        {
            poprzedni_sklep.classList = "";
            poprzedni_sklep.classList.add("classMoveDown");
            document.getElementById(poprzedni_sklep.id + "Info").style.display = 'none'
        }
    }

    if (myObject.classList.contains("classMoveUp")) {
        document.getElementById(myObject.id + "Info").style.display = 'none'
        myObject.classList = ""; 
        myObject.classList.add("classMoveDown");
    } else {
        document.getElementById(myObject.id + "Info").style.display = 'block'
        myObject.classList = "";
        myObject.classList.add("classMoveUp");
    }

    poprzedni_sklep = myObject;    
}

