var list = document.getElementsByClassName('imagenst');
console.log(list);
for(let i=0; i < list.length ; i++){
    list[i].addEventListener('click', function(){
        this.classList.add('hidden');
        console.log('click');
    });
}
function blurred(i){
    if(list[i].classList.contains('hidden')){
        list[i].classList.remove('hidden');
        
    }else{
        list[i].classList.add('hidden');
    }
    
}