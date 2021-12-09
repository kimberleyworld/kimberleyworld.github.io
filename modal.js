const modalButtonMuppets = document.getElementById('modalButtonMuppets')
const popup = document.getElementById('modalPopup')
const closeModal = document.getElementById('closeModal')

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