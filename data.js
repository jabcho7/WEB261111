// data.js : 내 영화 5편 데이터 / 이재석(2651053) / 10주차
// 영화 한 편 = 객체 하나. 키 5개 : title, year, date, rating, poster
const movies = [
 { title: "투모로우", year: 2004, date: "2004-05-26",
 rating: 6.6, poster: "/96W0h7WdHacyarELRPkLXBnQckk.jpg" },
 { title: "탑건", year: 1986, date: "1986-05-16",
 rating: 7.1, poster: "/oqn0k8FbQ5mKXk5WbtKrvHwV5yV.jpg" },
 { title: "엔젤 해즈 폴른", year: 2019, date: "2019-08-21",
 rating: 7.5, poster: "/sGqqnvOqJg2HDHrjtCPIlCwF4Mu.jpg" },
 {title: "터미네이터", year: 1984, date: "1984-10-26",
 rating: 7.7, poster: "/y6FmrimVoBBKsERc08VyVP1NyNs.jpg" },
 { title: "오디세이", year: 2026, date: "2026-07-15",
 rating: 8.0, poster: "/8ze9OcVuFiy94s6FFPvsn4oC2e1.jpg" }
];

const best = (list) => {
    let top =  list[0];
    for (const m of list) {
        if (m.rating > top.rating) {
            top = m;
        }
    } 
    return top;
}
console.log("최고:", best(movies).title);

const filterByRating = (list, min) => {
    return list.filter(m => m.rating >= min);
}

console.log("8점 이상:", filterByRating(movies, 8).length + "편");
const sortByRating = (list) => {
     return [...list].sort((a, b) => b.rating - a.rating);
}

const sorted = sortByRating(movies);
console.log("정렬 1위:", sorted[0].title, "/ 원본 1번:", movies[0].title);

const yearsSince = (dateStr) => {
    return new Date().getFullYear() - new Date(dateStr).getFullYear();
}

 console.log(yearsSince(movies[0].date) + "년 전 개봉");

 const posterUrl = (path, size) => {
    return "https://image.tmdb.org/t/p/" + size + path;
 }
 console.log(posterUrl(movies[0].poster, "w342"));