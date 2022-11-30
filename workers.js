function addRow(){
    var table = document.getElementById("table-body");
    var rowCount = table. rows. length;
    var row = table.insertRow(rowCount);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML = rowCount + 1;
    cell2.innerHTML = document.getElementById("fName").value;
    cell3.innerHTML = document.getElementById("lName").value;
    cell4.innerHTML = document.getElementById("role").value;

    document.getElementById("fName").value = "";
    document.getElementById("lName").value = "";
    document.getElementById("role").value = "";


}






