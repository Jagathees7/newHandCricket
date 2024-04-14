const showMyValue = document.getElementById('showMyValue');
const showComputerValue = document.getElementById('showComputerValue');
const totalScore = document.getElementById('totalScore');
const myModal = new bootstrap.Modal(document.getElementById('myModal'), {
  keyboard: false
});
const sound = document.getElementById('modalSound');

const handleMyValueClick = (value) => {
    showMyValue.innerHTML = value;
    createComputerValue();
}

const createComputerValue = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    showComputerValue.innerHTML = randomNumber;
    checkValues(parseInt(showMyValue.innerHTML), parseInt(showComputerValue.innerHTML));
}

const checkValues = (myValue, computerValue) => {
    if(myValue == computerValue){
        const modalBody = document.querySelector('.modal-body');
        modalBody.innerHTML = `<h3 class='text-center'>Your score  <span class='text-danger'>${totalScore.innerHTML}</span></h3>`;
        openModal()
    }
    else{
        let currentValue = parseInt(totalScore.innerHTML);
        currentValue += myValue;
        totalScore.innerHTML = currentValue 
    }
}

const openModal = () => {
    sound.play();
    myModal.show();
}

document.addEventListener('keydown', function (event) {
    if (event.key == 'Enter' && myModal._element.style.display == 'block') {
      myModal.hide();
    }
});

myModal._element.addEventListener('hidden.bs.modal', () => {
    sound.pause();
    showMyValue.innerHTML = 0;
    showComputerValue.innerHTML = 0;
    totalScore.innerHTML = 0;
})