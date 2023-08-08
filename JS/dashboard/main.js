document.getElementById('mySelect-offer').addEventListener('change', function() {
  var selectedValue = this.value;
  if (selectedValue === 'Email') {
    var modal = new bootstrap.Modal(document.getElementById('EmailModal'));
    modal.show();
  }
});
document.getElementById('mySelect-activity').addEventListener('change', function() {
  var selectedValue = this.value;
  if (selectedValue === 'Email') {
    var modal = new bootstrap.Modal(document.getElementById('EmailModal'));
    modal.show();
  }
});


const downloadPdfActivityBtnWord = document.getElementById("download-contract-word");
downloadPdfActivityBtnWord.addEventListener("click", () => {
  downloadWordFile();
});

function downloadWordFile() {
  var fileUrl = 'path/to/your/file.docx';
  var link = document.createElement('a');
  link.href = fileUrl;
  link.download = 'filename.docx';
  link.click();
}



const downloadActivityBtnExcel = document.getElementById("download-contract-excel");
downloadActivityBtnExcel.addEventListener("click", () => {
  downloadFile();
});

function downloadFile() {
  var fileUrl = 'path/to/your/file.xlsx';
  var link = document.createElement('a');
  link.href = fileUrl;
  link.download = 'filename.xlsx';
  link.click();
}


// var toggleSliderMenuContractArrow = document.querySelector(".contract-sidebar");


// var toggleSliderMenu = document.querySelector(".display-contact-menu");

// toggleSliderMenu.addEventListener("click", function () {
//   console.log("sss");
//   const toggleDisplay = document.querySelector(".contract-display");

//   toggleSliderMenuContractArrow.classList.toggle("sidebar-arrow-down");
//   toggleDisplay.classList.toggle("display-toggle-menu");
// });

$(document).ready(function () {
  $(".js-example-basic-multiple").select2();
});
$(".js-example-placeholder-multiple").select2({
  placeholder: "Select a state",
});

// download file
const downloadPdfOfferBtn = document.getElementById("download-pdf-offer");
downloadPdfOfferBtn.addEventListener("click", () => {
  downloadTablePdf();
});

const downloadPdfActivityBtn = document.getElementById("download-pdf-activity");
downloadPdfActivityBtn.addEventListener("click", () => {
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

const downloadOfferBtn = document.getElementById("download-excel-offer");
downloadOfferBtn.addEventListener("click", () => {
  downloadTable();
});
const downloadActivityBtn = document.getElementById("download-excel-activity");
downloadActivityBtn.addEventListener("click", () => {
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

function backOffer(back_offer, add_offer) {
  var x = document.getElementById(back_offer);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  var y = document.getElementById(add_offer);
  if (y.style.display === "block") {
    y.style.display = "none";
  } else {
    y.style.display = "block";
  }
}

function addOffer(back_offer, add_offer) {
  var x = document.getElementById(back_offer);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  var y = document.getElementById(add_offer);
  if (y.style.display === "block") {
    y.style.display = "none";
  } else {
    y.style.display = "block";
  }
}

function goToOffers() {
  var salesDashboardTab = document.getElementById("sales-dashboard-tab");
  var offersTab = document.getElementById("offers-tab");
  var salesDashboard = document.getElementById("sales-dashboard");
  var offers = document.getElementById("offers");

  salesDashboardTab.classList.remove("active");
  salesDashboardTab.setAttribute("aria-selected", "false");
  salesDashboard.classList.remove("show", "active");

  offersTab.classList.add("active");
  offersTab.setAttribute("aria-selected", "true");
  offers.classList.add("show", "active");
  goToAddOffer("back-offer", "add-offer");
}

function goToAddOffer(back_offer, add_offer) {
  var x = document.getElementById(back_offer);
  x.style.display = "none";
  var y = document.getElementById(add_offer);
  y.style.display = "block";
}

function backActivity(back_activity, add_activity) {
  var x = document.getElementById(back_activity);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  var y = document.getElementById(add_activity);
  if (y.style.display === "block") {
    y.style.display = "none";
  } else {
    y.style.display = "block";
  }
}

function addActivity(back_activity, add_activity) {
  var x = document.getElementById(back_activity);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  var y = document.getElementById(add_activity);
  if (y.style.display === "block") {
    y.style.display = "none";
  } else {
    y.style.display = "block";
  }
}

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
    <select class="input">
      <option>Hour</option>
      <option>Month</option>
      <option>Day</option>
    </select>
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
    <select class="input">
      <option>5%</option>
      <option>10%</option>
      <option>20%</option>
    </select>
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
    <img style="height: 0.9rem;" src="./images/delete-ic.svg">
  </div>
</td>

  `;
  var rowTable = document.getElementById(`${id_row}`).innerHTML;

  document
    .querySelector(`#${id_table} tbody`)
    .insertAdjacentHTML("beforeend", tableRow);
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

const copyIcons = document.querySelectorAll(".copy-icon");
copyIcons.forEach((icon) => {
  icon.addEventListener("click", function () {
    backOffer("back-offer", "add-offer");
  });
});
const copyActivityIcons = document.querySelectorAll(".copy-activity-icon");
copyIcons.forEach((icon) => {
  icon.addEventListener("click", function () {
    backActivity("back-activity", "add-activity");
  });
});
const close_btns = document.querySelectorAll(".close-ic");

close_btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement.closest(".task").style.display = "none";
  });
});

const sidebarLinks = document.querySelectorAll(".sidebar .navbar .nav-link");

sidebarLinks.forEach((ele) => {
  let location = window.location.pathname.split(".")[0].split("/");
  if (ele.childNodes[1].textContent.toLowerCase() === location[1]) {
    ele.classList.add("sidebar-active");
  } else {
    if (
      ele.childNodes[1].textContent.toLowerCase() === "dashboard" &&
      location[1] === "index"
    ) {
      ele.classList.add("sidebar-active");
    } else ele.classList.remove("sidebar-active");
  }
});
(function ($) {
  "use strict";

  // Spinner
  // var spinner = function () {
  //   setTimeout(function () {
  //     if ($("#spinner").length > 0) {
  //       $("#spinner").removeClass("show");
  //     }
  //   }, 1);
  // };
  // spinner();



  // search bar toggle
  const searchContainer = document.querySelector(".search-container");
  const navbarSearch = document.querySelector(".navbar-open-search");

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // You can change this to 'auto' for instant scrolling
    });
  }
  $(".open-search-bar").click(function () {
    searchContainer.classList.replace("d-none", "d-flex");
    navbarSearch.classList.replace("d-flex", "d-none");
    scrollToTop();
    return false;
  });

  $(".bi-three-dots-vertical").click(function () {
    $(".navbar-icons-container").toggleClass("active");
    return false;
  });

  $(".content-container").click(function () {
    if (window.innerWidth <= 991) {
      $(".image-container").removeClass("display-none");
      $(".sidebar-title").removeClass("display-none");
      $(".title.d-none").removeClass("display-inline");
      $(".sidebar .navbar .nav-link i").removeClass("custom-icon");
      $(".sidebar, .content").removeClass("open");
      return false;
    }
  });

  $(".search-container .cancel-icon").click(function () {
    searchContainer.classList.replace("d-flex", "d-none");
    navbarSearch.classList.replace("d-none", "d-flex");
    return false;
  });
  // Sidebar Toggler
  //let $isSideBar_open = false;

  // $(".sidebar-toggler").click(function () {
  //   $isSideBar_open = !$isSideBar_open;
  //   $(".image-container").toggleClass("display-none");
  //   if (window.innerWidth > 575.98) {
  //     $(".sidebar-title").toggleClass("display-none");
  //   }
  //   $(".title.d-inline").toggleClass("display-none");
  //   $(".title.d-none").toggleClass("display-inline");
  //   $(".sidebar, .content").toggleClass("open");
  //   $(".sidebar .navbar .nav-link i").toggleClass("custom-icon");

  //   return false;
  // });

  // if (window.innerWidth <= 575.98) {
  //   $(".sidebar-title").removeClass("display-none");
  // }

  // $(".sidebar").hover(function () {
  //   if ($isSideBar_open) {
  //     $(".image-container").toggleClass("display-none");
  //     $(".sidebar-title").toggleClass("display-none");
  //     $(".title.d-inline").toggleClass("display-none");
  //     $(".title.d-none").toggleClass("display-inline");
  //     $(".sidebar, .content").toggleClass("open");
  //     $(".sidebar .navbar .nav-link i").toggleClass("custom-icon");
  //     return false;
  //   }
  // });

  $("#clients").circleProgress({
    value: 0.3,
    size: 130,
    fill: {
      color: "#499b93",
    },
    emptyFill: "#bbbbbb",
    thickness: "15",
    insertMode: "append",
  });

  $("#sales-chart").circleProgress({
    value: 0.71,
    size: 130,
    fill: {
      color: "#499b93",
    },
    emptyFill: "#bbbbbb",
    thickness: "15",
    insertMode: "append",
  });

  $("#profits").circleProgress({
    value: 0.8,
    size: 130,
    fill: {
      color: "#499b93",
    },
    emptyFill: "#bbbbbb",
    thickness: "15",
    insertMode: "append",
  });
  $("#invoices").circleProgress({
    value: 0.05,
    size: 130,
    fill: {
      color: "#499b93",
    },
    emptyFill: "#bbbbbb",
    thickness: "15",
    insertMode: "append",
  });

  // Worldwide bar-chart
  var ctx1 = $("#bar-chart");
  new Chart(ctx1, {
    type: "bar",
    data: {
      labels: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
      datasets: [
        {
          label: "USA",
          data: [10, 15, 20, 25, 30, 35, 40],
          backgroundColor: "rgba(0, 156, 255, .7)",
        },
      ],
    },
    options: {
      responsive: true,
      fullScreenButton: true,
    },
  });

  var ctx1 = $("#border-bar-chart");
  new Chart(ctx1, {
    type: "bar",
    data: {
      labels: [
        "2016",
        "2017",
        "2018",
        "2019",
        "2020",
        "2021",
        "2022",
        "2023",
        "2024",
        "2025",
        "2026",
        "2027",
        "2028",
        "2029",
      ],
      datasets: [
        {
          label: "USA",
          data: [15, 65, 30, 55, 60, 80, 95, 80, 100, 150, 55, 65, 60, 95],
          backgroundColor: ["#7367F0", "#FF9F43"],
        },
      ],
    },
    options: {
      responsive: true,
      borderRadius: 100,
    },
  });

  function generateData(value, i1, i2, step = 1) {
    for (let x = i1; x <= i2; x += step) {
      yValues.push(eval(value));
      xValues.push(x);
    }
  }
})(jQuery);

google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);










