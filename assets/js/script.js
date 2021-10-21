// variable decleration
var n = 5;
var starContiner = document.querySelector(".star-container");

// creating Dynamic stars
for(var i=0; i<n; i++){
    var star = document.createElement("li");
    star.innerHTML = "The star";
    star.classList.add("star");
    starContiner.appendChild(star);
}

//variable decleration for stars
var stars = document.querySelectorAll(".star");

// event listners
stars.forEach( function(val , index){
    val.addEventListener("click", function(){
        stars.forEach( function( value , indx){
            value.classList.remove("star-color");
            indx <= index && value.classList.add("star-color");
        });
        document.querySelector(".star-count span").innerHTML = index + " Stars"
    });
});










