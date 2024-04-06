const sounds = [
  { id: 'ah-ha', name: 'Ah-ha!' },
  { id: 'back-of-the-net', name: 'Back of the net' },
  { id: 'bangoutoforder', name: 'Bang out of Order' },
  { id: 'dan', name: 'Dan!' },
  { id: 'emailoftheevening', name: 'Email of the Evening' },
  { id: 'hellopartridge', name: 'Hello partridge' },
  { id: 'iateascotchegg', name: 'I ate a scotch egg' },
  { id: 'imconfused', name: 'Im confused' }
];

sounds.forEach(sound => {
  const btn = document.createElement('button');
  btn.classList.add('btn');
  btn.innerText = sound.name;
  btn.dataset.audioId = sound.id;
  btn.addEventListener('click', () => {
    playAudio(sound.id);
  });
  document.getElementById('buttons').appendChild(btn);
});

function playAudio(id) {
  const audio = document.getElementById(id);
  audio.play();
  sounds.forEach(sound => {
    if (sound.id !== id) {
      const audio = document.getElementById(sound.id);
      audio.pause();
      audio.currentTime = 0;
    }
  });
}
