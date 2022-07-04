let summaryPeopleCount = 0;
let saveEl = document.getElementById('save-el');


function peopleCounter() {
  summaryPeopleCount += 1;
  document.getElementById('counter').innerText = summaryPeopleCount;
}


function save() {
  let countStr = summaryPeopleCount + ' - ';
  saveEl.textContent += countStr;

  summaryPeopleCount = 0;
  document.getElementById('counter').innerText = 0;
}


