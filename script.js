const input = document.querySelector("input");
const btns = document.querySelectorAll("button");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", () => {
    if (btns[i].innerHTML === "=") {
      input.value = eval(input.value);
    } else if (btns[i].innerHTML === "AC") {
      input.value = "";
    } else if (btns[i].innerHTML === "DEL") {
      input.value = input.value.substring(0, input.value.length - 1);
    } else {
      input.value += btns[i].innerHTML;
    }
  });
}
