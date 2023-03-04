let div = document.querySelectorAll("div");
let img = document.querySelectorAll("p");
let h2 = document.querySelector("h2");
let op = 0.3;
let clicknumber = 0;
let divnumber = [];
let rightanswer = 0;
let imgText = ["банан", "банан", "абрикос", "абрикос", "помидор", "помидор", "томат", "томат", "перец", "перец", "яблоко", "яблоко"];
let random = Math.floor(Math.random() * imgText.length);
let randomText = [];
for (let i = 0; i < div.length; i++) {
  randomText.push(imgText[random]);
  imgText.splice(random, 1);
  random = Math.floor(Math.random() * imgText.length);
  //console.log(randomText[i])
}

for (let i = 0; i < div.length; i++) {
  div[i].addEventListener("click", function () {
    if (div[i].classList != "click" && clicknumber != 2) {
      div[i].classList.remove("notTrue");
      div[i].classList.add("click");
      setTimeout(function () {
        img[i].innerText = randomText[i];
      }, 300)
      clicknumber++;
      divnumber.push(i);
      //console.log(divnumber)
    }
    if (clicknumber == 2) {
      setTimeout(function () {
        if (img[divnumber[0]].innerText == img[divnumber[1]].innerText) {
          setTimeout(function () {
            div[divnumber[0]].style.backgroundColor = "lightgreen";
            div[divnumber[1]].style.backgroundColor = "lightgreen";
            div[divnumber[1]].style.opacity = op;
            div[divnumber[0]].style.opacity = op;
            divnumber.pop();
            divnumber.pop();
            clicknumber = 0;
            //console.log("yes");
            rightanswer++;
            if (rightanswer == 6) {
              h2.innerText = "Congratulations, you win!"
            }
          }, 1000)
        } else if (img[divnumber[0]].innerText != img[divnumber[1]].innerText) {
          setTimeout(function () {
            div[divnumber[0]].classList.remove("click");
            div[divnumber[1]].classList.remove("click");
            div[divnumber[0]].classList.add("notTrue");
            div[divnumber[1]].classList.add("notTrue");
            setTimeout(function () {
              img[divnumber[0]].innerText = "?";
              img[divnumber[1]].innerText = "?";
            }, 300)
            setTimeout(function () {
              divnumber.pop();
              divnumber.pop();
              clicknumber = 0;
              // console.log("no");
            }, 300)

          }, 1000)
        }
      }, 300)
    }
  })
}
/*
div[divnumber[0]].style.display = "none";
div[divnumber[1]].style.display = "none";
*/