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
  li.className = "column";
  li.id = liId;
  li.style = `background-color: #F2F2F2; width:350px !important;height: fit-content ;border-radius: 15px !important;overflow: hidden;`;
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
const colorPicker = document.getElementById('colorPicker');
const colorNameInput = document.getElementById('colorName');
const colorMap = new Map([
['red', '#FF0000'],
['green', '#00FF00'],
['blue', '#0000FF'],
['yellow', '#FFFF00'],
['orange', '#FFA500'],
['purple', '#800080'],
['pink', '#FFC0CB'],
['brown', '#A52A2A'],
['gray', '#808080'],
['black', '#000000'],
['white', '#FFFFFF'],
]);

colorPicker.addEventListener('input', (event) => {
  const selectedColor = event.target.value;
  colorNameInput.value = selectedColor;
  colorNameInput.style.backgroundColor = selectedColor;
});
colorNameInput.addEventListener('input', (event) => {
  const colorName = event.target.value.toLowerCase();
  if (colorMap.has(colorName)) {
    const colorValue = colorMap.get(colorName);
    colorPicker.value = colorValue;
    colorNameInput.style.backgroundColor = colorValue;
  }
});
