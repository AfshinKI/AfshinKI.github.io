var historyItems = [
  {
    id: 'pulsemedica',
    company: 'PulseMedica Corp.',
    website: 'https://www.pulsemedica.com/',
    position: '',
    department: '',
    startDate: '',
    endDate: '',
    description: ''
  },
];

function createHistoryItem(
    id, company, website, position, department, startDate, endDate,
    description) {
  let historyItem = document.createElement('div');
  historyItem.className = 'row history-item wow fadeInUp';
  historyItem.id = id;

  let trail = document.createElement('div');
  trail.className = 'col-2 trail';
  trail.id = 'trail';
  historyItem.appendChild(trail);

  let contents = document.createElement('div');
  contents.className = 'col-10';
  contents.style.padding = '3em 0';

  let companyElement = document.createElement('h3');
  companyElement.className = 'company';
  companyElement.innerHTML =
      '<a href="' + website + '" target="_blank">' + company + '</a>';

  let positionElement = document.createElement('h4');
  positionElement.className = 'position';
  positionElement.innerHTML = position;

  let departmentElement = document.createElement('h4');
  departmentElement.className = 'department';
  departmentElement.innerHTML = department;

  let dateElement = document.createElement('h4');
  dateElement.className = 'date';
  dateElement.innerHTML = startDate + ' - ' + endDate;

  let hr = document.createElement('hr');

  let descriptionElement = document.createElement('p');
  descriptionElement.className = 'description';
  descriptionElement.innerHTML = description;

  contents.appendChild(companyElement);
  contents.appendChild(positionElement);
  contents.appendChild(departmentElement);
  contents.appendChild(dateElement);
  contents.appendChild(hr);
  contents.appendChild(descriptionElement);

  historyItem.appendChild(contents);

  return historyItem;
}

function updateTrail() {
  for (let i = 0; i < historyItems.length; i++) {
    let historyItem = document.getElementById(historyItems[i].id);
    let trail = historyItem.querySelector('#trail');
    trail.innerHTML = '';

    const historyItemHeight = historyItem.getBoundingClientRect().height;
    const circleCount = Math.floor(historyItemHeight / 30);

    for (let i = 0; i < circleCount; i++) {
      let circle = document.createElement('i');
      if (i == Math.floor(circleCount / 4)) {
        circle.className = 'fa-solid fa-circle dot'
      } else {
        circle.className = 'line'
      }
      trail.appendChild(circle);
    }
  }
}

function createHistoryDiagram(attachTo) {
  let history = document.getElementById(attachTo);
  for (let i = 0; i < historyItems.length; i++) {
    let item = historyItems[i];
    let historyItem = createHistoryItem(
        item.id, item.company, item.website, item.position, item.department,
        item.startDate, item.endDate, item.description);
    history.appendChild(historyItem);
  }
}

createHistoryDiagram('history-diagram');
updateTrail();
$(document).ready(function() {
  $(window).resize(function() {
    updateTrail();
  });
});
