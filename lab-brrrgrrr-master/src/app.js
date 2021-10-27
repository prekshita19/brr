// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

//Initial price of the burger
var wholeWheatBun = 10;

//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};

//Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  renderButtons();
  renderIngredientsBoard();
  renderPrice();
}


// let price = 170
let items1 = document.querySelectorAll(".items")

// ------------------------------------------ Patty --------------------------------------
function renderPatty()
{
  let patty = document.querySelector("#patty");
  //you can also use getElementById
  if (state.Patty) {
    patty.style.display = "inherit";
    items1[0].innerHTML = "Patty"
    document.querySelectorAll(".button")[0].style.backgroundColor = "#ffd058";
    document.querySelectorAll(".button")[0].style["boxShadow"] = "0px 10px green";  
  }
  else
  {
    patty.style.display = "none";
    items1[0].innerHTML = ""
    document.querySelectorAll(".button")[0].style.backgroundColor = "red";
    document.querySelectorAll(".button")[0].style["boxShadow"] = "0 10px #666";
  }
}
// ------------------------------------------ Cheese --------------------------------------
function renderCheese()
{
  //Trial 1 - Change the visibility of cheese based on state by manipulating the DOM
  let cheese = document.querySelector("#cheese");
  if (state.Cheese)
  {
    cheese.style.display = "inherit";
    items1[1].innerHTML = "Cheese"
    document.querySelectorAll(".button")[1].style.backgroundColor = "#ffd058";
    document.querySelectorAll(".button")[1].style["boxShadow"] = "0px 10px green";  
  }
  else
  {
    cheese.style.display = "none";
    items1[1].innerHTML = ""
    document.querySelectorAll(".button")[1].style.backgroundColor = "red";
    document.querySelectorAll(".button")[1].style["boxShadow"] = "0 10px #666";
  }
}
// ------------------------------------------ Tomatoes --------------------------------------
function renderTomatoes() {
  //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
  let tomatoes = document.querySelector("#tomato");
  if (state.Tomatoes)
  {
    tomatoes.style.display = "inherit";
    items1[2].innerHTML = "Tomatoes"
    document.querySelectorAll(".button")[2].style.backgroundColor = "#ffd058";
    document.querySelectorAll(".button")[2].style["boxShadow"] = "0px 10px green";  
  }
  else
  {
    tomatoes.style.display = "none";
    document.querySelectorAll(".button")[2].style.backgroundColor = "red";
    document.querySelectorAll(".button")[2].style["boxShadow"] = "0 10px #666";  
    items1[2].innerHTML = ""
  }
}
// ------------------------------------------ Onions --------------------------------------
function renderOnions() {
  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
  let onion = document.querySelector("#onion");
  if (state.Onions)
  {
    onion.style.display = "inherit";
    items1[3].innerHTML = "Onions"
    document.querySelectorAll(".button")[3].style.backgroundColor = "#ffd058";
    document.querySelectorAll(".button")[3].style["boxShadow"] = "0px 10px green";  
  }
  else
  {
    onion.style.display = "none";
    items1[3].innerHTML = ""
    document.querySelectorAll(".button")[3].style.backgroundColor = "red";
    document.querySelectorAll(".button")[3].style["boxShadow"] = "0 10px #666";
  }
}
// ------------------------------------------ Lettuce --------------------------------------
function renderLettuce() {
  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
  let lettuce = document.querySelector("#lettuce");
  if (state.Lettuce)
  {
    lettuce.style.display = "inherit";
    items1[4].innerHTML = "lettuce"
    document.querySelectorAll(".button")[4].style.backgroundColor = "#ffd058";
    document.querySelectorAll(".button")[4].style["boxShadow"] = "0px 10px green";  
  }
  else
  {
    lettuce.style.display = "none";
    items1[4].innerHTML = ""
    document.querySelectorAll(".button")[4].style.backgroundColor = "red";
    document.querySelectorAll(".button")[4].style["boxShadow"] = "0 10px #666";
  }
}

// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------



// let items = []
// for (i of items1)
{
  // console.log(i.innerHTML)
  // items.push(i.innerHTML)
}
// console.log(items)


// console.log(items[1])
// delete items[items.indexOf("Cheese")]
// console.log(items)
// to_show=[]

cost = parseInt((document.querySelector(".price-details").innerHTML).slice(3,))

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
document.querySelector(".btn-patty").onclick = function ()
{
  state.Patty = !state.Patty;
  if (!state.Patty)
  {
    cost = cost - ingredients['Patty']
    document.querySelector(".price-details").innerHTML= 'INR' + " " + cost
  }
  else
  {
    cost = cost + ingredients['Patty']
    document.querySelector(".price-details").innerHTML= 'INR' + " " + cost 
  }
  
  renderAll();
};


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Trial 2 - Setup event listener for the cheese button
document.querySelector(".btn-cheese").onclick = function ()
{
  state.Cheese = !state.Cheese;
  if (!state.Cheese)
  {
    cost = cost - ingredients['Cheese']
    document.querySelector(".price-details").innerHTML= 'INR' + " " + cost
  }
  else
  {
    cost = cost + ingredients['Cheese']
    document.querySelector(".price-details").innerHTML= 'INR' + " " + cost 
  }
  
  renderAll();
};

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Trial 2 - Setup event listener for the tomatoes button
document.querySelector(".btn-tomatoes").onclick = function ()
{
  state.Tomatoes = !state.Tomatoes;
  if (!state.Tomatoes)
  {
    cost = cost - ingredients['Tomatoes']
    document.querySelector(".price-details").innerHTML= 'INR' + " " + cost
  }
  else
  {
    cost = cost + ingredients['Tomatoes']
    document.querySelector(".price-details").innerHTML= 'INR' + " " + cost 
  }
  
  renderAll();
};

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Trial 2 - Setup event listener for the onion button
document.querySelector(".btn-onions").onclick = function ()
{
  state.Onions = !state.Onions;
  if (!state.Onions)
  {
    cost = cost - ingredients['Onions']
    document.querySelector(".price-details").innerHTML= 'INR' + " " + cost
  }
  else
  {
    cost = cost + ingredients['Onions']
    document.querySelector(".price-details").innerHTML= 'INR' + " " + cost 
  }
  
  renderAll();
};

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Trial 2 - Setup event listener for the lettuce button
document.querySelector(".btn-lettuce").onclick = function ()
{
  state.Lettuce = !state.Lettuce;
  if (!state.Lettuce)
  {
    cost = cost - ingredients['Lettuce'];
    document.querySelector(".price-details").innerHTML = 'INR' + " " + cost;
  }
  else
  {
    cost = cost + ingredients['Lettuce'];
    document.querySelector(".price-details").innerHTML = 'INR' + " " + cost;
  }
  
  renderAll();
};

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Challenge 1 - Add/Remove the class active to the buttons based on state


//Challenge 2 - Render only the items selected in the ingredients board based on the state


//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients
