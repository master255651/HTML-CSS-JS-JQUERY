function FaintPicture(element, h, additional) {
  Object.assign(element.style, {
    webkitfilter: 'opacity(0.5)',
    filter: 'opacity(0.5)'
  });
  h.style.display = 'block';
  additional.style.display = 'block';
}

function NormalPicture(element, h, additional) {
  Object.assign(element.style, {
    webkitfilter: 'opacity(1.0)',
    filter: 'opacity(1.0)'
  });
  h.style.display = 'none';
  additional.style.display = 'none';
}

var currentSlide = 1;
let images = document.querySelector(".images");
let slides = document.getElementsByClassName("minImage");

images.addEventListener("click", (e) => {
  if (e.target.nodeName === "IMG") {
    let number = parseInt(e.target.dataset.position);
    ChangeMainImage(number);
  }
});

function ChangeMainImage(posImage) {
  document.getElementById("mainImage").src = "Images/img" + posImage + ".jpg";
  currentSlide = posImage;
}

function Next() {
  if (currentSlide == slides.length) {
    return;
  } else ChangeMainImage((currentSlide += 1));
}

function Previous() {
  if (currentSlide == 1) {
    return;
  } else ChangeMainImage((currentSlide -= 1));
}

if (localStorage.getItem("votes") == null) {
  let votes = {
    pepsi: 0,
    cola: 0,
    fanta: 0,
    sprite: 0,
  };

  localStorage.setItem("votes", JSON.stringify(votes));
}

function CalculateVotes() {
  let results = document.querySelector(".result-board");
  let drinks = document.querySelectorAll("input[name='drinks']");
  let vote = document.querySelectorAll("input[name='drinks']:checked");
  let voteButton = document.getElementById("vote-button");

  let pepsiProgress = document.querySelector("#pepsi-progress");
  let colaProgress = document.querySelector("#cola-progress");
  let fantaProgress = document.querySelector("#fanta-progress");
  let spriteProgress = document.querySelector("#sprite-progress");

  if (vote.length === 0) return alert("You didn't choose anything!");
  else {
    drinks.forEach((item) => (item.disabled = true));
    voteButton.disabled = true;

    results.style.width = "700px";
    results.style.height = "100%";
    results.style.opacity = "1";

    let votes = JSON.parse(localStorage.getItem("votes"));

    switch (vote[0].value) {
      case "pepsi": {
        votes.pepsi += 1;
        break;
      }
      case "cola": {
        votes.cola += 1;
        break;
      }
      case "fanta": {
        votes.fanta += 1;
        break;
      }
      case "sprite": {
        votes.sprite += 1;
        break;
      }
    }

    let numbers = Object.values(votes);
    let sum = numbers.reduce((acc, number) => acc + number, 0);

    let pepsiPercent = Math.round((((votes.pepsi * 100) / sum) * 100) / 100);
    let colaPercent = Math.round((((votes.cola * 100) / sum) * 100) / 100);
    let fantaPercent = Math.round((((votes.fanta * 100) / sum) * 100) / 100);
    let spritePercent = Math.round((((votes.sprite * 100) / sum) * 100) / 100);

    pepsiProgress.querySelector(".bar").style.width = `${pepsiPercent}%`;
    colaProgress.querySelector(".bar").style.width = `${colaPercent}%`;
    fantaProgress.querySelector(".bar").style.width = `${fantaPercent}%`;
    spriteProgress.querySelector(".bar").style.width = `${spritePercent}%`;

    pepsiProgress.querySelector(".percentage").textContent = `${pepsiPercent}%`;
    colaProgress.querySelector(".percentage").textContent = `${colaPercent}%`;
    fantaProgress.querySelector(".percentage").textContent = `${fantaPercent}%`;
    spriteProgress.querySelector(
      ".percentage"
    ).textContent = `${spritePercent}%`;

    localStorage.setItem("votes", JSON.stringify(votes));
  }
}
