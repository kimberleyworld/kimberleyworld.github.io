const modalButtonMuppets = document.getElementById('modalButtonMuppets')
const popup = document.getElementById('modalPopup')
const closeModal = document.getElementById('closeModal')

const modalButtonPWWorld = document.getElementById('modalButtonPWWorld')
const popupPWWorld = document.getElementById('modalPopupPWWorld')
const closeModalPWWorld = document.getElementById('closeModalPWWorld')

// const modalButtonPlanet = document.getElementById('modalButtonPlanet')
// const popupPlanets = document.getElementById('modalPopupPlanets')
// const closeModalPlanets = document.getElementById('closeModalPlanets')

const modalButtonSocial = document.getElementById('modalButtonSocial')
const popupSocial = document.getElementById('modalPopupSocial')
const closeModalSocial = document.getElementById('closeModalSocial')

const modalButtonSnakeSweeper = document.getElementById('modalButtonSnakeSweeper')
const popupSnakeSweeper = document.getElementById('modalPopupSnakeSweeper')
const closeModalSnakeSweeper = document.getElementById('closeModalSnakeSweeper')

const modalButtonAcademyPortal = document.getElementById('modalButtonAcademyPortal')
const popupAcademyPortal = document.getElementById('modalPopupAcademyPortal')
const closeModalAcademyPortal = document.getElementById('closeModalAcademyPortal')

const modalButtonToDo = document.getElementById('modalButtonToDo')
const popupToDo = document.getElementById('modalPopupToDo')
const closeModalToDo = document.getElementById('closeModalToDo')

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

// modalButtonPlanet.addEventListener('click', function (){
//     console.log("clicked")
//     popupPlanets.style.display = "flex";
//     modalButtonPlanet.style.display = "none";
//     closeModalPlanets.addEventListener('click',function (){
//         popupPlanets.style.display = "none";
//         modalButtonPlanet.style.display = "";
//         document.getElementById('page').style.filter = "none";
//     })
//     document.getElementById('page').style.filter = "blur(2px)";
// })

modalButtonSocial.addEventListener('click', function (){
    console.log("clicked")
    popupSocial.style.display = "flex";
    modalButtonSocial.style.display = "none";
    closeModalSocial.addEventListener('click',function (){
        popupSocial.style.display = "none";
        modalButtonSocial.style.display = "";
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

modalButtonAcademyPortal.addEventListener('click', function (){
    console.log("clicked")
    popupAcademyPortal.style.display = "flex";
    modalButtonAcademyPortal.style.display = "none";
    closeModalAcademyPortal.addEventListener('click',function (){
        popupAcademyPortal.style.display = "none";
        modalButtonAcademyPortal.style.display = "";
        document.getElementById('page').style.filter = "none";
    })
    document.getElementById('page').style.filter = "blur(2px)";
})

modalButtonToDo.addEventListener('click', function (){
    console.log("clicked")
    popupToDo.style.display = "flex";
    modalButtonToDo.style.display = "none";
    closeModalToDo.addEventListener('click',function (){
        popupToDo.style.display = "none";
        modalButtonToDo.style.display = "";
        document.getElementById('page').style.filter = "none";
    })
    document.getElementById('page').style.filter = "blur(2px)";
})

const emailIcon = document.getElementById("myEmail")
emailIcon.addEventListener('click', function (){
    navigator.clipboard.writeText("kim.dobney@yahoo.co.uk");
})