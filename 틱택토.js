var 바디 = document.body;
var 테이블 = document.createElement('table');
var 줄들 = [];
var 칸들 = [];
바디.append(테이블);

var 비동기콜백 = function(이벤트){
   console.log(이벤트.target); //칸
   console.log(이벤트.target.parentNode); //줄
   console.log(이벤트.target.parentNode.parentNode); // 테이블

   var 몇줄 = 줄들.indexOf(이벤트.target.parentNode)
    console.log("몇줄",몇줄);

    var 몇칸 = 칸들[몇줄].indexOf(이벤트.target);
    console.log("몇칸",몇칸);
};

for(var i = 1; i <= 3; i +=1){
    var 줄 = document.createElement('tr');
    줄들.push(줄);
    칸들.push([]);
    테이블.appendChild(줄);
    for(var j = 1; j <= 3; j+=1){
        var 칸 = document.createElement('td');
        칸.addEventListener("click", 비동기콜백);
        칸들[i-1].push(칸);
        줄.appendChild(칸);
    }
}

console.log(줄들,칸들);