let s2b = document.querySelector(".s2b");
let s2in = document.querySelectorAll(".s2in");


// s2b.addEventListener("click", ()=> {
//     s2in.forEach((val)=> {
//         if (val.value.trim() === "") {
//             alert("Enter the required information..");
//             break;
//         }
//     })
// })

// This doesn't works

s2b.addEventListener("click", () => {
  let allFilled = true;

  for (let i = 0; i < s2in.length; i++) {
    if (s2in[i].value.trim() === "") {
      allFilled = false;
      break;
    }
  }

  if (allFilled) {
    window.location.href = "login.html";
    alert("registration completed \nNow please LogIn");
    
  } else {
    alert("Enter the required information...");
  }
});