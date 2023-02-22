const checkbox = document.getElementById('checkbox');
const turnToWhite = document.getElementsByClassName("to-white-color");

checkbox.addEventListener('change', ()=>{
  document.body.classList.toggle('dark');
  for(let i =0; i<= turnToWhite.length; i++){
      turnToWhite[i].classList.add("white-color-text"); 
  }
  
})