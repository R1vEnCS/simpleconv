const btn = document.querySelector(".btn");
const results = document.querySelector(".results");

btn.addEventListener("click", function () {
    const input = Number(document.querySelector('.number').value);
    let math = (input * 1.145) * 1330;

    function addCommas(number) {
      // Convert number to string
      let numberString = number.toString();

      // Use regular expression to add commas
      numberString = numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

      return numberString;
    }

    // Example usage
    let result = addCommas(math);
    results.classList.remove("hidden");
    results.textContent = `Results : ${result} IQD`;

});


console.log('Hello world')