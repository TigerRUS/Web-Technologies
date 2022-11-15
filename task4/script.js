function printPoints() {
   let table1 = '<table border="1" cellpadding="3">';

   for (let x in points) {
      table1 += '<tr>';
      table1 += '<td>' + x + '</td>';
      table1 += '<td>' + points[x] + '</td>';
      table1 += '</tr>';
   }
   document.getElementById('points_out').innerHTML = table1 + '</table>';
}
function printMarks() {
   let table2 = '<table border="1" cellpadding="3">';

   for (let x in marks) {
      table2 += '<tr>';
      table2 += '<td>' + x + '</td>';
      table2 += '<td>' + marks[x] + '</td>';
      table2 += '</tr>';
   }
   document.getElementById('marks_out').innerHTML = table2 + '</table>';
}
function setMarks() {
   for (let x in points) {
      if (points[x] < 60) marks[x] = "незачёт";
      else if (points[x] < 70) marks[x] = 3;
      else if (points[x] < 90) marks[x] = 4;
      else marks[x] = 5;
   }
}
function addInfoForm() {
   let Name = document.forms.firstform.elements.Name.value;
   let Points = document.forms.firstform.elements.Points.value;

   if (Name == "") {
      alert("Введите имя студента");
   }
   else if (Name[0] == " ") {
      alert("Имя не может начинатся с пробела");
   }
   else if (Name[0] <= 57 || Name[0] >= 48) {
      alert("Не издевайтесь над именем студента");
   }
   else if (Name[0] <= 127 || Name[0] >= 160) {
      alert("Имя должно начинатся с заглавной буквы");
   }
   else if (Points == "") {
      alert("Введите количество баллов");
   }
   else if (Points > 100 || Points < 0) {
      alert("Введите количество баллов в интервале от 0 до 100");
   }
   else {
      points[Name] = Points;
      setMarks();
      printPoints();
      printMarks();
   }
   return false;
}
function deleteInfoForm() {
   let Name = document.forms.secondform.elements.Name.value;
   if (!(Name in points)) {
      alert("Студента с такими данными нет в базе.");
      alert("Проверьте корректность ведённых данных.");
   }
   else {
      delete points[Name];
      delete marks[Name];
      setMarks();
      printPoints();
      printMarks();
   }
   return false;
}

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

setMarks();
printPoints();
printMarks();