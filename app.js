const inputText = document.querySelector("#inputText");
const btn = document.querySelector("#btn");
const outputText = document.querySelector("#outputText");

const handler = () => {
  const date = inputText.value;
  play(date.trim());
};

btn.addEventListener("click", handler);

var checkForPrime = (date) => {
  for (var i = 2; i < date; i++) {
    if (date % i === 0) {
      outputText.innerText = "Your birth date is not a prime number : " + date;
      return;
    }
  }

  if (date > 1) {
    outputText.innerText =
      "Hurray! Your birth date is a Prime Number : " + date;
    outputText.innerText =
      "You can share this record with your friends in social media";
    return;
  }
};

var play = (date) => {
  console.log(date);
  var regex = /[0-3][0-9]\/[0-1][0-9]/;

  if (date.length < 6) {
    var res = date.match(regex);
    if (res) {
      var dateArr = date.split("/");

      if (dateArr[1] === "02") {
        if (parseInt(dateArr[0]) < 30) {
          var dateString = dateArr[0] + dateArr[1];
          checkForPrime(parseInt(dateString));
        } else {
          outputText.innerText = "Date cannot be more than 29 in this month!";
        }
      } else {
        if (parseInt(dateArr[0]) < 32) {
          var dateString = dateArr[0] + dateArr[1];
          checkForPrime(parseInt(dateString));
        } else {
          outputText.innerText = "Date cannot be more than 31 in this month";
        }
      }
    } else {
      outputText.innerText = "Incorrect Date! eg: dd/mm";
    }
  } else {
    outputText.innerText = "Incorrect Date! eg: dd/mm";
  }
};
