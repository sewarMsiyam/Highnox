
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

  //nav
  $(".bi-three-dots-vertical").click(function () {
    $(".navbar-icons-container").toggleClass("active");
    return false;
  });




//date 
  $(".datepicker").datepicker({
    format: 'dd/mm/yyyy',
    autoclose: true
  });



//multiple select
  $('.selectpicker').selectpicker();
  $('.selectpicker[multiple]').on('changed.bs.select', function (e) {
    const selectedItems = $(this).val();
    const selectedCount = selectedItems.length;
    if (selectedCount >= 3) {
      $(this).parent().find('.filter-option-inner-inner').html(`<span style="color: #495057 !important;">${selectedCount} options selected</span>`);
    }
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


          
        //import list
        // const fileInput = document.getElementById('fileInput');
        // fileInput.addEventListener('change', (event) => {
        // const selectedFile = event.target.files[0];
        // if (selectedFile) {
        //     const namefile = document.getElementById('namefile');
        //     namefile.textContent = selectedFile.name;
        //     console.log('Selected file path:', selectedFile.name); 
        // }
        // });

//import list
const fileInput = document.getElementById('fileInput');
if (fileInput) {
    fileInput.addEventListener('change', (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            const namefile = document.getElementById('namefile');
            if (namefile) {
                namefile.textContent = selectedFile.name;
                console.log('Selected file path:', selectedFile.name); 
            }
        }
    });
}





// الترتيب
function sortTable(n, table_id) {
  var table,
    rows,
    switching,
    i,
    x,
    y,
    shouldSwitch,
    dir,
    switchcount = 0;
  table = document.getElementById(table_id);
  switching = true;
  dir = "asc";
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount++;
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}






$(document).ready(function() {
  var countSelect=0;
  $('.selectAll').on('change', function() {
    var $table = $(this).closest('table');
    var $checkboxes = $table.find('tbody input[type="checkbox"]');
    $checkboxes.prop('checked', $(this).is(':checked'));
    updateActionVisibility($table);
    updateSelectAll($table);
  });
  $('table input[type="checkbox"]').on('change', function() {
    var $table = $(this).closest('.table');
    updateActionVisibility($table);
    updateSelectAll($table);
  });

  function updateSelectAll($table) {
    var $selectAll = $table.find('.selectAll');
    var $checkboxes = $table.find('tbody input[type="checkbox"]');
    $selectAll.prop('checked', $checkboxes.length === $checkboxes.filter(':checked').length);
  }

  function updateActionVisibility($table) {
    var $actionContainer = $table.closest('.table-tab-pane').find('.action-container');
    var $deleteButton = $actionContainer.find('.delete-selected'); 
    var $selectedCount = $actionContainer.find('.selected-count');
    var $selectedCheckboxes = $table.find('tbody input[type="checkbox"]:checked');
    $actionContainer.toggleClass('d-none', $selectedCheckboxes.length === 0);
    $deleteButton.prop('disabled', $selectedCheckboxes.length === 0);
    $selectedCount.text($selectedCheckboxes.length);
    $selectedCount.toggleClass('d-none', $selectedCheckboxes.length === 0);
    countSelect= $selectedCheckboxes.length;
  }

  $('.delete-selected').on('click', function() {
    alert('delete  count ' + countSelect );
  });

});






















// var fileInputWord = $('.file-word-input');
// var downloadContainerWord = $('#import-contract-word');
// downloadContainerWord.on('click', function() {
//   fileInputWord.trigger('click');
// });
// fileInputWord.on('change', function() {
//     var allowedExtensionsWord = /(\.docx|\.doc)$/i;
//     if (allowedExtensionsWord.exec(fileInputWord[0].files[0].name)) {
//         $('#name_file_word').text(fileInputWord[0].files[0].name);
//         var fileSizeBytes = fileInputWord[0].files[0].size;
//         var fileSizeGB = (fileSizeBytes / (1024 * 1024 * 1024)).toFixed(3);
//         $('#gbs_file_word').text(fileSizeGB + ' gbs');

//         // تحديث عنوان الملف المرفوع
//         var uploadedFileName = fileInputWord[0].files[0].name;
//         updateDownloadLink(uploadedFileName);
//         const downloadPdfActivityBtnWord = document.getElementById("download-contract-word");
//           downloadPdfActivityBtnWord.addEventListener("click", () => {
//               downloadWordFile();
//           });
//           function updateDownloadLink(uploadedFileName) {
//               var downloadLink = $('#download-contract-word');
//               downloadLink.attr('data-file-name', uploadedFileName);
//           }
//           function downloadWordFile() {
//               var downloadLink = $('#download-contract-word');
//               var uploadedFileName = downloadLink.attr('data-file-name');
//               var fileUrl =  uploadedFileName;
//               var link = document.createElement('a');
//               link.href = fileUrl;
//               link.download = uploadedFileName;
//               link.click();
//           }
//     } else {
//         alert('Please select a valid Word document file.');
//         fileInputWord.val('');
//         $('#name_file_word').text('select file word');
//         $('#gbs_file_word').text('0 gbs');
//     }
// });

// var fileInputExcel = $('.file-excel-input');
// var downloadContainerExcel = $('#import-contract-excel');
// downloadContainerExcel.on('click', function() {
//   fileInputExcel.trigger('click');
// });
// fileInputExcel.on('change', function() {
//     var allowedExtensionsExcel = /(\.xlsx|\.xls)$/i;
//     if (allowedExtensionsExcel.exec(fileInputExcel[0].files[0].name)) {
//         $('#name_file_excel').text(fileInputExcel[0].files[0].name);
//         var fileSizeBytes = fileInputExcel[0].files[0].size;
//         var fileSizeGB = (fileSizeBytes / (1024 * 1024 * 1024)).toFixed(3);
//         $('#gbs_file_excel').text(fileSizeGB + ' gbs');

//         // تحديث عنوان الملف المرفوع
//         var uploadedFileName = fileInputExcel[0].files[0].name;
//         updateDownloadLink(uploadedFileName);
//         const downloadPdfActivityBtnExcel = document.getElementById("download-contract-excel");
//           downloadPdfActivityBtnExcel.addEventListener("click", () => {
//               downloadExcelFile();
//           });
//           function updateDownloadLink(uploadedFileName) {
//               var downloadLink = $('#download-contract-excel');
//               downloadLink.attr('data-file-name', uploadedFileName);
//               downloadButton.on('click', function() {
//                 var fileUrl = 'path/to/your/uploaded/files/' + uploadedFileName;
//                 window.open(fileUrl, '_blank'); // فتح في تاب جديدة
//             });
//           }
//           function downloadExcelFile() {
//               var downloadLink = $('#download-contract-excel');
//               var uploadedFileName = downloadLink.attr('data-file-name');
//               var fileUrl =  uploadedFileName;
//               var link = document.createElement('a');
//               link.href = fileUrl;
//               link.download = uploadedFileName;
//               link.click();
              
//           }
//     } else {
//         alert('Please select a valid excel document file.');
//         fileInputExcel.val('');
//         $('#name_file_excel').text('select file excel');
//         $('#gbs_file_excel').text('0 gbs');
//     }
// });







// $(document).ready(function() {
// FilePond.registerPlugin(
//   FilePondPluginFileEncode,
//   FilePondPluginFileValidateSize,
//   FilePondPluginImageExifOrientation,
//   FilePondPluginImagePreview
// );
// var fileponds = document.querySelectorAll('.filepond');
// fileponds.forEach(function(filepond) {
//   FilePond.create(filepond);
// });
// FilePond.setOptions({
//   labelIdle: 'Click to attach files <img src="../img//icons/upload.svg" class="mx-2" alt="">'
// });


// });




$(document).ready(function() {
  var currentNote;

  $(".open-modal").on("click", function() {
    currentNote = $(this).closest(".note");
    $("#AddnotModal").modal("show");
  });

  $(".save_not").on("click", function() {
    var modal = $("#AddnotModal");
    var name = modal.find(".Name_not").val();
    var date = modal.find(".Date_not").val();
    var time = modal.find(".Time_not").val();
    var note = modal.find(".text_not").val();
    var dayName = moment(date).format("dddd");  // استخراج اسم اليوم من التاريخ

    var html = '<hr>'+ ' <p class="d-flex"><span class="text-danger pl-1">' + date + '</span> <span class="text-danger px-1">' + dayName + '</span> <span class="text-danger px-1">' + time + '</span> <span class="text-danger px-1" style="white-space: nowrap;">' + name + '</span> <span class="px-1">' + note + '</span></p>' ;

    currentNote.find(".displayValues").append(html);
    modal.modal("hide");

    // Clear input fields
    modal.find(".Name_not").val("");
    modal.find(".Date_not").val("");
    modal.find(".Time_not").val("");
    modal.find(".text_not").val("");
  });

  // تصفية المدخلات بعد إغلاق الموديل
  $("#AddnotModal").on("hidden.bs.modal", function() {
    var modal = $(this);
    modal.find(".Name_not").val("");
    modal.find(".Date_not").val("");
    modal.find(".Time_not").val("");
    modal.find(".text_not").val("");
  });
});






$(document).ready(function() {
  $(".file-container-input").each(function() {
    var selectedFiles = [];
    var container = $(this);

    function updateSize() {
      let nBytes = 0,
          oFiles = this.files,
          nFiles = oFiles.length;

      for (let nFileId = 0; nFileId < nFiles; nFileId++) {
          selectedFiles.push(oFiles[nFileId]);
      }

      const list = container.find(".imgbox");
      list.empty();

      for (let nFileId = 0; nFileId < selectedFiles.length; nFileId++) {
          const li = $("<li></li>");
          list.append(li);

          const link = $("<a></a>").addClass("openModelAttachment");
          link.text(selectedFiles[nFileId].name);
          
          // تحقق من امتداد الملف وإضافة صورة وفقًا لنوع الملف
          const fileExtension = selectedFiles[nFileId].name.split('.').pop();
          let imageSrc = "";

          
          switch (fileExtension) {
            case "docx":
            case "doc":
              imageSrc = "../images/word.png"; 
              break;
            case "pdf":
              imageSrc = "../images/pdf.png"; 
              break;
            case "xlsx":
            case "xls":
              imageSrc = "../images/excel.png";
              break;
            case "zip":
            case "rar":
              imageSrc = "../images/rar.png";
              break;
            case "jpg":
            case "jpeg":
            case "png":
            case "gif":
            case "bmp":
              imageSrc = "../images/image.png";
              break;
              case "mp4":
              case "avi":
              case "mov":
                imageSrc = "../images/video.png";;
                break;
            default:
              imageSrc = "../images/files.png";
              break;
          }

          if (imageSrc) {
            const fileImage = $("<img>").addClass("file-image").attr("src", imageSrc);
            link.prepend(fileImage);
          }

          li.append(link);

          const deleteIcon = $("<i></i>").addClass("fa-solid fa-x");
          li.append(deleteIcon);
          deleteIcon.on("click", function() {
              li.fadeOut(400, function() {
                  selectedFiles.splice(nFileId, 1);
                  li.remove();
              });
          });
      }
    }

    // $(document).on("click", ".openModelAttachment", function() {
    //   const fileName = $(this).text();
    //   const fileExtension = fileName.split('.').pop();
    //   if (fileExtension === "jpg" || fileExtension === "jpeg" || fileExtension === "png" || fileExtension === "gif" || fileExtension === "bmp") {
    //     const selectedFile = selectedFiles.find(file => file.name === fileName);
    //     if (selectedFile) {
    //       const img = document.createElement("img");
    //       img.src = URL.createObjectURL(selectedFile);
    //       img.className = 'img-fluid';
    //       $("#modelfilename").html(img);
    //     }
    //   }else {
    //     const selectedFile = selectedFiles.find(file => file.name === fileName);
    //     if (selectedFile) {
    //       const fileUrl = URL.createObjectURL(selectedFile);
    //       const iframe = document.createElement("iframe");
    //       iframe.src = `https://docs.google.com/gview?url=${encodeURIComponent(fileUrl)}&embedded=true`;
    //       iframe.className = 'img-fluid';
    //       iframe.style.width = '100%';
    //       iframe.style.height = '500px';
    //       $("#modelfilename").html(iframe);
    //     }
    //   }
    //   $("#AttachmentCenter").modal("show");
    //   console.log(fileName);
    // });
    
    $(document).on("click", ".openModelAttachment", function() {
      const fileName = $(this).text();
      const filePath = "fileselect.html";
      window.open(filePath, "_blank");
    });
    


    container.find(".uploadInput").on("change", updateSize);
    container.find(".fileSelect").on("click", function (e) {
      e.preventDefault();
      container.find(".uploadInput").click();
    });
  });
});





