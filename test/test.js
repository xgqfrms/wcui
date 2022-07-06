const log = console.log;

const btn = document.querySelector('#button');
btn.addEventListener('click', () => {
  const toast = document.querySelector('#toast');
  // const classList = toast.classList;
  // classList.toggle('outer-class__hide');
  toast.classList.toggle('outer-class__hide');
});

const callback = (type = '') => {
  console.log('button type', type);
  alert(`🎉 button type =${type}`);
}

window.callback = callback;