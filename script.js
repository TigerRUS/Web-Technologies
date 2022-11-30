function printTable() {
   let table = '<table border="2" cellpadding="3">';
   if ((Object.keys(basket)).length != 0)
      table += '<table>' + '<td>' + "Товар" + '</td>' + '<td>' + "<td>" + "Цена"
   for (let x in basket) {
      let inner = `<div class="bin" onclick="deleteFromBasket('${x}', ${idx[x]}, ${prices[x]});"><img class="bin_img" src="images/garbage.png" alt=""></div>`
      table += `<tr  class="td_color">`
      table += '<td>' + x + '</td>'
      table += '<td>'
      table += '<td>' + basket[x] + ' руб.' + '</td>'
      if(prices[x] in activeCheckboxes)
         table += '<td>' + `<input type="checkbox" class="checkbox" id="${prices[x]}" onclick="check();" value="${basket[x]}" checked />` + '</td>'
      else
         table += '<td>' + `<input type="checkbox" class="checkbox" id="${prices[x]}" onclick="check();" value="${basket[x]}">` + '</td>'
      table += '<td>' + inner + '</td>'
   }
   document.getElementById('basket_out').innerHTML = table + '</table>';
   cost()
}

function addToBasket(s) {
   basket[s] = prices[s]
   idx[s] = this.event.target.id
   printTable()
   document.getElementById(this.event.target.id).style = "opacity: 30%"
}

function deleteFromBasket(x, idx, id) {
   delete basket[x]
   document.getElementById(idx).style = "opacity: 100%"
   check()
   delete activeCheckboxes[id]
   printTable()
   if ((Object.keys(basket)).length == 0) {
      document.getElementById('price').style = "border: 0px solid #a30101;"
   }
}

function check(){
   let a = document.querySelectorAll('.checkbox');
   for (var i = 0; i < a.length; i++) {
      if($(`#${a[i].id}`).prop("checked"))
         activeCheckboxes[a[i].id] = a[i].id;
      else
         delete activeCheckboxes[a[i].id]
   }
   printTable()
}

function cost(){
   let sum = 0
   for(let x in activeCheckboxes)
      sum += Number(x)
   if(sum != 0)
      document.getElementById('price_out').innerHTML = "<table>" + `<td class="items_price" id="price">Сумма заказа: ${sum} руб.</td>` + "</table>";
   else 
      document.getElementById('price_out').innerHTML = ""
}

function scrollDown() {
   window.scrollTo(0, 6000)
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
const activeCheckboxes = {}


