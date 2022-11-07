function GetToday(today)
{
  switch(today.getDay())
  {
    case 0: return "Воскресенье";
    case 1: return "Понедельник";
    case 2: return "Вторник";
    case 3: return "Среда";
    case 4: return "Четверг";
    case 5: return "Пятница";
    case 6: return "Суббота";
  }
}

function GetTime(today)
{
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();

    if (hours < 12) return `${hours} AM : ${minutes} : ${seconds}`;
    return `${hours % 12} PM : ${minutes} : ${seconds}`;
}

console.log("Сегодня: " + GetToday(new Date()));
console.log("Текущее время: " + GetTime(new Date()));