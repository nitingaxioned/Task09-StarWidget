// variable decleration
var starContiner = document.querySelector(".star-container");
var n = 5;

for(var i=0; i<n; i++){
    var star = document.createElement("li");
    star.innerHTML = "The star";
    star.classList.add("star");
    starContiner.appendChild(star);
}

var stars = document.querySelectorAll(".star");

// event listners
stars.forEach( function(val , index){
    val.addEventListener("click", function(){
        stars.forEach( function( value , indx){
            value.classList.remove("star-color");
            if(indx <= index)
                value.classList.add("star-color");
        });
        document.querySelector(".star-count span").innerHTML = index + " Stars"
    });
});










