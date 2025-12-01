function ramazan() {

  var ramazanStartDate = new Date("February 18, 2026");

  var date = ramazanStartDate.getDate();
  var year = ramazanStartDate.getFullYear();
  var day = ramazanStartDate.getDay();

  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"];
  var month = months[ramazanStartDate.getMonth()];

  var days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"];
  var day = days[ramazanStartDate.getDay()]


  var message = `Ramazan is coming soon!
  Day--${day}
  Date--${date}
  Month--${month}
  Year--${year}`;

  alert(message);
}
ramazan();
