var draggable = document.getElementById('welcomeWindow');
var draggableheader = document.getElementById('windowDrag');

var posX = 0,
    posY = 0,
    mouseX = 0,
    mouseY = 0;

draggableheader.addEventListener('mousedown', mouseDown, false);
window.addEventListener('mouseup', mouseUp, false);

function mouseDown(e) {
  e.preventDefault();
  posX = e.clientX - draggable.offsetLeft;
  posY = e.clientY - draggable.offsetTop;
  window.addEventListener('mousemove', moveElement, false);
}

function mouseUp() {
  window.removeEventListener('mousemove', moveElement, false);
}

function moveElement(e) {
  mouseX = e.clientX - posX;
  mouseY = e.clientY - posY;
  draggable.style.left = mouseX + 'px';
  draggable.style.top = mouseY + 'px';
}

function minimizeWindow(minimizeWindowId, showMinimizedId){
  let minimizeWindow = document.getElementById(minimizeWindowId);
  let minimizedItem = document.getElementById(showMinimizedId);
  minimizeWindow.style.display = "none";
  minimizedItem.style.display = "flex";
}


function show_WindowAgain(show_WindowId, hideMinimizedId){
  let show_Window = document.getElementById(show_WindowId);
  let hideMinimized = document.getElementById(hideMinimizedId);
  hideMinimized.style.display = "none";
  show_Window.style.display = "block";
}
