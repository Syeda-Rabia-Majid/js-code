#Project 3 

##Digital Clock

[click here](https://stackblitz.com/edit/web-platform-27wfnc?file=Digital-clock%2Findex.html)

##Solution Code

```javascript
const clock = document.getElementById('clock');
setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```