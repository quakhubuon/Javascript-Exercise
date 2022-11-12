let date = new Date();
let curMonth = date.getMonth() + 1;
let curYear  = date.getFullYear();


  const createCal = () => {
  let table = '';
  let preMonth = curMonth - 1;
  let d = new Date(curYear, preMonth);

  function getDay(date) {
    let day = date.getDay();
    if (day == 0) {
      day = 7; // make Sunday (0) the last day
    }
    return day - 1;
  }

  for (let i = 0; i < getDay(d); i++) {
    table += '<td></td>';
  }

  // <td> with actual dates
  while (d.getMonth() == preMonth) {
    table += '<td>' + d.getDate() + '</td>';

    if (getDay(d) % 7 == 6) { // sunday, last day of week - newline
      table += '</tr><tr>';
    }

    d.setDate(d.getDate() + 1);
  }

  if (getDay(d) != 0) {
    for (let i = getDay(d); i < 7; i++) {
      table += '<td></td>';
    }
  }

  // close the table
  table += '</tr></table>';

  var result = curMonth + " - " + curYear;
  document.getElementById('curTime').innerHTML = result;
  document.getElementById('days').innerHTML = table;
}

let next = document.getElementById('btn-next');
let prev = document.getElementById('btn-prev');
let nexty = document.getElementById('btn-next-y');
let prevy = document.getElementById('btn-prev-y');


prev.addEventListener('click', ()=>{
  if (curMonth===1){
    curMonth = 1;
    curMonth += 1;
  }else {
    curMonth -= 1;
  }
  createCal();
})

next.addEventListener('click', ()=>{
  if (curMonth===12){
    curMonth = 1;
    curMonth += 1;
  }else {
    curMonth += 1;
  }
  createCal();
})

prevy.addEventListener('click', ()=>{
  curYear -= 1;
  createCal();
})

nexty.addEventListener('click', ()=>{
  curYear += 1;
  createCal();
})
createCal();