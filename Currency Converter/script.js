const Base_URL =
  "https://www.oanda.com/currency-converter/en/?from=EUR&to=USD&amount=1";

const dropdowns = document.querySelectorAll(".dropdown select");

const btn = document.querySelector("button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const printCurr = document.querySelector(".msg;");

for (let select of dropdowns) {
  for (currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "INR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }

  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

btn.addEventListener("click", async (evt) => {
  evt.preventDefault();
  let amount = document.querySelector(".amount input");
  let amtVal = amount.value;
  console.log(amtVal);
  if (amtVal === "" || amtVal < 1) {
    amtVal = 1;
    amtVal.value = "1";
  }
  const URL = `https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from=${fromCurr}&to=${toCurr}&amount=${amtVal}
  `;
  const option = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "702ece140amsh7665ab39e9a9f5ep1afbbajsn74873ce7020e",
      "X-RapidAPI-Host": "currency-converter5.p.rapidapi.com",
    },
  };
  let response = await fetch(URL, option);
  let data = await response.text();
  msg.innerText = `${amtVal}${fromCurr} = ${data}${toCurr}`;
});
