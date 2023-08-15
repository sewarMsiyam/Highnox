//  sidebar
// const toggleBtn = $('#toggleBtn');
// const layout = $('.layout');
// const sidebar = $('.sidebar');
// let isHovered = false;
// sidebar.hover(
//   function () {
//     if (layout.attr('data-sidebar-minimize') === 'on') {
//       layout.attr('data-sidebar-minimize', 'off');
//       isHovered = true;
//     }
//   },
//   function () {
//     if (layout.attr('data-sidebar-minimize') === 'off' && isHovered) {
//       layout.attr('data-sidebar-minimize', 'on');
//     }
//   }
// );
// toggleBtn.click(function () {
//   const currentValue = layout.attr('data-sidebar-minimize');
//   if (currentValue === 'on') {
//     layout.attr('data-sidebar-minimize', 'off');
//   } else {
//     layout.attr('data-sidebar-minimize', 'on');
//   }
//   isHovered = false;
// });

  const layout = $('.layout');
  const sidebar = $('.sidebar');
  const defaultState = 'off'; 

  const savedState = localStorage.getItem('sidebarState');
  if (savedState !== null) {
    layout.attr('data-sidebar-minimize', savedState);
  } else {
    layout.attr('data-sidebar-minimize', defaultState);
  }
  const toggleBtn = $('#toggleBtn');
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
    const newState = layout.attr('data-sidebar-minimize');
    localStorage.setItem('sidebarState', newState);
  });



//multiple select
  // $('.selectpicker').selectpicker();
  // $('.selectpicker').on('changed.bs.select', function (e) {
  //   const selectedItems = $(this).val();
  //   const selectedCount = selectedItems.length;
  //   if (selectedCount >= 3) {
  //     $(this).parent().find('.filter-option-inner-inner').html(`<span style="color: #495057 !important;">${selectedCount} options selected</span>`);
  //   }  
  // });

  $(document).ready(function() {
    let isDropdownOpen = false;
  
    $('.selectpicker').selectpicker();
  
    $('.selectpicker').on('changed.bs.select', function (e) {
      const selectedItems = $(this).val();
      const selectedCount = selectedItems.length;
      if (selectedCount >= 3) {
        $(this).parent().find('.filter-option-inner-inner').html(`<span style="color: #495057 !important;">${selectedCount} options selected</span>`);
      }
    });
    
    $('.selectpicker').on('show.bs.select', function () {
      isDropdownOpen=true;
      console.log("show");
    });

    $('.selectpicker').on('shown.bs.select', function (e) {
      console.log("shown");
      isDropdownOpen=true;
      if(isDropdownOpen){
        $('input').on('click', function (e) {
          e.preventDefault();
          $('.selectpicker').selectpicker('toggle');
          isDropdownOpen=false;
        });
      }else{
        $('.selectpicker').selectpicker('toggle');
        isDropdownOpen=false;

      }
      e.preventDefault();
    });


    $('.selectpicker').on('hide.bs.select', function () {
      console.log("hide");
      isDropdownOpen=false;
    });

    $('.selectpicker').on('hidden.bs.select', function () {
      console.log("hidden");
      isDropdownOpen=false;
    });
  
  });

// toggle menu in sidebar
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


// tooltip
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});



  // Fullscreen
  let myDocuments = document.documentElement;
  let zoomButton = document.getElementById("zoom-button");

  zoomButton.addEventListener("click", function () {
    if (myDocuments.requestFullscreen) {
      myDocuments.requestFullscreen();
      document.getElementsByClassName("fullsec")[0].classList.add("d-none");
      document.getElementsByClassName("existsec")[0].classList.add("d-flex");
    } else if (myDocuments.webkitRequestFullscreen) {
      /* Safari */
      myDocuments.webkitRequestFullscreen();
    } else if (myDocuments.msRequestFullscreen) {
      /* IE11 */
      myDocuments.msRequestFullscreen();
    }
  });
  let fullScreenButton = document.getElementById("zoom-button");
  fullScreenButton.addEventListener("click", function () {
    if (document.fullscreenElement) {
      document.exitFullscreen();
      document.getElementsByClassName("fullsec")[0].classList.remove("d-none");
      document.getElementsByClassName("existsec")[0].classList.remove("d-flex");
    } else if (document.webkitFullscreenElement) {
      /* Safari */
      document.webkitExitFullscreen();
    } else if (document.msFullscreenElement) {
      /* IE11 */
      document.msExitFullscreen();
    }
  });


  $(document).ready(function () {
    $(".searchFunction").on("input", function () {
      if ($(this).val() !== "") {
        $(".menue-Search").removeClass("d-none");
      } else {
        $(".menue-Search").addClass("d-none");
      }
    });
    
    $(".menue-Search").on("focusout", function () {
      $(this).addClass("d-none");
    });
  });


// import list
const fileInput = document.getElementById('fileInput');
fileInput.addEventListener('change', (event) => {
  const selectedFile = event.target.files[0];
  if (selectedFile) {
    const sewarDiv = document.getElementById('namefile');
    sewarDiv.textContent = selectedFile.name;
    console.log('Selected file path:', selectedFile.name); 
  }
});





