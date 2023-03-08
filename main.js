const openModal = document.querySelector('.main__menu-link');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal__close');
const enviarForm = document.querySelector('.form_submit');

openModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.add('modal--show');
});

closeModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show');
});

enviarForm.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show');
})
