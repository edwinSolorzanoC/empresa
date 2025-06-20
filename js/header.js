
document.addEventListener('DOMContentLoaded', function(){
    const navegacion = document.getElementById("navegacion");
    document.getElementById("mostrarMenu").addEventListener('click', function(){
        if(navegacion.style.display === 'none' || navegacion.style.display === '') {
            navegacion.style.display = 'block';
        } else {
            navegacion.style.display = 'none';
        }
    });
});
