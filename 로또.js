var 후보군 = Array(45).fill().map(function(요소, 인덱스){
    return 인덱스 + 1;
});

console.log(후보군);

 var 셔플 = [];
 while(후보군.length > 0){
     var 이동값 = 후보군.splice(Math.floor(Math.random() * 후보군.length),1)[0]; //splice(0,1) 0부터 한개의 숫자를 뽑아서 배열로 리턴한다.
     셔플.push(이동값);
 }

 console.log(셔플);

 var 보너스 = 셔플[셔플.length-1];
 var 당첨숫자들 = 셔플.slice(); //slice(begin,end) begin부터 end-1까지 를 배열로 리턴한다.
 console.log('당첨숫자들', 당첨숫자들, '보너스', 보너스);