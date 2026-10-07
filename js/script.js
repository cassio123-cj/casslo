const mario = document.queryselector('.mario');
const pipe = document.queryselector('.pipe');

 const jump + () => {
    mario.classlist.add('jump');

    setTimeout(() => {
      mario.classlist.remove('jump');

    }, 500)
 }

 const loop = setInterval(()=> {

   const pipePositipon = pipe.offsetLeft;
    if (pipePositipon <= 120) {
      
      pipe.style.animation = 'none';
      pipe.style.left = `${pipePosition}px`;
    }


   <=

 }, 10);
   
 document.addEventListstener('keydown', jump);