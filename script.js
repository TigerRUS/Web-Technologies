function printTable() {
   let table = '<table border="2" cellpadding="3">';
   if ((Object.keys(basket)).length != 0)
      table += '<table>' + '<td>' + "Товар" + '</td>' + '<td>' + "<td>" + "Цена"
   for (let x in basket) {
      let inner = `<div class="bin" onclick="deleteFromBasket('${x}', ${idx[x]});"><img class="bin_img" src="images/garbage.png" alt=""></div>`
      table += `<tr  class="td_color">`
      table += '<td>' + x + '</td>'
      table += '<td>'
      table += '<td>' + basket[x] + ' руб.' + '</td>'
      table += '<td>' + `<input type="checkbox" class="checkbox" onclick="check();" value="${basket[x]}">` + '</td>'
      table += '<td>' + inner + '</td>'
   }
   document.getElementById('basket_out').innerHTML = table + '</table>';
}

function addToBasket(s) {
   basket[s] = prices[s]
   idx[s] = this.event.target.id
   printTable(this.event.target.id)
   document.getElementById(this.event.target.id).style = "opacity: 30%"
}

function deleteFromBasket(s, id) {
   delete basket[s]
   printTable()
   check()
   if ((Object.keys(basket)).length == 0) {
      document.getElementById('price').style = "border: 0px solid #a30101;"
   }
   document.getElementById(id).style = "opacity: 100%"
}

function scrollDown() {
   window.scrollTo(0, 6000)
}

function check(){
   let a = document.querySelectorAll('input:checked');
   let sum = 0
   for (var i = 0; i < a.length; i++) {
      sum += Number(a[i].value)
   }
   if(sum != 0)
      document.getElementById('price_out').innerHTML = "<table>" + `<td class="items_price" id="price">Сумма заказа: ${sum} руб.</td>` + "</table>";
   else 
      document.getElementById('price_out').innerHTML = ""
}

const prices = {
   'Ретро колёса': 9900,
   'Моторное масло Ravenol': 1500,
   'Ретро чехлы': 5100,
   'Диски в стиле ретро': 4577,
   'Ретро фары': 790,
}
const basket = {}
const idx = {}


