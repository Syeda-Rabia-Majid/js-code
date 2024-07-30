#Project 1 

##Color scheme changer

[click here](https://stackblitz.com/edit/web-platform-lbjhma?file=color-changer%2Findex.html)

##Solution Code

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
console.log(buttons);

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (event) {
    console.log(event);
    console.log(event.target);
    if (event.target.id == 'grey') {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id == 'white') {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id == 'skyblue') {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id == 'green') {
      body.style.backgroundColor = event.target.id;
    }
  });
});

```

