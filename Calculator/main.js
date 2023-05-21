console.log("Scientific Calculator");

var screen = document.querySelector('#screen');
var btns = document.querySelectorAll('.btn');

btns.forEach(
    (btn) => btn.addEventListener('click', (e) => {
        console.log(e.target);
        btnText = e.target.innerText;
        console.log(btnText);

        if (btnText == "×") {
            btnText = "*";
        }
        else if (btnText == "÷") {
            btnText = "/";
        }
        screen.value += btnText;
    })
);


function clearAll() {
    screen.value = "";
}

function solve() {
    screen.value = eval(screen.value);
}