setInterval(() => {
  date = new Date();
  console.log(date);
  hour = date.getHours();
  mi = date.getMinutes();
  sec = date.getSeconds();
  hrotation = 30 * hour + mi / 2;
  mrotation = 6 * mi;
  srotation = 6 * sec;
  second = document.getElementById('second');
  min = document.getElementById('min');
  hour = document.getElementById('hour');
  second.style.transform = `rotate(${srotation}deg)`;
  min.style.transform = `rotate(${mrotation}deg)`;
  hour.style.transform = `rotate(${hrotation}deg)`;
}, 1000);
