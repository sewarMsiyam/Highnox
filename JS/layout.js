
const toggleBtn = $('#toggleBtn');
const layout = $('.layout');
const sidebar = $('.sidebar');
let isHovered = false;

sidebar.hover(
  function () {
    if (layout.attr('data-sidebar-minimize') === 'on') {
      layout.attr('data-sidebar-minimize', 'off');
      isHovered = true;
    }
  },
  function () {
    if (layout.attr('data-sidebar-minimize') === 'off' && isHovered) {
      layout.attr('data-sidebar-minimize', 'on');
    }
  }
);

toggleBtn.click(function () {
  const currentValue = layout.attr('data-sidebar-minimize');
  if (currentValue === 'on') {
    layout.attr('data-sidebar-minimize', 'off');
  } else {
    layout.attr('data-sidebar-minimize', 'on');
  }
  isHovered = false;
});




var toggleSliderMenu = document.querySelectorAll(".display-menu");
const toggleDisplay = document.querySelectorAll(".toggle-display");

for (let i = 0; i < toggleSliderMenu.length; i++) {
  toggleSliderMenu[i].addEventListener("click", function () {
      toggleDisplay[i].classList.toggle("display-toggle-menu");
      document.querySelectorAll(".sidebar-arrow-down")[i].classList.toggle("fa-rotate-90");
  });
}

const resptoggleSide = document.getElementById("resptoggleSide");
resptoggleSide.addEventListener("click", function () {
  document.querySelector(".sidebar").classList.toggle("sm-sidebar");
});



var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})