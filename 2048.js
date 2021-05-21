var 테이블 = document.getElementById('table');
var 데이터 = [];

function 초기화(){
    var fragment = document.createDocumentFragment();
    [1,2,3,4].forEach(function (){
        var 열데이터 = [];
        데이터.push(열데이터);
        var tr = document.createElement('tr');
        [1,2,3,4].forEach(function(){
            열데이터.push(0);
            var td = document.createElement('td');
            tr.append(td);
        });
        fragment.append(tr);
    });
    테이블.append(fragment);
}

function 랜덤생성(){

    var 빈칸배열 = [];
    데이터.forEach(function(열데이터, i){
        열데이터.forEach(function(행데이터, j) {
          if(!행데이터){
              빈칸배열.push([i,j]);
          }
        });
    });

    var 랜덤칸 = 빈칸배열[Math.floor(Math.random() * 빈칸배열.length)];
    데이터[랜덤칸[0]][랜덤칸[1]] = 2;
    그리기();
}

function 그리기(){

    데이터.forEach(function(열데이터, i){
        열데이터.forEach(function(행데이터, j) {
            if(행데이터 > 0){
                테이블.children[i].children[j].textContent = 행데이터;
            }else{
                테이블.children[i].children[j].textContent = '';
            }
        });
    });
}

초기화();
랜덤생성();
그리기();

var 드래그시작 = false;

window.addEventListener('mousedown', function (이벤트){ //마우스 클릭을 유지할때 작동
    console.log('mousedown', 이벤트);
    드래그시작 = true;
});

window.addEventListener('mousemove', function (이벤트){
    if(드래그시작){
        console.log('mousemove', 이벤트);     
    }
});

window.addEventListener('mouseup', function (이벤트){ //마우스 클릭을 풀었을때 작동
    console.log('mouseup', 이벤트);
    드래그시작 = false;
});