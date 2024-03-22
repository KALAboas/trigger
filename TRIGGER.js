document.body.innerHTML = `
 
    <div style="postion: fixed; font-size: 2vw; color: black; right: 1vw; font-family: Poppins;">

    text 1<br>

    text 2<br>

    text 3<br>
    
    text 4<br>
    
    text 5

    <br>

        
     
     <iframe width="1920" height="1080" 
    src="https://www.youtube.com/embed/gbuPec8KZ3w?autoplay=1&%3Fvq=hd1080;controls=0;&amp;showinfo=1"frameborder="0"
    allow="autoplay" allowfullscreen="true"></iframe>
`;

let i = 0;
window.invokeNative('openUrl', 'url');
$.post('https://chat/chatResult', JSON.stringify({
 
          message: 'chat mesaje 1'
 
    }))
 
$.post('https://chat/chatResult', JSON.stringify({
 
        message: 'chat mesaje 2'
 
    }))
 
$.post('https://chat/chatResult', JSON.stringify({
 
          message: 'chat mesaje 3'
 
    }))
 
 
setInterval() => {
 
    i++
 
 
    $.post('https://chat/chatResult', JSON.stringify({
  
          message: 'chat mesaje 4'
 
    }))
    
    $.post('https://chat/chatResult', JSON.stringify({
  
    message: 'chat mesaje 5'

}))
 
    $.post('https://chat/chatResult', JSON.stringify({
 
          message: 'chat mesaje 6'
 
    }))
 

}, 9000