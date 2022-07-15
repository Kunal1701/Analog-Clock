setInterval(() => {
  date = new Date();
  hour = date.getHours();
  mi = date.getMinutes();
  sec = date.getSeconds();
  hrotation = 30 * hour + mi / 2;
  mrotation = 6 * mi;
  srotation = 6 * sec;
  second.style.transform = `rotate(${srotation}deg)`;
  min.style.transform = `rotate(${mrotation}deg)`;
  hour.style.transform = `rotate(${hrotation}deg)`;
}, 1000);
