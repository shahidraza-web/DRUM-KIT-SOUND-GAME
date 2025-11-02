    function wDrum(){
      const soundElement=document.querySelector(".w-drum")
      soundElement.play();
      buttonAnimation(p)
    }
    function aDrum(){
       const soundElement=document.querySelector(".a-drum")
      soundElement.play();
      buttonAnimation(p)
    }
    function sDrum(){
      const soundElement=document.querySelector(".s-drum")
      soundElement.play();
      buttonAnimation(p)
    }
    function dDrum(){
      const soundElement=document.querySelector(".d-drum")
      soundElement.play();
      buttonAnimation(p)
    }  
    function jDrum(){
      const soundElement=document.querySelector(".j-drum")
      soundElement.play();
      buttonAnimation(p)
    }
    function kDrum(){
      const soundElement=document.querySelector(".k-drum")
      soundElement.play();
      buttonAnimation(p)
    }
    function lDrum(){
      const soundElement=document.querySelector(".l-drum")
      soundElement.play();
      buttonAnimation(p)
    }

   document.addEventListener("keypress",function(event){
    if(event.key==='w'){
      wDrum();
      buttonAnimation(event.key)
    }
    else if(event.key==='a')
    {
      aDrum();
      buttonAnimation(p)
    }
    else if(event.key==='s')
    {
      sDrum();
      buttonAnimation(p)
    }
    else if(event.key==='d')
    {
      dDrum();
      buttonAnimation(p)
    }
    else if(event.key==='j')
    {
      jDrum();
    }
    else if(event.key==='k')
    {

      kDrum();
      buttonAnimation(p)
    }
    else if(event.key==='l')
    {
      lDrum();
      buttonAnimation(p)
    }
   })

   function buttonAnimation(p)
   {
    const element=document.querySelector("."+p)
    element.classList.add("pressed")
    setTimeout(function(){
    element.classList.remove("pressed")},100)
   }