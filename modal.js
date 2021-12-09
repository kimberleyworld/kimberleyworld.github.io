const modalButtonMuppets = document.getElementById('modalButtonMuppets')
const popup = document.getElementById('modalPopup')
const closeModal = document.getElementById('closeModal')

const modalButtonPWWorld = document.getElementById('modalButtonPWWorld')
const popupPWWorld = document.getElementById('modalPopupPWWorld')
const closeModalPWWorld = document.getElementById('closeModalPWWorld')

const modalButtonPlanet = document.getElementById('modalButtonPlanet')
const popupPlanets = document.getElementById('modalPopupPlanets')
const closeModalPlanets = document.getElementById('closeModalPlanets')

const modalButtonSnakeSweeper = document.getElementById('modalButtonSnakeSweeper')
const popupSnakeSweeper = document.getElementById('modalPopupSnakeSweeper')
const closeModalSnakeSweeper = document.getElementById('closeModalSnakeSweeper')

modalButtonMuppets.addEventListener('click', function (){
    popup.style.display = "flex";
    modalButtonMuppets.style.display = "none";
    closeModal.addEventListener('click',function (){
        popup.style.display = "none";
        modalButtonMuppets.style.display = "";
        document.getElementById('page').style.filter = "none";
    })
    document.getElementById('page').style.filter = "blur(2px)";
})

modalButtonPWWorld.addEventListener('click', function (){
    console.log("clicked")
    popupPWWorld.style.display = "flex";
    modalButtonPWWorld.style.display = "none";
    closeModalPWWorld.addEventListener('click',function (){
        popupPWWorld.style.display = "none";
        modalButtonPWWorld.style.display = "";
        document.getElementById('page').style.filter = "none";
    })
    document.getElementById('page').style.filter = "blur(2px)";
})

modalButtonPlanet.addEventListener('click', function (){
    console.log("clicked")
    popupPlanets.style.display = "flex";
    modalButtonPlanet.style.display = "none";
    closeModalPlanets.addEventListener('click',function (){
        popupPlanets.style.display = "none";
        modalButtonPlanet.style.display = "";
        document.getElementById('page').style.filter = "none";
    })
    document.getElementById('page').style.filter = "blur(2px)";
})

modalButtonSnakeSweeper.addEventListener('click', function (){
    console.log("clicked")
    popupSnakeSweeper.style.display = "flex";
    modalButtonSnakeSweeper.style.display = "none";
    closeModalSnakeSweeper.addEventListener('click',function (){
        popupSnakeSweeper.style.display = "none";
        modalButtonSnakeSweeper.style.display = "";
        document.getElementById('page').style.filter = "none";
    })
    document.getElementById('page').style.filter = "blur(2px)";
})