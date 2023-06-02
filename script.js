const codes = document.querySelectorAll(".main-section pre");

// const icons = [icon1, icon2, icon3, icon4, icon5, icon6, icon7];

const codesArr = Array.from(codes);
// console.log(codesArr);

codesArr.forEach((element, i) => {
  const icon = document.createElement("button");
  icon.innerText = "copy";
  icon.style.width = "3rem";
  icon.style.fontSize = "1rem";
  icon.style.backgroundColor = "yellow";
  icon.style.position = "absolute";
  icon.style.top = "0";
  icon.style.right = "0";
  icon.style.margin = "0 0 1rem 1rem";
  icon.style.cursor = "pointer";
  icon.style.border = "none";
  element.insertAdjacentElement("afterbegin", icon);
});

async function copyThisText(element) {
  const copyText = element.nextElementSibling.innerHTML;
  try {
    await navigator.clipboard.writeText(copyText);
    alert(`${copyText} COPIED SUCCESSFULLY`);
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
}

const buttons = document.querySelectorAll("button");

buttons.forEach((b) => {
  //   b = this;
  b.addEventListener("click", (e) => {
    copyThisText(b);
  });
});
