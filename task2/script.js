function validateForm()
{
  let A = document.firstform.elements.sideA.value;
  let B = document.firstform.elements.sideB.value;
  let C = document.firstform.elements.sideC.value;
  if (A == "" || B == "" || C == "")
  {
    alert("Вы должны ввести число");
    return false;
  }
  else if (A.indexOf('-') >= 0 || B.indexOf('-') >= 0 || C.indexOf('-') >= 0)
  {
    alert("Вы должны ввести положительное число");
    return false;
  }
  else if (A == 0 || B == 0 || C == 0)
  {
    alert("Сторона треугольника не может быть равна 0");
    return false;
  }
  else
  {
   A = parseFloat(A);
   B = parseFloat(B);
   C = parseFloat(C);
   if (A + B > C && A + C > B && B + C > A)
   {
      let p = (A + B + C) / 2;
      let S = Math.sqrt(p*(p - A)*(p - B)*(p - C));
      alert("Такой треугольник существует\nЕго площадь: " + S);
   }
   else
   {
      alert("Такого треугольника не существует");
   }
   return false;
  }
}