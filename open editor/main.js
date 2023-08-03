//Single Element

//console.log(document.getElementById('my-form'));
//console.log(document.querySelector('h1'));

//Muktiple Element

//console.log(document.querySelectorAll('.item'));
//console.log(document.getElementsByClassName('item'));
//console.log(document.getElementsByTagName('li'));


//const items= document.querySelectorAll('.item');
//items.forEach((item) => console.log(item));

//const ul= document.querySelector('.items');
// ul.remove();
// ul.lastElementChild.remove();
//ul.firstElementChild.textContent = 'Hello';
//ul.lastElementChild.innerHTML = '<h1>Hiii</h1>';
//ul.children[1].innerText = 'Mahi';

//const btn=(document.querySelector('.btn'));
//btn.style.background='orange';

//const btn=document.querySelector('.btn');

//btn.addEventListener('mouseout', (e) => {
//  e.preventDefault();
//document.querySelector('#my-form').style.background = '#ccc';
//  document.querySelector('body').classList.add('bg-dark');
//  document.querySelector('.items').lastElementChild.innerHTML='<h1>Hiii</h1>';
//});

const myForm= document.querySelector('#my-form');
const nameInput= document.querySelector('#name');
const emailInput= document.querySelector('#email');
const msg= document.querySelector('.msg');
const userList= document.querySelector('#users');

myForm.addEventListener('submit' , onSubmit);

function onSubmit(e){
e.preventDefault();

//console.log(nameInput.value);
//console.log(emailInput.value);
if(nameInput.value === '' || emailInput.value === '') {
//  alert('Please enter details');
msg.classList.add('error');
msg.innerHTML = 'Please enter all feilds';
setTimeout(() => msg.remove(), 3000);
}else{
  const li =document.createElement('li');
  li.appendChild(document.createTextNode(`
    ${nameInput.value} : ${emailInput.value}`));

    userList.appendChild(li);
  //console.log('success');
  //clear fields
  nameInput.value='';
  emailInput.value='';
}
}
