var 스크린 = document.querySelector("#screen");

var 상태 = {

};

스크린.addEventListener("click", function(){
    if(스크린.classList.contains("waiting")){ //contains : 값이 존재하는지 true, false 반환 

        console.log("클릭");
    }
});