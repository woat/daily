const phone = document.getElementById('phone'),
      phoneinput = document.getElementById('phoneinput'),
      phonediv = document.getElementById('phonediv'),
      phonenumber = document.getElementById('phonenumber'),
      email = document.getElementById('email'),
      emailinput = document.getElementById('emailinput'),
      callby = document.getElementById('callby'),
      dropdown = document.getElementById('dropdown');

phone.addEventListener('click', function() {
  phonediv.classList.remove('hide');
  phoneinput.setAttribute("name", "Prefer to be contacted by phone");
  phonenumber.setAttribute("name", "Phone Number");
})

email.addEventListener('click', function() {
  phonediv.classList.contains('hide') ? true : phonediv.classList.add('hide');
  emailinput.setAttribute("name", "Prefer to be contacted by email");
})

function drop() {
  if (dropdown.value === "1") {
    callby.setAttribute("name", "Anytime")
  } else if (dropdown.value === "2") {
    callby.setAttribute("name", "Call between 9am and 6pm")
  } else if (dropdown.value === "3") {
    callby.setAttribute("name", "Call before 9am")
  } else {
    callby.setAttribute("name", "Call after 6pm")
  }
}
