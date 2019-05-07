'use strict';

const checkboxes = document.querySelectorAll('.js__checkbox');

function updateCheckboxes() {
  for (const check of checkboxes) {
    check.addEventListener('change', handleCheckbox);
    check.parentElement.addEventListener('keypress', handleCheckboxLabel);
    updateMe(check);
  }
}

function updateMe(el) {
  if (el.checked === true) {
    el.parentElement.classList.add('form__label--checked');
  } else {
    el.parentElement.classList.remove('form__label--checked');
  }
  
}

function handleCheckbox(event) {
  const check = event.currentTarget;
  updateMe(check);
}

function handleCheckboxLabel(event) {
  if (event.keyCode === 13 || event.keyCode === 32) {
    event.currentTarget.querySelector('.form__checkbox').click();
  }
}


updateCheckboxes();
