document.getElementById("backToTop").addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});





//Header (coloquei aqui pra não precisar outro .js)

//sidebar aparece
function showSidebar(){
     const sidebar =  document.querySelector(".sidebar")
     sidebar.style.display = 'flex'
}
//sidebar desaparece
function offSidebar(){
     const sidebar =  document.querySelector(".sidebar")
     sidebar.style.display = 'none'
}