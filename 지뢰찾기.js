var tbody = document.querySelector("#table tbody");
var dataset = [];
var 중단플래그 = false;
document.querySelector("#exec").addEventListener("click", function () {
    tbody.innerHTML = ''; //tbody 내부 c초기화
    document.querySelector('#result').textContent = '';
    dataset = []; // dataset 초기화
    중단플래그 = false;
    var hor = parseInt(document.querySelector("#hor").value);
    var ver = parseInt(document.querySelector("#ver").value);
    var mine = parseInt(document.querySelector("#mine").value);
    console.log(hor, ver, mine);

    // 지뢰 위치 뽑기

    var 후보군 = Array(hor * ver).fill().map(function (요소, 인덱스) {
        console.log(요소, 인덱스);
        return 인덱스;
    });

    var 셔플 = [];
    while (후보군.length > 80) {
        var 이동값 = 후보군.splice(Math.floor(Math.random() * 후보군.length), 1)[0];
        셔플.push(이동값);
    }

    console.log(셔플);

    // 지뢰 테이블 만들기
    for (var i = 0; i < ver; i++) {
        var arr = [];
        var tr = document.createElement("tr");
        dataset.push(arr);
        for (var j = 0; j < hor; j++) {
            arr.push(0);
            var td = document.createElement("td");
            td.addEventListener("contextmenu", function (e) {
                e.preventDefault(); // 기본으로 정의된 이벤트를 막음, 이경우 우클릭 메뉴창을 막음
                var 부모tr = e.currentTarget.parentNode;
                var 부모tbody = e.currentTarget.parentNode.parentNode;
                var 칸 = Array.prototype.indexOf.call(부모tr.children, e.currentTarget); //배열이 아닌곳에 강제로 indexof를 적용하는방법

                //curruntTarget = 이벤트 리스너가 달린곳.
                //target = 실제 이벤트가 발생한곳.

                var 줄 = Array.prototype.indexOf.call(부모tbody.children, 부모tr);
                console.log(부모tr, 부모tbody, e.currentTarget, 칸, 줄);

                if (e.currentTarget.textContent === '' || e.currentTarget.textContent === 'X') {
                    e.currentTarget.textContent = '!';
                } else if (e.currentTarget.textContent === '!') {
                    e.currentTarget.textContent = '?';
                } else if (e.currentTarget.textContent === '?') {
                    e.currentTarget.textContent = '';
                    if (dataset[줄][칸] === '1') {
                        e.currentTarget.textContent = '';
                    } else if (dataset[줄][칸] === 'X') {
                        e.currentTarget.textContent = 'X';
                    }
                }
            });

            td.addEventListener("click", function (e) { //클릭했을때 주변 지뢰 갯수
                var 부모tr = e.currentTarget.parentNode;
                var 부모tbody = e.currentTarget.parentNode.parentNode;
                var 칸 = Array.prototype.indexOf.call(부모tr.children, e.currentTarget);
                var 줄 = Array.prototype.indexOf.call(부모tbody.children, 부모tr);
                e.currentTarget.classList.add('opened'); // 클릭을했을때 'opened' 라는 클래스를 추가

                if (dataset[줄][칸] === 'X') { // 지뢰클릭
                    e.currentTarget.textContent = "펑";
                    document.querySelector('#result').textContent = '실패 ㅠㅠ';
                } else { //지뢰가 아닌 경우 주변 지뢰 갯수

                    var 주변 = [
                        dataset[줄][칸 - 1], dataset[줄][칸 + 1]
                    ];
                    if (dataset[줄 - 1]) {
                        //concat : 배열을 합쳐서 새로운 배열을 만듦
                        주변 = 주변.concat(dataset[줄 - 1][칸 - 1], dataset[줄 - 1][칸], dataset[줄 - 1][칸 + 1]);
                    }

                    if (dataset[줄 + 1]) {
                        //concat : 배열을 합쳐서 새로운 배열을 만듦
                        주변 = 주변.concat(dataset[줄 + 1][칸 - 1], dataset[줄 + 1][칸], dataset[줄 + 1][칸 + 1]);
                    }
                }
                var 주변지뢰갯수 = 주변.filter(function (v) {
                    return v === "X";
                }).length;
                e.currentTarget.textContent = 주변지뢰갯수 || ''; // a || b : a가 거짓인 값이면 b를 사용
                                                                 // 거짓인 값 : false, '', 0, null, undefined, NaN
                if (주변지뢰갯수 === 0) {
                    // 주변 8칸 동시 오픈(재귀함수)
                    var 주변칸 = [];
                    if (tbody.children[줄 - 1]) {
                        주변칸 = 주변칸.concat([
                            tbody.children[줄 - 1].children[칸 - 1],
                            tbody.children[줄 - 1].children[칸],
                            tbody.children[줄 - 1].children[칸 + 1],
                        ]);

                    }
                    주변칸 = 주변칸.concat([
                        tbody.children[줄].children[칸 - 1],
                        tbody.children[줄].children[칸 + 1],

                    ]);
                    if (tbody.children[줄 + 1]) {
                        주변칸 = 주변칸.concat([
                            tbody.children[줄 + 1].children[칸 - 1],
                            tbody.children[줄 + 1].children[칸],
                            tbody.children[줄 + 1].children[칸 + 1],
                        ]);


                    }

                    dataset[줄][칸] = 1;
                    주변칸.filter(function (v) { return !!v }).forEach(function (옆칸) {
                        // filter((v) => !!v) : 배열의 null, undefined 등을 제거 해주는 문법.

                        var 부모tr = 옆칸.parentNode;
                        var 부모tbody = 옆칸.parentNode.parentNode;
                        var 옆칸칸 = Array.prototype.indexOf.call(부모tr.children, 옆칸);
                        var 옆칸줄 = Array.prototype.indexOf.call(부모tbody.children, 부모tr);

                        if (dataset[옆칸줄][옆칸칸] !== 1)
                            옆칸.click();
                    });

                }
            });

            tr.appendChild(td);
        } tbody.appendChild(tr);
    }

    //지뢰 심기
    for (var k = 0; k < 셔플.length; k++) {
        var 세로 = Math.floor(셔플[k] / 10);
        var 가로 = 셔플[k] % 10;

        tbody.children[세로].children[가로].textContent = 'X';
        dataset[세로][가로] = 'X';
    }

    console.log(dataset);
});

