function toggleSidebar() {
  var menu = document.querySelector('#menu');
  var menuPrinc = document.querySelector('.menu-principal');
  var moduloBase = document.querySelector('.modulo-base');
  var spans = document.querySelectorAll('.menu-span');
  var iconExpanded = document.querySelectorAll('.bi-chevron-expand');
  var iconCollapsed = document.querySelectorAll('');

  if (menu.style.width === '270px') {
    menu.style.width = '70px';
    menuPrinc.style.width = 'auto';
    document.querySelector(".btn-menu").style.left = "58px";
    for (let span of spans) {
      span.classList.add('hidden');
    }
  } else {
    menu.style.width = '270px';
    menuPrinc.style.width = '230px';
    moduloBase.classList.remove('hidden');
    document.querySelector(".btn-menu").style.left = "258px";
    for (let span of spans)  {
      span.classList.remove('hidden');
    }
  }
  if (menu.style.width === '270px') {

  }
}





