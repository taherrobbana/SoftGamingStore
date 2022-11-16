let preveiwContainer = document.querySelector('.games-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.games-container .game').forEach(game => {
  game.onclick = () => {
    preveiwContainer.style.display = 'flex';
    let name = game.getAttribute('data-name');
    previewBox.forEach(preview => {
      let target = preview.getAttribute('data-target');
      if (name == target) {
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close => {
  close.querySelector('.fa-times').onclick = () => {
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});