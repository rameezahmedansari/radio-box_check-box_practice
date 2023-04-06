function selector() {
  var name = document.getElementById("name");
  var checkBoxOptions = document.getElementsByName("checkbox-option");
  var radioOptions = document.getElementsByName("radio-option");

  for (let i = 0; i < checkBoxOptions.length; i++) {
    checkBoxOptions[i].checked = false;
  }
  for (let i = 0; i < radioOptions.length; i++) {
    radioOptions[i].checked = false;
  }

  let inputVal = name.value;
  for (let i = 0; i < checkBoxOptions.length; i++) {
    if (checkBoxOptions[i].value === inputVal) {
      checkBoxOptions[i].checked = true;
    }
  }
  for (let i = 0; i < radioOptions.length; i++) {
    if (radioOptions[i].value === inputVal) {
      radioOptions[i].checked = true;
    }
  }
}
