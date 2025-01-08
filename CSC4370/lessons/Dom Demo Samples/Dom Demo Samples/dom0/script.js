// 1. Select the ID sign 
let sign = document.getElementById('sign');

// 2. show the value
console.log(sign.textContent);

// give to the value we want .. using JS
sign.textContent = 'Welcome, We got this !';

// modify the the HTML content - we can add anything you like and it gets added at end
sign.innerHTML = sign.innerHTML + '<p>What up str8 cash bruh!!</p>';

// 3. change style of font give access to css 
sign.style.color = 'green';