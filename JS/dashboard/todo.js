var taskDragula = dragula();
taskDragula.containers.push(document.getElementById("to-do-table"));
taskDragula.containers.push(document.getElementById("progress-table"));
taskDragula.containers.push(document.getElementById("review-table"));

// generate unique IDs
let counter = 4; // Counter to generate unique IDs
function generateUniqueId(prefix) {
  return `${prefix}-${counter++}`;
}

function toggleMenu() {
  // toggle menu
  const menuToggle = document.querySelectorAll(".menu-toggle");

  menuToggle.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      console.log("click");
      const menuNum = toggle.classList[1].split('-')[1];
      const AllMenu = document.querySelectorAll(".menu");
      AllMenu.forEach((menu) => {
        if (menu.classList[1].split('-')[1] !== menuNum) {
          menu.style.display = "none";
        }
      });
      const menuItem = document.querySelector(`.menu-${menuNum}`);
      menuItem.style.display =
        menuItem.style.display === "block" ? "none" : "block";
    });
  });
}
toggleMenu();
// delete to-do table
function deleteToDo(id) {
  document.getElementById(id).style.display = "none";
}

// add new item
function addNewTask(tableId) {
  const li = document.createElement("li");
  const table = document.getElementById(tableId);
  const inputId = `input_${new Date().getTime()}`;
  li.id = new Date().getTime().toString();
  li.innerHTML = `
    <form class="d-flex flex-column p-3 add-new-to-do">
      <input id="${inputId}" />
      <div class="mt-2">
      <a class="btn" style="color: white" onclick="submitToDo('${li.id}','${tableId}', '${inputId}')">submit</a>
      <a class="btn" style="color: white" onclick="cancelToDo('${li.id}')">cancel</a>
      </div>
    </form>
    `;
  table.appendChild(li);
}

// cancel new item
function cancelToDo(liId) {
  const li = document.getElementById(liId);
  li.remove();
}

// submit new item
function submitToDo(liId, tableId, inputId) {
  const addNewToDo = document.getElementById(liId);
  const inputValue = document.getElementById(inputId).value;
  if (inputValue !== "") {
    addNewToDo.remove();
    const newToDo = document.createElement("li");
    newToDo.innerHTML = `
    <div class="to-do-task mt-3" style="height:fit-content !important" data-bs-toggle="modal"
    data-bs-target="#dragulaModalCenter">
      <span>${inputValue}</span>
    </div>
    `;
    const toDoTable = document.querySelector(`#${tableId} .to-do-task-list`);
    newToDo.id = generateUniqueId("newToDo");
    toDoTable.appendChild(newToDo);
  }
}

// add to do table
const toDoBtn = document.querySelector(".to-do .button-add");
function addToDoTable() {
  const toDoTable = document.getElementById("to-do-wrapper");
  const toDoTableId = generateUniqueId("toDoTableId");
  const menuId = generateUniqueId("menu");
  const menuIdList = menuId.split("-");
  const toggleId = "toggle-" + menuIdList[1]
  console.log(toggleId , menuId);
  const liId = generateUniqueId("li");
  const li = document.createElement("li");
  li.className = "column ";
  li.id = liId;
  li.className += "column-todo";
  li.innerHTML = `
               <div class="d-flex justify-content-between px-3 py-3" style="background-color: ${getRandomColor()};">
                    <div class="d-flex flex-row justify-content-center text-box" style="width:100%">
                      <input class="to-do-input" value="Default Title"/>
                      <div class="dropdown ${toggleId}">
                        <a class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <img src="img/icons/three-dots-vertical.svg" />
                        </a>
                        <ul class="dropdown-menu">
                          <li class="p-3 border-bottom"><img src="img/icons/copy.svg" /> Copy Link</li>
                          <li class="p-3 " onclick="deleteToDo('${li.id}')"><i class="bi bi-trash-fill"></i> Delete</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <ul class="to-do-task-list" id='${toDoTableId}'>
                  </ul>
                  <div class="d-flex justify-content-between px-3 py-3">
                    <a id="add-to-do-item" style="color: #848484;"  onclick="addNewTask('${
                      li.id
                    }')">+ Add New Item</a>
                  </div>
  `;
  toDoTable.appendChild(li);
  taskDragula.containers.push(document.getElementById(toDoTableId));
  toggleMenu();
  //toDoDraglua(toDoTableId);
}
toDoBtn.addEventListener("click", () => {
  addToDoTable();
});
// generate random color
function getRandomColor() {
  const colors = ["#00B4C1", "#F8BB53", "#FE5C5C"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  return randomColor;
}


// delete item
function emptyTrash() {
  document.getElementsById("to-do-task").innerHTML = "";
}





// color
var colorList = [ '000000', '993300', '333300', '003300', '003366', '000066', '333399', '333333', 
'660000', 'FF6633', '666633', '336633', '336666', '0066FF', '666699', '666666', 'CC3333', 'FF9933', '99CC33', '669966', '66CCCC', '3366FF', '663366', '999999', 'CC66FF', 'FFCC33', 'FFFF66', '99FF66', '99CCCC', '66CCFF', '993366', 'CCCCCC', 'FF99CC', 'FFCC99', 'FFFF99', 'CCffCC', 'CCFFff', '99CCFF', 'CC99FF', 'FFFFFF'  ];
    var picker = $('#color-picker');

    for (var i = 0; i < colorList.length; i++ ) {
      picker.append('<li class="color-item" data-hex="' + '#' + colorList[i] + '" style="background-color:' + '#' + colorList[i] + ';"></li>');
    }

    $('body').click(function () {
      picker.fadeOut();
    });

    $('.call-picker').click(function(event) {
      event.stopPropagation();
      picker.fadeIn();
      picker.children('li').hover(function() {
        var codeHex = $(this).data('hex');

        $('.color-holder').css('background-color', codeHex);
        $('#pickcolor').val(codeHex);
      });
    });

    


  