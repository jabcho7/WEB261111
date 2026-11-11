// script.js : 내 영화 평점 통계(콘솔판)
// 작성자 : 이재석(2651053)
const titles = ["투모로우", "탑건", "엔젤 해즈 폴른", "터미네이터", "오디세이"];
const ratings = [6.6, 7.1, 6.6, 7.7, 8.0];
const years = [2004, 1986, 2019, 1984, 2026];





const sumsum = (num1, num2) => {
    return num1 + num2;
}

const gugudan = function(dan){
    for(let i = 1; i <= 9; i++){
        console.log(`${dan} x ${i} = ${dan * i}`);
    }
}

gugudan(sumsum(2, 5));

(function init() {
    console.log("초기화 실행");
})()


let sum = 0;
for (let i = 0; i < ratings.length; i++) {
 sum = sum + ratings[i];
}
console.log("합계:", sum);
const average = sum / ratings.length;
console.log("평균:", average);
let max = ratings[0];
let maxIndex = 0;

let count = 0;
for (let i = 0; i < ratings.length; i++){
    if (ratings[i] > max){
        max = ratings[i];
        maxIndex = i;
        if (ratings[i] >= 8) count++;
    }
}
console.log("8점 이상:", count + "편");
console.log("최고:", titles[maxIndex], max);

for (let i = 0; i < 5; i++) {
    let label;

    if (ratings[i] >= 8.5) {
        label = "명작";
    } else if (ratings[i] >= 7) {
        label = "추천";
    } else {
        label = "보통";
    }

    console.log(titles[i] + " (" + years[i] + ") : " + ratings[i] + " " + label);
}

const avgText = average.toFixed(1);
const best = titles[maxIndex];
alert(`내 영화 ${titles.length}편, 평균 ${avgText}점, 최고는 ${best} (${ratings[maxIndex]}점)`);

