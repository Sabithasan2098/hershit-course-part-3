const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");

setTimeout(() => {
  heading1.textContent = "Hello programmer 1";
  setTimeout(() => {
    heading2.textContent = "Hello programmer 2";
    setTimeout(() => {
      heading3.textContent = "Hello programmer 3";
      setTimeout(() => {
        heading4.textContent = "Hello programmer 4";
        setTimeout(() => {
          heading5.textContent = "Hello programmer 5";
          setTimeout(() => {
            heading6.textContent = "Hello programmer 6";
            setTimeout(() => {
              heading7.textContent = "Hello programmer 7";
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
