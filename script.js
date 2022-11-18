function printTable() {
   let table1 = '<table border="1" cellpadding="3">';

   for (let x in points) {
      table1 += '<tr>';
      table1 += '<td>' + x + '</td>';
      table1 += '<td>' + points[x] + '</td>';
      table1 += '<td>' + document.getElementById('checkbox') + points[x] + '</td>';
      table1 += '</tr>';
   }
   document.getElementById('points_out').innerHTML = table1 + '</table>';
}

const points = {
   'Lenovo Legion 5 Pro': 150000,
   'Lenovo Legion 5': 146000,
   'Lenovo Legion Slime 5': 134600,
   'Lenovo Legion 7': 189000,
   'Lenovo Legion 7 Pro': 200000,
   'Lenovo Legion Slim 7': 178000,
};

printTable();