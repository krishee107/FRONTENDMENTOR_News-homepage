let menu = document.getElementById('menu_hamburguesa');

menu.onclick = () =>{
    //Abierto --> Cerramos
    if(menu.classList.contains('active')){
        document.getElementById('cabecera').classList.remove('active');
        menu.classList.remove('active')
    }
    //Cerrado --> abrimos 
    else{
        document.getElementById('cabecera').classList.add('active')
        menu.classList.add('active')
    }
}