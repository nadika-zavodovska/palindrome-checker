const input = document.getElementById("input");
const btnCheck = document.getElementById("btn-check");
const result = document.getElementById("result");

function reverseString(str) {
    return str.toLowerCase().split("").reverse().join("");
}
function check() {
    const value = input.value;
    input.value = "";

    const reverseValue = reverseString(value);

    result.classList.remove("palindrome", "not-palindrome");

    if (value === "") {
        alert("Please, enter a word.");
    } else if (value === reverseValue) {
        result.textContent = `The "${value}" is a polindrome.`;
        result.classList.add("palindrome");
    } else {
        result.textContent = `The "${value}" is not a polindrome.`;
        result.classList.add("not-palindrome");
    }
}

btnCheck.addEventListener("click", () => check());