let num = parseInt(prompt("Введите любое натуральное число"));

let arr = [];
for(let i = 0; i <= 30; i++)
{
   arr[i] = (2**(i - 1)*(2**i - 1));
}

if(num % 2 == 0)
{
   if(arr.includes(num))
   {
      alert(num + " является совершенным");
   }
   else alert(num + " не является совершенным");
}
else alert(num + " не является совершенным");