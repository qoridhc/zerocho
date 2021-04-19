var 컴퓨터 = 0;
var 딕셔너리 ={
    바위 : '0',
    가위 : '133px',
    보 : '-288px'
};

Object.entries(딕셔너리) //객체를 배열형태로 바꿔준다

function 컴퓨터의선택(이미지좌표){
    return Object.entries(딕셔너리).find(function(v){ //1번째가 이미지좌표인것을 찾아준다.
                                                    //리턴이 true 인것을 찾는다
        return v[1] === 이미지좌표;       
    })[0];
}


setInterval(function () {
    if (컴퓨터 === 딕셔너리.바위) {
        컴퓨터 = 딕셔너리.가위;
    } else if (컴퓨터 === 딕셔너리.가위) {
        컴퓨터 = 딕셔너리.보;
    } else {
        컴퓨터 = 딕셔너리.바위;
    }
    document.getElementById('computer').style.backgroundPosition = 컴퓨터;
}, 200);

document.querySelectorAll('.btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
       var 플레이어 = this.textContent;
        console.log(플레이어, 딕셔너리2[컴퓨터]);
    });
});