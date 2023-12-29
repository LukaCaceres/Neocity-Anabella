function tomarId(draggableId, draggableHeaderId){
  var draggableWindow = document.getElementById(draggableId);
  var draggableHeader = document.getElementById(draggableHeaderId);

  var posX = 0,
      posY = 0,
      mouseX = 0,
      mouseY = 0;

  draggableHeader.addEventListener('mousedown', mouseDown, false);
  window.addEventListener('mouseup', mouseUp, false);
  function mouseDown(e) {
    e.preventDefault();
    posX = e.clientX - draggableWindow.offsetLeft;
    posY = e.clientY - draggableWindow.offsetTop;
    window.addEventListener('mousemove', moveElement, false);
  }
  
  function mouseUp() {
    window.removeEventListener('mousemove', moveElement, false);
  }
  
  function moveElement(e) {
    mouseX = e.clientX - posX;
    mouseY = e.clientY - posY;
    draggableWindow.style.left = mouseX + 'px';
    draggableWindow.style.top = mouseY + 'px';
  }
}


function minimizeWindow(minimizeWindowId, showMinimizedId){
  let minimizeWindow = document.getElementById(minimizeWindowId);
  let minimizedItem = document.getElementById(showMinimizedId);
  minimizeWindow.style.display = "none";
  minimizedItem.style.display = "flex";
}

function closeWindow(closeWindowId){
  let closeWindow = document.getElementById(closeWindowId);
  closeWindow.style.display = "none"; 
}

function show_WindowAgain(show_WindowId, hideMinimizedId){
  let show_Window = document.getElementById(show_WindowId);
  let hideMinimized = document.getElementById(hideMinimizedId);
  hideMinimized.style.display = "none";
  show_Window.style.display = "block";
}

function tryToMinimizeOrClose(){
  let ameNormalSprite = document.getElementById('ameNormalSprite');
  let ameCrazySprite = document.getElementById('ameCrazySprite'); 
  ameNormalSprite.style.display = "none";
  ameCrazySprite.style.display = "block";
}

//----------------------Objects arrays-------------------------

// Minimized Items Array
const minimizedItems = [
  {
    name: 'Welcome',
    idWindow: 'welcomeWindow',
    idMinimized: 'minimizedWelcome'
  },
  {
    name: 'Line',
    idWindow: 'lineWindow',
    idMinimized: 'minimizedLine'
  },
];

// Home Items Array
const homeItems = [
  {
    tag: "Stream",
    img: "/media/images/iconYoutube.png",
    id: "elementStream"
  },

  {
    tag: "Hang Out",
    img: "/media/images/iconAsobu.png",
    id: "elementHangOut"
  },
  
  {
    tag: "Sleep",
    img: "/media/images/iconAlarm.png",
    id: "elementSleep"
  },
  
  {
    tag: "Medication",
    img: "/media/images/iconMeds.png",
    id: "elementMedication"
  },
  
  {
    tag: "Internet",
    img: "/media/images/iconInternet.png",
    id: "elementInternet"
  },
  
  {
    tag: "Go Out",
    img: "/media/images/iconGoOut.png",
    id: "elementGoOut"
  },
];

//----------------------Divs Generators-------------------------

// Minimized Items Generator
let minimizedItemShow = minimizedItems.map(item =>{
  const footerContainer = document.querySelector('.footer');
  footerContainer.innerHTML += `
  <div class="minimizedItem items-center p-1 mx-2" id="${item.idMinimized}" onclick="show_WindowAgain('${item.idWindow}','${item.idMinimized}')">
    <img src="/media/images/violetBox.png" alt="">
    <p class="mb-1 ml-1 mr-3">${item.name}</p>
  </div>
  `
});

// Home Items Generator
let homeItem = homeItems.map(element =>{
  const asideContainer = document.querySelector('aside');
  asideContainer.innerHTML += `
  <div class="imgAndTag m-2 flex flex-col items-center mb-5" id="${element.id}">
    <img src="${element.img}" alt="">
    <p class="">${element.tag}</p>
  </div>
  `
});