const container = document.querySelector('.container');
const ulRender = document.querySelector('.render__movie');
const input = document.querySelector('.input__search');

window.addEventListener('scroll', () => {
  container.classList.add('scroll');
  ulRender.classList.add('padding_ul');
  input.style.backgroundColor = '#02033040';
});

export default { scroll };
