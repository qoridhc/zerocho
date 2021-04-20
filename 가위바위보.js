var 이미지좌표 = '0';
var 가위바위보 = {
    바위: '0',
    가위: '-133px',
    보: '-288px'
};

function 컴퓨터의선택(이미지좌표) {
    return Object.entries(가위바위보).find(function (v) { //1번째가 이미지좌표인것을 찾아준다.
        //리턴이 true 인것을 찾는다
        return v[1] === 이미지좌표;
    })[0];
}


var 인터벌;
function 인터벌메이커(){
    setInterval(function () {
    if (이미지좌표 === 가위바위보.바위) {
        이미지좌표 = 가위바위보.가위;
    } else if (이미지좌표 === 가위바위보.가위) {
        이미지좌표 = 가위바위보.보;
    } else {
        이미지좌표 = 가위바위보.바위;
    }
    document.getElementById('computer').style.backgroundPosition = 이미지좌표;
}, 300);
}

인터벌메이커();

document.querySelectorAll('.btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
        clearInterval(인터벌);
        
        setTimeout(() => {
            인터벌 = 인터벌메이커();
        }, 1000);

        var 나의선택 = this.textContent;
        console.log("플레이어: " + 나의선택 + "\n" + "컴퓨터: " + 컴퓨터의선택(이미지좌표));
    
      //  tmp(가위바위보[나의선택],이미지좌표);
     
        if (나의선택 === '가위') {
            if (컴퓨터의선택(이미지좌표) === '가위') {
                console.log("비겼습니다.");
            } else if (컴퓨터의선택(이미지좌표) === '바위') {
                console.log("졌습니다ㅠㅠ.");
            } else {
                console.log("이겼습니다!!.");
            }
        } else if (나의선택 === '바위') {
            if (컴퓨터의선택(이미지좌표) === '가위') {
                console.log("이겼습니다!!.");
            } else if (컴퓨터의선택(이미지좌표) === '바위') {
                console.log("비겼습니다.");
            } else {
                console.log("졌습니다ㅠㅠ.");
            }
        } else if (나의선택 === '보') {
            if (컴퓨터의선택(이미지좌표) === '가위') {
                console.log("졌습니다ㅠㅠ.");
            } else if (컴퓨터의선택(이미지좌표) === '바위') {
                console.log("이겼습니다!!.");
            } else {
                console.log("비겼습니다.");
            }
        }
    });
});