# Unlimited Background Color
[click me](https://stackblitz.com/edit/web-platform-pbs2gk?file=index.html)

##Solution code

```javascript
// Generate a random color
const randomcolor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let startcolor;
const startchangingcolor = function () {
  let bgcolor = function () {
    document.body.style.backgroundColor = randomcolor();
  };
  if(!startcolor){ 
     startcolor = setInterval(bgcolor, 2000);
     }
};

const stopchangingcolor = function () {
  clearInterval(startcolor);
  startcolor = null // to prevent from override
};

document.querySelector('#start').addEventListener('click', startchangingcolor);
document.querySelector('#stop').addEventListener('click', stopchangingcolor);

```

# Keyboard

[click me ](https://stackblitz.com/edit/web-platform-xzszbm?file=keyboard%2Findex.html)

##Solution Code

```javascript
const insert = document.getElementById('insert');
window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
  <div class = 'color'>
  <table>
  <tr> 
    <th>key</th>
    <th>keyCode</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? 'space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
</div>
  `;
});

```