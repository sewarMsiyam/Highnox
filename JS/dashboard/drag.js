dragula([
    document.getElementById("table1"),
    document.getElementById("table2"),
    document.getElementById("table3"),
    document.getElementById("table4"),
    document.getElementById("table5")
  ], {
    removeOnSpill: false
  })
  .on("drag", function (el) {
    el.className.replace("ex-moved", "");
  })
  .on("drop", function (el, target, source) {
    el.className += " ex-moved";
    alert("Item dropped into destination table: " + target.id);
  })
  .on("over", function (el, container) {
    container.className += " ex-over";
  })
  .on("out", function (el, container) {
    container.className.replace(" ex-over", "");
  });

// delete item
function emptyTrash() {
  document.getElementById("task").innerHTML = "";
}
