const downloadPdfActivityBtn = document.getElementById("download-contract-word-summary");
downloadPdfActivityBtn.addEventListener("click", () => {
  downloadWordFile();
});
const downloadPdfActivityBtnSummary = document.getElementById("download-contract-word");
downloadPdfActivityBtnSummary.addEventListener("click", () => {
  downloadWordFile();
});


function downloadWordFile() {
  var fileUrl = 'path/to/your/file.docx';
  var link = document.createElement('a');
  link.href = fileUrl;
  link.download = 'filename.docx';
  link.click();
}

const downloadActivityBtnSummary = document.getElementById("download-contract-excel-summary");
downloadActivityBtnSummary.addEventListener("click", () => {
  downloadFile();
});

const downloadActivityBtn = document.getElementById("download-contract-excel");
downloadActivityBtn.addEventListener("click", () => {
  downloadFile();
});


function downloadFile() {
  var fileUrl = 'path/to/your/file.xlsx';
  var link = document.createElement('a');
  link.href = fileUrl;
  link.download = 'filename.xlsx';
  link.click();
}
var toggleSliderMenu = document.querySelector(".display-client-menu");
var toggleSliderMenuArrow = document.querySelector(".sidebar-arrow-down");

var toggleSliderMenuContractArrow = document.querySelector(".contract-sidebar");

toggleSliderMenu.addEventListener("click", function () {
  const toggleDisplay = document.querySelector(".client-menu-display");
  toggleSliderMenuArrow.classList.toggle("sidebar-arrow-left");
  toggleDisplay.classList.toggle("display-client-menu");
});
var toggleSliderMenu = document.querySelector(".display-contact-menu");

toggleSliderMenu.addEventListener("click", function () {
  const toggleDisplay = document.querySelector(".contact-menu-display");
  toggleSliderMenuContractArrow.classList.toggle("sidebar-arrow-down");

  toggleDisplay.classList.toggle("display-contract-menu");
});
// Sidebar Toggler
let $isSideBar_open = false;

$(".sidebar-toggler").click(function () {
  $isSideBar_open = !$isSideBar_open;
  $(".image-container").toggleClass("display-none");
  if (window.innerWidth > 575.98) {
    $(".sidebar-title").toggleClass("display-none");
  }
  $(".title.d-inline").toggleClass("display-none");
  $(".title.d-none").toggleClass("display-inline");
  $(".sidebar, .content").toggleClass("open");
  $(".sidebar .navbar .nav-link i").toggleClass("custom-icon");
  return false;
});

if (window.innerWidth <= 575.98) {
  $(".sidebar-title").removeClass("display-none");
}

$(".sidebar").hover(function () {
  if ($isSideBar_open) {
    $(".image-container").toggleClass("display-none");
    $(".sidebar-title").toggleClass("display-none");
    $(".title.d-inline").toggleClass("display-none");
    $(".title.d-none").toggleClass("display-inline");
    $(".sidebar, .content").toggleClass("open");
    $(".sidebar .navbar .nav-link i").toggleClass("custom-icon");
    return false;
  }
});

zoom();

function myFunction(id, id_table, id_row) {
  const tableRow = `
   
  <td class="tableTd">
  <div class="container-inner">
    <input class="input" type="text">
  </div>
</td>
<td class="tableTd">
  <div class="container-inner">
    <input class="input" type="text">
  </div>
</td>
<td class="tableTd">
  <div class="container-inner">
    <input class="input" type="text">
  </div>
</td>
<td class="tableTd">
  <div class="container-inner">
    <input class="input" type="text">
  </div>
</td>
<td class="tableTd">
  <div class="container-inner">
    <input class="input" type="text">
  </div>
</td>
<td class="tableTd">
  <div class="container-inner">
    <input class="input" type="text">
  </div>
</td>
<td class="tableTd">
  <div class="container-inner">
    <input class="input" type="text">
  </div>
</td>
<td class="tableTd">
  <div class="container-inner">
    <input class="input" type="text">
  </div>
</td>
<td class="tableTd">
  <div class="icon-delete">
    <img style="height: 0.9rem;" src="../images/delete-ic.svg">
  </div>
</td>

  `;
  var rowTable = document.getElementById(`${id_row}`).innerHTML;

  document
    .querySelector(`#${id_table} tbody`)
    .insertAdjacentHTML("beforeend", tableRow);
}
function AddRentalRow(id, id_table, id_row) {
  const tableRow = `
   
  <td class="tableTd">
  <div class="container-inner">
    <input class="input" type="text">
  </div>
</td>
<td class="tableTd">
  <div class="container-inner">
    <input class="input" type="text">
  </div>
</td>
<td class="tableTd">
  <div class="container-inner">
    <input class="input" type="text">
  </div>
</td>
<td class="tableTd">
  <div class="container-inner">
    <input class="input" type="text">
  </div>
</td>
<td class="tableTd">
  <div class="container-inner">
    <input class="input" type="text">
  </div>
</td>
<td class="tableTd">
  <div class="container-inner">
    <input class="input" type="text">
  </div>
</td>
<td class="tableTd">
  <div class="container-inner">
    <input class="input" type="text">
  </div>
</td>
<td class="tableTd">
  <div class="container-inner">
    <input class="input" type="text">
  </div>
</td>
<td class="tableTd">
  <div class="container-inner">
    <input class="input" type="text">
  </div>
</td>
<td class="tableTd">
  <div class="icon-delete">
    <img style="height: 0.9rem;" src="../images/delete-ic.svg">
  </div>
</td>

  `;
  var rowTable = document.getElementById(`${id_row}`).innerHTML;

  document
    .querySelector(`#${id_table} tbody`)
    .insertAdjacentHTML("beforeend", tableRow);
}
function AddRentalSummaryRow(id, id_table, id_row) {
  const tableRow = `
   

<td class="tableTd">
  <div class="container-inner">
    <input class="input" type="text">
  </div>
</td>
<td class="tableTd">
  <div class="container-inner">
    <input class="input" type="text">
  </div>
</td>
<td class="tableTd">
  <div class="container-inner">
    <input class="input" type="text">
  </div>
</td>
<td class="tableTd">
  <div class="container-inner">
    <input class="input" type="text">
  </div>
</td>
<td class="tableTd">
  <div class="container-inner">
    <input class="input" type="text">
  </div>
</td>
<td class="tableTd">
  <div class="container-inner">
    <input class="input" type="text">
  </div>
</td>
<td class="tableTd">
  <div class="container-inner">
    <input class="input" type="text">
  </div>
</td>
<td class="tableTd">
  <div class="container-inner">
    <input class="input" type="text">
  </div>
</td>
<td class="tableTd">
  <div class="icon-delete">
    <img style="height: 0.9rem;" src="../images/delete-ic.svg">
  </div>
</td>

  `;
  var rowTable = document.getElementById(`${id_row}`).innerHTML;

  document
    .querySelector(`#${id_table} tbody`)
    .insertAdjacentHTML("beforeend", tableRow);
}

function AddDiscountRow1(id, id_table, id_row) {
  const tableRow = `
<td class="tableTd">
  <div class="container-inner">
    <input class="input" type="text">
  </div>
</td>
<td class="tableTd">
  <div class="container-inner">
    <input class="input" type="text">
  </div>
</td>
<td class="tableTd">
  <div class="container-inner">
    <input class="input" type="text">
  </div>
</td>
<td class="tableTd">
  <div class="container-inner">
    <input class="input" type="text">
  </div>
</td>
<td class="tableTd">
  <div class="container-inner">
    <input class="input" type="text">
  </div>
</td>
<td class="tableTd">
  <div class="icon-delete">
    <img style="height: 0.9rem;" src="../images/delete-ic.svg">
  </div>
</td>

  `;
  var rowTable = document.getElementById(`${id_row}`).innerHTML;

  document
    .querySelector(`#${id_table} tbody`)
    .insertAdjacentHTML("beforeend", tableRow);
}
function AddDiscountRow(id, id_table, id_row) {
  const tableRow = `
   
  
<td class="tableTd">
  <div class="container-inner">
    <input class="input" type="text">
  </div>
</td>
<td class="tableTd">
  <div class="container-inner">
    <input class="input" type="text">
  </div>
</td>
<td class="tableTd">
  <div class="container-inner">
    <input class="input" type="text">
  </div>
</td>
<td class="tableTd">
  <div class="container-inner">
    <input class="input" type="text">
  </div>
</td>
<td class="tableTd">
  <div class="container-inner">
    <input class="input" type="text">
  </div>
</td>
<td class="tableTd">
  <div class="container-inner">
    <input class="input" type="text">
  </div>
</td>
<td class="tableTd">
  <div class="container-inner">
    <input class="input" type="text">
  </div>
</td>
<td class="tableTd">
  <div class="icon-delete">
    <img style="height: 0.9rem;" src="../images/delete-ic.svg">
  </div>
</td>

  `;
  var rowTable = document.getElementById(`${id_row}`).innerHTML;

  document
    .querySelector(`#${id_table} tbody`)
    .insertAdjacentHTML("beforeend", tableRow);
}
function AddBookingAgency(id, id_table, id_row) {
  const tableRow = `
   
  

<td class="tableTd">
  <div class="container-inner">
    <input class="input" type="text">
  </div>
</td>
<td class="tableTd">
  <div class="container-inner">
    <input class="input" type="text">
  </div>
</td>
<td class="tableTd">
  <div class="container-inner">
    <input class="input" type="text">
  </div>
</td>
<td class="tableTd">
  <div class="container-inner">
    <input class="input" type="text">
  </div>
</td>


  `;
  var rowTable = document.getElementById(`${id_row}`).innerHTML;

  document
    .querySelector(`#${id_table} tbody`)
    .insertAdjacentHTML("beforeend", tableRow);
}

function myFunction2(id, id_table, id_row) {
  const tableRow = `
   
  <td class="tableTd">
  <div class="container-inner">
    <input class="input" type="text">
  </div>
</td>
<td class="tableTd">
  <div class="container-inner">
    <input class="input" type="text">
  </div>
</td>
<td class="tableTd">
  <div class="container-inner">
    <input class="input" type="text">
  </div>
</td>
<td class="tableTd">
  <div class="container-inner">
    <input class="input" type="text">
  </div>
</td>
<td class="tableTd">
  <div class="container-inner">
    <input class="input" type="text">
  </div>
</td>
<td class="tableTd">
  <div class="container-inner container-inner-text">
            <button type="button" class="file-button" onclick="openFile(this)">
                  <span>Attach File</span>
                <img src="../img/icons/upload.svg" alt="">
           </button>
      </div>
</td>
<td class="tableTd">
  <div class="icon-delete">
    <img style="height: 0.9rem;" src="../images/delete-ic.svg">
  </div>
</td>

  `;
  var rowTable = document.getElementById(`${id_row}`).innerHTML;

  document
    .querySelector(`#${id_table} tbody`)
    .insertAdjacentHTML("beforeend", tableRow);
}
function myFunctionAddPaymentRow (id, id_table, id_row) {
  const tableRow = `
   
  <td class="tableTd">
  <div class="container-inner">
    <input class="input" type="text">
  </div>
</td>
<td class="tableTd">
  <div class="container-inner">
    <input class="input" type="text">
  </div>
</td>
<td class="tableTd">
  <div class="container-inner">
    <input class="input" type="text">
  </div>
</td>
<td class="tableTd">
  <div class="container-inner">
    <input class="input" type="text">
  </div>
</td>
<td class="tableTd">
  <div class="icon-delete">
    <img style="height: 0.9rem;" src="../images/delete-ic.svg">
  </div>
</td>

  `;
  var rowTable = document.getElementById(`${id_row}`).innerHTML;

  document
    .querySelector(`#${id_table} tbody`)
    .insertAdjacentHTML("beforeend", tableRow);
}

  function paymentsAddNew(id, id_table, id_row) {
    const tableRow = `
     
    <td class="tableTd">
    <div class="container-inner">
      <input class="input" type="text">
    </div>
  </td>
  <td class="tableTd">
    <div class="container-inner">
      <input class="input" type="text">
    </div>
  </td>
  <td class="tableTd">
    <div class="container-inner">
      <input class="input" type="text">
    </div>
  </td>
  <td class="tableTd">
    <div class="container-inner">
      <input class="input" type="text">
    </div>
  </td>
  <td class="tableTd">
    <div class="container-inner">
      <input class="input" type="text">
    </div>
  </td>
  <td class="tableTd">
    <div class="container-inner">
      <input class="input" type="text">
    </div>
  </td>
  <td class="tableTd">
    <div class="container-inner">
      <input class="input" type="text">
    </div>
  </td>
    <td class="tableTd">
    <div class="container-inner">
      <input class="input" type="text">
    </div>
  </td>
  <td class="tableTd">
    <div class="container-inner">
      <input class="input" type="text">
    </div>
  </td>
  <td class="tableTd">
    <div class="container-inner">
      <input class="input" type="text">
    </div>
  </td>
  <td class="tableTd">
    <div class="container-inner">
      <input class="input" type="text">
    </div>
  </td>
  <td class="tableTd">
    <div class="container-inner">
      <input class="input" type="text">
    </div>
  </td>
  <td class="tableTd">
  <div class="icon-delete">
    <img style="height: 0.9rem;" src="../images/delete-ic.svg">
  </div>
</td>
  
  
  
    `;
    var rowTable = document.getElementById(`${id_row}`).innerHTML;
  
    document
      .querySelector(`#${id_table} tbody`)
      .insertAdjacentHTML("beforeend", tableRow);
  }

function addRowPaymentTable(id, id_table, id_row) {
  const tableRow = `
   
  <td class="">
  <div class="container-inner">
    <input class="input" type="text">
  </div>
</td>
<td class="">
  <div class="container-inner">
    <input class="input" type="text">
  </div>
</td>
<td class="">
  <div class="container-inner">
    <input class="input" type="text">
  </div>
</td>
<td class="">
  <div class="container-inner">
    <input class="input" type="text">
  </div>
</td>
<td class="">
  <div class="container-inner">
    <input class="input" type="text">
  </div>
</td>
<td class="">
  <div class="container-inner">
    <input class="input" type="text">
  </div>
</td>



  `;
  var rowTable = document.getElementById(`${id_row}`).innerHTML;

  document
    .querySelector(`#${id_table} tbody`)
    .insertAdjacentHTML("beforeend", tableRow);
}

$(document).ready(function () {
  $("#myInput").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});
$(document).ready(function () {
  $("#myInput2").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#myTable2 tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});

// sort table
function sortTable(n, table_id) {
  var table,
    rows,
    switching,
    i,
    x,
    y,
    shouldSwitchx,
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


const downloadOfferBtnPdf = document.getElementById("download-excel-client");
downloadOfferBtnPdf.addEventListener("click", () => {
  
  downloadTable();
});
const downloadActivityBtnExcel = document.getElementById("download-excel-contract");
downloadActivityBtnExcel.addEventListener("click", () => {
  downloadTable();
});

function downloadTable() {
  // Get the table element
  const table = document.getElementById("myTable");

  // Get all rows from table
  const rows = table.getElementsByTagName("tr");

  // Create a CSV string from the table data
  let csv = "";
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const cells = row.getElementsByTagName("td");
    for (let j = 0; j < cells.length; j++) {
      const cell = cells[j];
      const text = cell.textContent.trim();
      csv += text + ",";
    }
    csv += "\n";
  }

  // Create a download link and click it to trigger the download
  const link = document.createElement("a");
  link.setAttribute(
    "href",
    "data:text/csv;charset=utf-8," + encodeURIComponent(csv)
  );
  link.setAttribute("download", "table.csv");
  link.click();
}



// download file
const downloadPdfOfferBtn = document.getElementById("download-pdf-offer");
downloadPdfOfferBtn.addEventListener("click", () => {
  downloadTablePdf();
});

const downloadPdfActivityBtnPdf = document.getElementById("download-pdf-activity");
downloadPdfActivityBtnPdf.addEventListener("click", () => {
  downloadTablePdf();
});

function downloadTablePdf() {
  // Get the table element
  const table = document.getElementById("myTable");
  // Create a new PDF document
  const doc = new jsPDF();

  // doc.autoTable({
  //   html: table,
  //   startY: 10,
  //   theme: 'grid', // Apply a grid theme to the table
  //   styles: {
  //     cellPadding: 3,
  //     fontSize: 10,
  //   },
  //   headStyles: {
  //     fillColor: [41, 128, 185], // Header row fill color
  //     textColor: [255], // Header row text color
  //     fontStyle: 'bold', // Header row font style
  //   },
  // });

  // Get all rows from table
  const rows = table.getElementsByTagName("tr");

  // Loop through each row and add it to the PDF document
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const cells = row.getElementsByTagName("td");
    for (let j = 0; j < cells.length; j++) {
      const cell = cells[j];
      const text = cell.textContent.trim();
      doc.text(text, 10, 10 + i * 10); // Adjust the positioning as needed
    }
  }

  // Save the PDF document
  doc.save("table.pdf");
}



// open email modal for offer or activity
document.getElementById('mySelect-offer').addEventListener('change', function() {
  var selectedValue = this.value;
  if (selectedValue === 'Email') {
    var modal = new bootstrap.Modal(document.getElementById('dragulaModalCenter'));
    modal.show();
  }
});
document.getElementById('mySelect-activity').addEventListener('change', function() {
  var selectedValue = this.value;
  if (selectedValue === 'Email') {
    var modal = new bootstrap.Modal(document.getElementById('dragulaModalCenter'));
    modal.show();
  }
});

// download file

function addEmailContact() {
  let container = document.getElementById("sender");
  container.onclick = () => {
    let select = document.getElementById("senders-menu");
    select.className = "active-email-select";
  };
  let emailContact = document.createElement("div");
  emailContact.className = "contact-email";
}

function zoom() {
  let myDocuments = document.documentElement;
  let zoomButton = document.getElementById("zoom-button");

  zoomButton.addEventListener("click", function () {
    if (myDocuments.requestFullscreen) {
      myDocuments.requestFullscreen();
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
    } else if (document.webkitFullscreenElement) {
      /* Safari */
      document.webkitExitFullscreen();
    } else if (document.msFullscreenElement) {
      /* IE11 */
      document.msExitFullscreen();
    }
  });
}

function openFile(btn) {
  const fileInput = document.getElementById("attachment");
  fileInput.click();
  // get the value of file input
  fileInput.addEventListener("change", function () {
    const file = this.files[0];
    // put the value in the btn content
    btn.textContent = file.name;
  });
}

function searchBar() {
  const searchContainer = document.querySelector(".search-container");
  const navbarSearch = document.querySelector(".navbar-open-search");

  $(".open-search-bar").click(function () {
    searchContainer.classList.replace("d-none", "d-flex");
    navbarSearch.classList.replace("d-flex", "d-none");
    scrollToTop();
    return false;
  });

  $(".search-container .cancel-icon").click(function () {
    searchContainer.classList.replace("d-flex", "d-none");
    navbarSearch.classList.replace("d-none", "d-flex");
    return false;
  });
}
// function toggle() {
//     let dropdown = document.getElementById('exampleDropdown')
//     dropdown.classList.forEach((e) => {
//         if (e == "not-active") {
//             dropdown.className = "active"
//             return
//         }
//     })
//     dropdown.className = "active"
// }

function tableSearch(str) {
  let table = document.getElementById("myTable");
  let rows = table.rows;
  let data = [];
  rows.forEach((r) => {
    data.push(getRowData(r));
  });
  for (let index = 0; index < rows.length; index++) {
    table.deleteRow(index);
  }
}

function insertData(arr, row) {
  arr.forEach((e, i) => {
    let c = row.insertCell(i);
    c.innerHTML = e;
  });
}

function getRowData(r) {
  let tds = r.querySelectorAll("td");
  let data = [];
  tds.forEach((t) => {
    data.push(t.innerText);
  });
  return data;
}

// script execution
document.querySelectorAll(".email-icon").forEach((e) => {
  e.onclick = () => {
    toggleEmailModal();
  };
});
searchBar();
