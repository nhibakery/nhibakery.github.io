var button = document.querySelector('.content__section__btn');
var modal = document.querySelector('.modal');
var modalContent = document.querySelector('.modal__content');
var email 
var close = document.querySelector('.close');

var toggleVisibility = function(){
  modal.classList.toggle('visible');
  modalContent.classList.toggle('position');
}

button.addEventListener('click', toggleVisibility);
close.addEventListener('click', toggleVisibility);

//Exit Modal by clicking outside
document.addEventListener('click', e=>{
  const div = e.target.closest("div").className;
  if(div === 'modal visible'){
    toggleVisibility();
  }
})
// JavaScript Document