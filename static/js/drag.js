const carrossel = document.querySelector(".carrossel");
const arrowBtns = document.querySelectorAll(".wrapper i");
const firstCardWidth = carrossel.querySelector(".card").offsetWidth;
const carrosselChildrens = [...carrossel.children];

let isDragging = false, startX, startScrollLeft;

let cardPerView = Math.round(carrossel.offsetWidth / firstCardWidth);

//copias de cards finais para carrossel infinito
carrosselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carrossel.insertAdjacentHTML("afterbegin", card.outerHTML)
});
//copias de cards iniciais para carrossel infinito
carrosselChildrens.slice(0, cardPerView).forEach(card => {
    carrossel.insertAdjacentHTML("beforeend", card.outerHTML)
});



arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carrossel.scrollLeft += btn.id === "left" ? -firstCardWidth :  firstCardWidth;
    })
});

const dragStart = (e) => {
    isDragging = true;
    carrossel.classList.add("dragging");

    // Grava cursor e scroll inicial do carrossel
    startX = e.pageX;
    startScrollLeft = carrossel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return;
    // Atualiza cursor e scroll do carrossel
    carrossel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carrossel.classList.remove("dragging");
}

const infiniteScroll = () => {
    if(carrossel.scrollLeft === 0){
        console.log("aiaiuiui");
    } else if(carrossel.scrollLeft === carrossel.scrollWidth - carrossel.offsetWidth){
        console.log("aaaaaaaa");
    }
}

carrossel.addEventListener("mousedown", dragStart);
carrossel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carrossel.addEventListener("scroll", infiniteScroll);




document.getElementById("irSobre").addEventListener("click", function() {
    window.scrollTo({
        top: 1140,
        behavior: "smooth"
    });
});

