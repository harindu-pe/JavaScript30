// selecting all the inputs
const inputs = document.querySelectorAll(".controls input");

// difference between nodelist and array is that arays have methods
// to deal with arrays.

// function to update CSS (emphasis on CSS) from the value obtained from inputs
function handleUpdate() {
  // getting the prefix for example 'px'
  const suffix = this.dataset.sizing || "";
  // finding the relevant property and changing its value
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
  console.log(this.name);
}

// look for change events
inputs.forEach((input) => input.addEventListener("change", handleUpdate));
inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate));
