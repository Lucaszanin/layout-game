const characters = document.querySelectorAll('.character')


characters.forEach((character) => {
    character.addEventListener('mouseenter', () => {
        const idSelected = character.attributes.id.value;

        if(idSelected === 'ryu')return

        const characterSelected = document.querySelector('.selected')
        characterSelected.classList.remove('selected')
        character.classList.add('selected')


        const imgSelected = document.getElementById('character-player-1');
        imgSelected.src = `./src/imagens/${idSelected}.gif`

        const namePlayer1 = document.getElementById('name')
        const nameSelected = character.getAttribute('data-name')

        namePlayer1.innerHTML = nameSelected;
    })
});
