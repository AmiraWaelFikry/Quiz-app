/*
=============================
Declerations
=============================
*/
let tipsCount = document.getElementById("tips-counter");
let followersCount = document.getElementById("followers-counter");
let clonesCount = document.getElementById("clones-counter");

/*
=============================
Functions
=============================
*/

// Counter
function setCounter(div, count, totalDuration) {
  let innerCounter = 1;
  const timeInterval = totalDuration / count;
  setInterval(() => {
    if (innerCounter < count) {
      innerCounter += 1;
      div.innerHTML = innerCounter;
    }
  }, timeInterval);
}

/*
=============================
Code
=============================
*/

// Counting
setCounter(tipsCount, 10, 1000);
setCounter(followersCount, 51, 1000);
setCounter(clonesCount, 115, 1000);

//Welcome alert
setTimeout(() => {
  Swal.fire({
    title: "Welcome",
    text: "Hoping always to see you!",
    imageUrl:
      "https://static.vecteezy.com/system/resources/thumbnails/010/925/820/small/colorful-welcome-design-template-free-vector.jpg", // URL to your custom image
    imageWidth: 250,
    imageHeight: 100,
  });
}, 3000);
