const mcbod = document.getElementById("mcbod");
const tx = document.getElementsByTagName("tx");
const jch = document.getElementsByClassName("jch");
const time = document.getElementById("time");
const meta = document.getElementsByTagName("meta");
console.log(meta);
var menuLoc = 0;

for (let i = 0; i < jch.length; i++) {
  jch[i].innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;" + jch[i].innerHTML;
  jch[i].onclick = function () {
    select(i);
  };
}

document.addEventListener("keydown", function () {
  console.log(event.key);
  switch (event.key) {
    case "Escape": // listen for Escape press
      setTimeout(function () {
        hideMenu();
        try {
          document.location.href = document.querySelector(
            'meta[name="escOverride"]'
          ).content;
        } catch (err) {
          history.back();
        }
        document.location.href = "/index.html"; // sends user back to index when escape is pressed
      }, 50);
      
      break;
    case "ArrowDown":
      menuLoc++;
      if (menuLoc > jch.length - 1) {
        menuLoc--;
      }
      event.preventDefault();
      break;
    case "ArrowUp":
      menuLoc--;
      if (menuLoc < 0) {
        menuLoc++;
      }
      event.preventDefault();
      break;
    case "Enter":
      select(menuLoc);
      event.preventDefault();
      break;
  }
  for (let i = 0; i < jch.length; i++) {
    jch[i].className = "jch";
  }
  jch[menuLoc].className = "jch hl";
});

function select(a) {
  if (!jch[a].dataset.jchto == "" || undefined) {
    hideMenu();
    window.location.assign(jch[a].dataset.jchto);
  } else {
    setTimeout(function () {
      jch[a].className = "jch deny";
    }, 10); 
  }
}

function hideMenu() {
  for (let i = 0; i < tx.length; i++) {
    setTimeout(function () {
      tx[i].style.visibility = "hidden";
    }, i * 50); // ms of delay of each line disappearing
  }
  setTimeout(function () {
    showMenu();
  }, 100);
  //mobile browsers are stupid lmao
}

function showMenu() {
  for (let i = 0; i < tx.length; i++) {
    setTimeout(function () {
      tx[i].style.visibility = "visible";
    }, i * 50 + 250); // ms of delay of each line appearing
  }
}

showMenu();

//credit to VULPINEARTS for the DOS menu js