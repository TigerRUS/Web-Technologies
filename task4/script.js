const points = {
   'Ида': 37,
   'Лена': 46,
   'Артур': 70,
   'Платон': 88,
};
const marks = {
   'Ида': 0,
   'Лена': 0,
   'Артур': 0,
   'Платон': 0,
};

for (let x in points) {
   if (points[x] < 60) marks[x] = "незачёт";
   else if (points[x] < 70) marks[x] = 3;
   else if (points[x] < 90) marks[x] = 4;
   else marks[x] = 5;
}

let points_primer = document.getElementById('points_out');
for (let x in points) {
   points_primer.innerHTML += x + ' : ' + points[x] + '<br> ';
}

let marks_primer = document.getElementById('marks_out');
for (let x in points) {
   marks_primer.innerHTML += x + ' : ' + marks[x] + '<br> ';
}