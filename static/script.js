
const menuMobile = document.querySelector('.menu-mobile');
const body = document.querySelector('body');

menuMobile.addEventListener('click', () => {
    menuMobile.classList.contains("bi-list")
    ? menuMobile.classList.replace("bi-list", "bi-x")
    :menuMobile.classList.replace("bi-x", "bi-list");
    body.classList.toggle("menu-nav-active")
});


const navItem = document.querySelectorAll('.nav-item')

navItem.forEach(item => {
    item.addEventListener('click', () => {
        if (body.classList.contains("menu-nav-active")){
                body.classList.remove("menu-nav-active")
                menuMobile.classList.replace("bi-x", "bi-list")
        }
    })
})


//ATIVANDO A NAVEGAÇÃO 
const sessao = document.querySelectorAll('.sessao')

const ativeLink = () => {
    const windowOffY = window.pageYOffset
    const windowHeight = window.innerHeight
    const soma = windowOffY + windowHeight * 0.90;
    sessao.forEach(linka =>{
        const elOffY = linka.offsetTop
        var href = linka.getAttribute('id')
        if (soma > elOffY && elOffY+30+this.innerHeight >windowOffY + windowHeight){
            document.querySelector('.'+href).classList.add('active')
        }else{
            var hre = linka.getAttribute('id')
            document.querySelector('.'+ hre).classList.remove('active')
        }
    })
}

ativeLink()

//ANIMAÇÃO PELO SCROLL 

const item= document.querySelectorAll("[data-anime]");

const animeScroll = () => {
    const windowTop = window.pageYOffset + window.innerHeight * 0.90 ;

    item.forEach(element => {
        if (windowTop > element.offsetTop){
            element.classList.add('animate');
        }else{
            element.classList.remove('animate');
        }
    })

};

window.addEventListener("scroll", () => {
    animeScroll()
    ativeLink()
})

animeScroll();