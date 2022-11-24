function printTable() {
   let table = '<table border="2" cellpadding="3">';
   for (let x in basket) {
      let inner = `<div class="bin" onclick="deleteFromBasket('${x}');"><img class="bin_img" src="images/garbage.png" alt=""></div>`;
      table += '<tr>';
      table += '<td>' + x + '</td>';
      table += '<td>';
      table += '<td>' + basket[x] + ' руб.' + '</td>';
      table += '<td>' + inner + '</td>';
   }
   document.getElementById('basket_out').innerHTML = table + '</table>' + `<div class="items_price" id="price">${price()}</div>`;
}

function addToBasket(s) {
   basket[s] = prices[s]
   printTable(this.event.target.id)
   //document.getElementById(this.event.target.id).style = "opacity: 30%"
}

function deleteFromBasket(s) {
   delete basket[s];
   printTable();
   if((Object.keys(basket)).length == 0) document.getElementById('price').style = "border: 0px solid #a30101;";
   //document.getElementById().style = "opacity: 100%";
}

function scrollDown() {
   window.scrollTo(0, 6000)
}

function price()
{
   let sum = 0
   for(let x in basket){
      sum += basket[x]
   }
   if(sum != 0) return "Сумма заказа: " + String(sum) + " руб.";
   else return "";
}

const storage = {
   'Ретро колёса': 3,
   'Моторное масло Ravenol': 1,
   'Ретро чехлы': 0,
   'Диски в стиле ретро': 5,
   'Ретро фары': 10,
};
const prices = {
   'Ретро колёса': 9900,
   'Моторное масло Ravenol': 1500,
   'Ретро чехлы': 5100,
   'Диски в стиле ретро': 4577,
   'Ретро фары': 790,
};
const basket = {}