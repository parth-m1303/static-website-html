let icon = document.querySelector(".icon");
let s4cart = document.querySelector(".s4cart");
let s4close = document.querySelector(".s4close");
let countp = document.querySelector(".countp");
let s4ti = document.querySelector(".s4ti");
let s4order = document.querySelector(".s4order");
let section5 = document.querySelector(".section5");
let s5c = document.querySelector(".s5c");
let s5div = document.querySelector(".s5div");
let s5in = document.querySelectorAll(".s5in");
let s5ti = document.querySelector(".s5ti");
let s5co = document.querySelector(".s5co");

// item 1
let c1 = 0;
let b1 = 0;
let s4minus1 = document.querySelector(".s4minus1");
let s4plus1 = document.querySelector(".s4plus1");
let s2c1 = document.querySelector(".s2c1");
let s4no1 = document.querySelector(".s4no1");
let s4item1 = document.querySelector(".s4item1");
let i1 = document.querySelector(".i1");


// item 2

let c2 = 0;
let b2 = 0;
let s4minus2 = document.querySelector(".s4minus2");
let s4plus2 = document.querySelector(".s4plus2");
let s2c2 = document.querySelector(".s2c2");
let s4no2 = document.querySelector(".s4no2");
let s4item2 = document.querySelector(".s4item2");
let i2 = document.querySelector(".i2");


// item  3

let c3 = 0;
let b3 = 0;
let s4minus3 = document.querySelector(".s4minus3");
let s4plus3 = document.querySelector(".s4plus3");
let s2c3 = document.querySelector(".s2c3");
let s4no3 = document.querySelector(".s4no3");
let s4item3 = document.querySelector(".s4item3");
let i3 = document.querySelector(".i3");



// item  4

let c4 = 0;
let b4 = 0;
let s4minus4 = document.querySelector(".s4minus4");
let s4plus4= document.querySelector(".s4plus4");
let s2c4 = document.querySelector(".s2c4");
let s4no4 = document.querySelector(".s4no4");
let s4item4 = document.querySelector(".s4item4");
let i4 = document.querySelector(".i4");



// item  6

let c6 = 0;
let b6 = 0;
let s4minus6 = document.querySelector(".s4minus6");
let s4plus6 = document.querySelector(".s4plus6");
let s2c6 = document.querySelector(".s2c6");
let s4no6 = document.querySelector(".s4no6");
let s4item6 = document.querySelector(".s4item6");
let i6 = document.querySelector(".i6");



// item  5

let c5 = 0;
let b5 = 0;
let s4minus5 = document.querySelector(".s4minus5");
let s4plus5 = document.querySelector(".s4plus5");
let s2c5 = document.querySelector(".s2c5");
let s4no5 = document.querySelector(".s4no5");
let s4item5 = document.querySelector(".s4item5");
let i5 = document.querySelector(".i5");



// item  7

let c7 = 0;
let b7 = 0;
let s4minus7 = document.querySelector(".s4minus7");
let s4plus7= document.querySelector(".s4plus7");
let s2c7 = document.querySelector(".s2c7");
let s4no7= document.querySelector(".s4no7");
let s4item7 = document.querySelector(".s4item7");
let i7 = document.querySelector(".i7");



// item  8

let c8 = 0;
let b8 = 0;
let s4minus8 = document.querySelector(".s4minus8");
let s4plus8 = document.querySelector(".s4plus8");
let s2c8 = document.querySelector(".s2c8");
let s4no8 = document.querySelector(".s4no8");
let s4item8 = document.querySelector(".s4item8");
let i8 = document.querySelector(".i8");



////////////////////

icon.addEventListener("click", () => {
  s4cart.style.right = "0px";
});

s4close.addEventListener("click", () => {
  s4cart.style.right = "-350px";
});

///////////////////



// item 1


s2c1.addEventListener("click", () => {
    c1++;
    countp.innerText = c1+b1+c2+b2+c3+b3+c4+b4+c5+b5+c6+b6+c7+b7+c8+b8;
    s4no1.innerText = c1+b1;
    if ((b1+c1)>0) {
        i1.style.display = "block";
    }
    s4ti.innerText = c1+b1+c2+b2+c3+b3+c4+b4+c5+b5+c6+b6+c7+b7+c8+b8;
    s5ti.innerText = c1+b1+c2+b2+c3+b3+c4+b4+c5+b5+c6+b6+c7+b7+c8+b8;
    
});

s4plus1.addEventListener("click", ()=> {
    b1++;
    countp.innerText = c1+b1+c2+b2+c3+b3+c4+b4+c5+b5+c6+b6+c7+b7+c8+b8;
    s4no1.innerText = c1+b1;
    s4ti.innerText = c1+b1+c2+b2+c3+b3+c4+b4+c5+b5+c6+b6+c7+b7+c8+b8;
    s5ti.innerText = c1+b1+c2+b2+c3+b3+c4+b4+c5+b5+c6+b6+c7+b7+c8+b8;
})

s4minus1.addEventListener("click", ()=> {
    if ((c1+b1)>0) {
        b1--;
    countp.innerText = c1+b1+c2+b2+c3+b3+c4+b4+c5+b5+c6+b6+c7+b7+c8+b8;
    s4no1.innerText = c1+b1;
    s4ti.innerText = c1+b1+c2+b2+c3+b3+c4+b4+c5+b5+c6+b6+c7+b7+c8+b8;
    s5ti.innerText = c1+b1+c2+b2+c3+b3+c4+b4+c5+b5+c6+b6+c7+b7+c8+b8;
    }

    if ((c1+b1)==0) {
        i1.style.display = "none";
    }
    
})



// item 2



s2c2.addEventListener("click", () => {
    c2++;
    countp.innerText = c1+b1+c2+b2+c3+b3+c4+b4+c5+b5+c6+b6+c7+b7+c8+b8;
    s4no2.innerText = c2+b2;
    if ((b2+c2)>0) {
        i2.style.display = "block";
    }
    s4ti.innerText = c1+b1+c2+b2+c3+b3+c4+b4+c5+b5+c6+b6+c7+b7+c8+b8;
    s5ti.innerText = c1+b1+c2+b2+c3+b3+c4+b4+c5+b5+c6+b6+c7+b7+c8+b8;
    
});

s4plus2.addEventListener("click", ()=> {
    b2++;
    countp.innerText = c1+b1+c2+b2+c3+b3+c4+b4+c5+b5+c6+b6+c7+b7+c8+b8;
    s4no2.innerText = c2+b2;
    s4t.innerText = c1+b1+c2+b2+c3+b3+c4+b4+c5+b5+c6+b6+c7+b7+c8+b8;
    s5ti.innerText = c1+b1+c2+b2+c3+b3+c4+b4+c5+b5+c6+b6+c7+b7+c8+b8;
})

s4minus2.addEventListener("click", ()=> {
    if ((c2+b2)>0) {
        b2--;
    countp.innerText = c1+b1+c2+b2+c3+b3+c4+b4+c5+b5+c6+b6+c7+b7+c8+b8;
    s4no2.innerText = c2+b2;
    s4ti.innerText = c1+b1+c2+b2+c3+b3+c4+b4+c5+b5+c6+b6+c7+b7+c8+b8;
    s5ti.innerText = c1+b1+c2+b2+c3+b3+c4+b4+c5+b5+c6+b6+c7+b7+c8+b8;
    }

    if ((c2+b2)==0) {
        i2.style.display = "none";
    }
    
})


// item 3



s2c3.addEventListener("click", () => {
    c3++;
    countp.innerText = c1+b1+c2+b2+c3+b3+c4+b4+c5+b5+c6+b6+c7+b7+c8+b8;
    s4no3.innerText = c3+b3;
    if ((b3+c3)>0) {
        i3.style.display = "block";
    }
    s4ti.innerText = c1+b1+c2+b2+c3+b3+c4+b4+c5+b5+c6+b6+c7+b7+c8+b8;
    s5ti.innerText = c1+b1+c2+b2+c3+b3+c4+b4+c5+b5+c6+b6+c7+b7+c8+b8;
    
});

s4plus3.addEventListener("click", ()=> {
    b3++;
    countp.innerText = c1+b1+c2+b2+c3+b3+c4+b4+c5+b5+c6+b6+c7+b7+c8+b8;
    s4no3.innerText = c3+b3;
    s4ti.innerText = c1+b1+c2+b2+c3+b3+c4+b4+c5+b5+c6+b6+c7+b7+c8+b8;
    s5ti.innerText = c1+b1+c2+b2+c3+b3+c4+b4+c5+b5+c6+b6+c7+b7+c8+b8;
})

s4minus3.addEventListener("click", ()=> {
    if ((c3+b3)>0) {
        b3--;
    countp.innerText = c1+b1+c2+b2+c3+b3+c4+b4+c5+b5+c6+b6+c7+b7+c8+b8;
    s4no3.innerText = c3+b3;
    s4ti.innerText = c1+b1+c2+b2+c3+b3+c4+b4+c5+b5+c6+b6+c7+b7+c8+b8;
    s5ti.innerText = c1+b1+c2+b2+c3+b3+c4+b4+c5+b5+c6+b6+c7+b7+c8+b8;
    }

    if ((c3+b3)==0) {
        i3.style.display = "none";
    }
    
})



// item 4

s2c4.addEventListener("click", () => {
    c4++;
    countp.innerText = c1+b1+c2+b2+c3+b3+c4+b4+c5+b5+c6+b6+c7+b7+c8+b8;
    s4no4.innerText = c4+b4;
    if ((b4+c4)>0) {
        i4.style.display = "block";
    }
    s4ti.innerText = c1+b1+c2+b2+c3+b3+c4+b4+c5+b5+c6+b6+c7+b7+c8+b8;
    s5ti.innerText = c1+b1+c2+b2+c3+b3+c4+b4+c5+b5+c6+b6+c7+b7+c8+b8;
    
});

s4plus4.addEventListener("click", ()=> {
    b4++;
    countp.innerText = c1+b1+c2+b2+c3+b3+c4+b4+c5+b5+c6+b6+c7+b7+c8+b8;
    s4no4.innerText = c4+b4;
    s4ti.innerText = c1+b1+c2+b2+c3+b3+c4+b4+c5+b5+c6+b6+c7+b7+c8+b8;
    s5ti.innerText = c1+b1+c2+b2+c3+b3+c4+b4+c5+b5+c6+b6+c7+b7+c8+b8;
})

s4minus4.addEventListener("click", ()=> {
    if ((c4+b4)>0) {
        b4--;
    countp.innerText = c1+b1+c2+b2+c3+b3+c4+b4+c5+b5+c6+b6+c7+b7+c8+b8;
    s4no4.innerText = c4+b4;
    s4ti.innerText = c1+b1+c2+b2+c3+b3+c4+b4+c5+b5+c6+b6+c7+b7+c8+b8;
    s5ti.innerText = c1+b1+c2+b2+c3+b3+c4+b4+c5+b5+c6+b6+c7+b7+c8+b8;
    }

    if ((c4+b4)==0) {
        i4.style.display = "none";
    }
    
})



// item 5 

s2c5.addEventListener("click", () => {
    c5++;
    countp.innerText = c1+b1+c2+b2+c3+b3+c4+b4+c5+b5+c6+b6+c7+b7+c8+b8;
    s4no5.innerText = c5+b5;
    if ((b5+c5)>0) {
        i5.style.display = "block";
    }
    s4ti.innerText = c1+b1+c2+b2+c3+b3+c4+b4+c5+b5+c6+b6+c7+b7+c8+b8;
    s5ti.innerText = c1+b1+c2+b2+c3+b3+c4+b4+c5+b5+c6+b6+c7+b7+c8+b8;
    
});

s4plus5.addEventListener("click", ()=> {
    b5++;
    countp.innerText = c1+b1+c2+b2+c3+b3+c4+b4+c5+b5+c6+b6+c7+b7+c8+b8;
    s4no5.innerText = c5+b5;
    s4ti.innerText = c1+b1+c2+b2+c3+b3+c4+b4+c5+b5+c6+b6+c7+b7+c8+b8;
    s5ti.innerText = c1+b1+c2+b2+c3+b3+c4+b4+c5+b5+c6+b6+c7+b7+c8+b8;
})

s4minus5.addEventListener("click", ()=> {
    if ((c5+b5)>0) {
        b5--;
    countp.innerText = c1+b1+c2+b2+c3+b3+c4+b4+c5+b5+c6+b6+c7+b7+c8+b8;
    s4no5.innerText = c5+b5;
    s4ti.innerText = c1+b1+c2+b2+c3+b3+c4+b4+c5+b5+c6+b6+c7+b7+c8+b8;
    s5ti.innerText = c1+b1+c2+b2+c3+b3+c4+b4+c5+b5+c6+b6+c7+b7+c8+b8;
    }

    if ((c5+b5)==0) {
        i5.style.display = "none";
    }
    
})



// item 6

s2c6.addEventListener("click", () => {
    c6++;
    countp.innerText = c1+b1+c2+b2+c3+b3+c4+b4+c5+b5+c6+b6+c7+b7+c8+b8;
    s4no6.innerText = c6+b6;
    if ((b6+c6)>0) {
        i6.style.display = "block";
    }
    s4ti.innerText = c1+b1+c2+b2+c3+b3+c4+b4+c5+b5+c6+b6+c7+b7+c8+b8;
    s5ti.innerText = c1+b1+c2+b2+c3+b3+c4+b4+c5+b5+c6+b6+c7+b7+c8+b8;
    
});

s4plus6.addEventListener("click", ()=> {
    b6++;
    countp.innerText = c1+b1+c2+b2+c3+b3+c4+b4+c5+b5+c6+b6+c7+b7+c8+b8;
    s4no6.innerText = c6+b6;
    s4ti.innerText = c1+b1+c2+b2+c3+b3+c4+b4+c5+b5+c6+b6+c7+b7+c8+b8;
    s5ti.innerText = c1+b1+c2+b2+c3+b3+c4+b4+c5+b5+c6+b6+c7+b7+c8+b8;
})

s4minus6.addEventListener("click", ()=> {
    if ((c6+b6)>0) {
        b6--;
    countp.innerText = c1+b1+c2+b2+c3+b3+c4+b4+c5+b5+c6+b6+c7+b7+c8+b8;
    s4no6.innerText = c6+b6;
    s4ti.innerText = c1+b1+c2+b2+c3+b3+c4+b4+c5+b5+c6+b6+c7+b7+c8+b8;
    s5ti.innerText = c1+b1+c2+b2+c3+b3+c4+b4+c5+b5+c6+b6+c7+b7+c8+b8;
    }

    if ((c6+b6)==0) {
        i6.style.display = "none";
    }
    
})



// item 7

s2c7.addEventListener("click", () => {
    c7++;
    countp.innerText = c1+b1+c2+b2+c3+b3+c4+b4+c5+b5+c6+b6+c7+b7+c8+b8;
    s4no7.innerText = c7+b7;
    if ((b7+c7)>0) {
        i7.style.display = "block";
    }
    s4ti.innerText = c1+b1+c2+b2+c3+b3+c4+b4+c5+b5+c6+b6+c7+b7+c8+b8;
    s5ti.innerText = c1+b1+c2+b2+c3+b3+c4+b4+c5+b5+c6+b6+c7+b7+c8+b8;
    
});

s4plus7.addEventListener("click", ()=> {
    b7++;
    countp.innerText = c1+b1+c2+b2+c3+b3+c4+b4+c5+b5+c6+b6+c7+b7+c8+b8;
    s4no7.innerText = c7+b7;
    s4ti.innerText = c1+b1+c2+b2+c3+b3+c4+b4+c5+b5+c6+b6+c7+b7+c8+b8;
    s5ti.innerText = c1+b1+c2+b2+c3+b3+c4+b4+c5+b5+c6+b6+c7+b7+c8+b8;
})

s4minus7.addEventListener("click", ()=> {
    if ((c7+b7)>0) {
        b7--;
    countp.innerText = c1+b1+c2+b2+c3+b3+c4+b4+c5+b5+c6+b6+c7+b7+c8+b8;
    s4no7.innerText = c7+b7;
    s4ti.innerText = c1+b1+c2+b2+c3+b3+c4+b4+c5+b5+c6+b6+c7+b7+c8+b8;
    
    s5ti.innerText = c1+b1+c2+b2+c3+b3+c4+b4+c5+b5+c6+b6+c7+b7+c8+b8;
    }

    if ((c7+b7)==0) {
        i7.style.display = "none";
    }
    s4ti.innerText = c1+b1+c2+b2+c3+b3+c4+b4+c5+b5+c6+b6+c7+b7+c8+b8;
    
})



// item 8

s2c8.addEventListener("click", () => {
    c8++;
    countp.innerText = c1+b1+c2+b2+c3+b3+c4+b4+c5+b5+c6+b6+c7+b7+c8+b8;
    s4no8.innerText = c8+b8;
    if ((b8+c8)>0) {
        i8.style.display = "block";
    }
    s4ti.innerText = c1+b1+c2+b2+c3+b3+c4+b4+c5+b5+c6+b6+c7+b7+c8+b8;
    s5ti.innerText = c1+b1+c2+b2+c3+b3+c4+b4+c5+b5+c6+b6+c7+b7+c8+b8;
    
});

s4plus8.addEventListener("click", ()=> {
    b8++;
    countp.innerText = c1+b1+c2+b2+c3+b3+c4+b4+c5+b5+c6+b6+c7+b7+c8+b8;
    s4no8.innerText = c8+b8;
    s4ti.innerText = c1+b1+c2+b2+c3+b3+c4+b4+c5+b5+c6+b6+c7+b7+c8+b8;
    s5ti.innerText = c1+b1+c2+b2+c3+b3+c4+b4+c5+b5+c6+b6+c7+b7+c8+b8;
})

s4minus8.addEventListener("click", ()=> {
    if ((c8+b8)>0) {
        b8--;
    countp.innerText = c1+b1+c2+b2+c3+b3+c4+b4+c5+b5+c6+b6+c7+b7+c8+b8;
    s4no8.innerText = c8+b8;
    s4ti.innerText = c1+b1+c2+b2+c3+b3+c4+b4+c5+b5+c6+b6+c7+b7+c8+b8;
    s5ti.innerText = c1+b1+c2+b2+c3+b3+c4+b4+c5+b5+c6+b6+c7+b7+c8+b8;
    }

    if ((c8+b8)==0) {
        i8.style.display = "none";
    }
    
})



/////////////////////////////////////




s4order.addEventListener("click", ()=>{

    if (i1.style.display == "block" ||
        i2.style.display == "block" ||
        i3.style.display == "block" ||
        i4.style.display == "block" ||
        i5.style.display == "block" ||
        i6.style.display == "block" ||
        i7.style.display == "block" ||
        i8.style.display == "block" 
    ) {
        section5.style.zIndex = "10";
    s5div.style.pointerEvents = "auto";
    }
    else {
        alert("Please add some items in the cart...");
    }
    
})

s5c.addEventListener("click", ()=>{
    s5in.forEach((val)=>{
        val.value = ""; 
    })
    section5.style.zIndex = "-5";

})


s5co.addEventListener("click", ()=> {
    let allFilled = true;
    for (let a = 0; a < 3; a++) {
        if (s5in[a].value == "") {
            allFilled = false;
            
        }
    }

    if (!allFilled) {
        alert("Please fill the following information");
        
    }
    else {
        alert("Your order is placed.")
        window.location.href = "index.html";
        
    }
    })



