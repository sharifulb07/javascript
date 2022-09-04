//DOM events 
// Event Object
//  -event type: change, submit, reset, load, unload, open, play, canplay,
// pause, playing, progress, ended, volumechange, resize, scroll,
// toggle (works with details),
// beforeprint, afterprint etc.
// properties: type, target, preventDefault()
// 
// MouseEvent Object
// KeyboardEvent Object
// FocusEvent Object
// ClipboardEvent Object
// DragEvent Object
// 
// keyboardEvent Object
// 1. keydown --pressing a key, can repeat
// 2. kleypress (may not supported by some browsers)
// 3. keyup
// some properties -key, keyCode, code, shiftKey, ctlKey, repeat

const text=document.querySelector("textarea");



text.addEventListener("keydown", function(e){
    console.log(`you have pressed ${e.code}`);
})
text.addEventListener("keyup", function(e){
    console.log(`you have key pressed up ${e.keyCode}`);
})
text.addEventListener("keydown", function(e){
    console.log(`you have pressed ${e.code}`);
})
text.addEventListener("keyup", function(e){
    console.log(`you have pressed ${e.ctrlKey}`);
})



