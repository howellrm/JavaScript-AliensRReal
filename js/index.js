var data = dataSet;

// EXTRACT HTML HEADER. 

var col = [];
for (var i = 0; i < data.length; i++) {
    for (var key in data[i]) {
        if (col.indexOf(key) === -1) {
            col.push(key);
        }
    }
}

// CREATE  TABLE.

var table = document.createElement("table");
table.setAttribute("class", "table  table-bordered table-condensed table-striped table-hover")
table.setAttribute("id", "myTable")


// CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

var tr = table.insertRow(-1);

for (var i = 0; i < col.length; i++) {
    var th = document.createElement("th"); // TABLE HEADER.
    th.innerHTML = col[i];
    tr.appendChild(th);
}

// ADD JSON DATA TO THE TABLE AS ROWS.

for (var i = 0; i < data.length; i++) {

    tr = table.insertRow(-1);

    for (var j = 0; j < col.length; j++) {
        var tabCell = tr.insertCell(-1);
        tabCell.innerHTML = data[i][col[j]];
    }
}

// ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.

var divContainer = document.getElementById("showData");
divContainer.innerHTML = "";
divContainer.appendChild(table);


// ------------------------------ FILTERS FOR SEARCH BUTTONS --------------------------------------------------------

function MyFilterDateTime() {
    var input, inputCity, inputState, inputCountry, inputShape, 
        filter, filterCity, fiterState, filterCountry, filterShape, 
        table, tr, td, tdCity,tdState, tdCountry, tdShape, i;

    input = document.getElementById("myInput");
    inputCity = document.getElementById("MyInputCity");
    inputState = document.getElementById("MyInputState");
    inputCountry = document.getElementById("MyInputCountry");
    inputShape = document.getElementById("MyInputShape");

    filter = input.value.toUpperCase();
    filterCity = inputCity.value.toUpperCase();
    fiterState = inputState.value.toUpperCase();
    filterCountry = inputCountry.value.toUpperCase();
    filterShape = inputShape.value.toUpperCase();

    table = document.getElementById("myTable");

    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        tdCity = tr[i].getElementsByTagName("td")[1];
        tdState = tr[i].getElementsByTagName("td")[2];
        tdCountry = tr[i].getElementsByTagName("td")[3];
        tdShape = tr[i].getElementsByTagName("td")[4];

        if (td) {
            if ((td.innerHTML.toUpperCase().indexOf(filter) > -1) && (tdCity.innerHTML.toUpperCase().indexOf(
                    filterCity) > -1) &&
                (tdState.innerHTML.toUpperCase().indexOf(fiterState) > -1) && (tdCountry.innerHTML.toUpperCase().indexOf(
                    filterCountry) > -1) && (tdShape.innerHTML.toUpperCase().indexOf(filterShape) > -1)) {

                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function MyFilterCity() {
    var input, inputCity, inputState, inputCountry, inputShape, 
    filter, filterCity, fiterState, filterCountry, filterShape,
    table, tr, td, tdCity,tdState, tdCountry, tdShape, i;

    input = document.getElementById("myInput");
    inputCity = document.getElementById("MyInputCity");
    inputState = document.getElementById("MyInputState");
    inputCountry = document.getElementById("MyInputCountry");
    inputShape = document.getElementById("MyInputShape");

    filter = input.value.toUpperCase();
    filterCity = inputCity.value.toUpperCase();
    fiterState = inputState.value.toUpperCase();
    filterCountry = inputCountry.value.toUpperCase();
    filterShape = inputShape.value.toUpperCase();

    table = document.getElementById("myTable");

    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        tdCity = tr[i].getElementsByTagName("td")[1];
        tdState = tr[i].getElementsByTagName("td")[2];
        tdCountry = tr[i].getElementsByTagName("td")[3];
        tdShape = tr[i].getElementsByTagName("td")[4];

        if (td) {
            if ((td.innerHTML.toUpperCase().indexOf(filter) > -1) && (tdCity.innerHTML.toUpperCase().indexOf(
                    filterCity) > -1) &&
                (tdState.innerHTML.toUpperCase().indexOf(fiterState) > -1) && (tdCountry.innerHTML.toUpperCase().indexOf(
                    filterCountry) > -1) && (tdShape.innerHTML.toUpperCase().indexOf(filterShape) > -1)) {

                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function MyFilterState() {
    var input, inputCity, inputState, inputCountry, inputShape, 
        filter, filterCity, fiterState, filterCountry, filterShape, 
        table, tr, td, tdCity,tdState, tdCountry, tdShape, i;

    input = document.getElementById("myInput");
    inputCity = document.getElementById("MyInputCity");
    inputState = document.getElementById("MyInputState");
    inputCountry = document.getElementById("MyInputCountry");
    inputShape = document.getElementById("MyInputShape");

    filter = input.value.toUpperCase();
    filterCity = inputCity.value.toUpperCase();
    fiterState = inputState.value.toUpperCase();
    filterCountry = inputCountry.value.toUpperCase();
    filterShape = inputShape.value.toUpperCase();

    table = document.getElementById("myTable");

    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        tdCity = tr[i].getElementsByTagName("td")[1];
        tdState = tr[i].getElementsByTagName("td")[2];   
        tdCountry = tr[i].getElementsByTagName("td")[3];
        tdShape = tr[i].getElementsByTagName("td")[4];

        if (td) {
            if ((td.innerHTML.toUpperCase().indexOf(filter) > -1) && (tdCity.innerHTML.toUpperCase().indexOf(
                    filterCity) > -1) &&
                (tdState.innerHTML.toUpperCase().indexOf(fiterState) > -1) && (tdCountry.innerHTML.toUpperCase().indexOf(
                    filterCountry) > -1) && (tdShape.innerHTML.toUpperCase().indexOf(filterShape) > -1)) {

                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function MyFilterCountry() {
    var input, inputCity, inputState, inputCountry, inputShape, 
        filter, filterCity, fiterState, filterCountry, filterShape,
        table, tr, td, tdCity,tdState, tdCountry, tdShape, i;

    input = document.getElementById("myInput");
    inputCity = document.getElementById("MyInputCity");
    inputState = document.getElementById("MyInputState");
    inputCountry = document.getElementById("MyInputCountry");
    inputShape = document.getElementById("MyInputShape");

    filter = input.value.toUpperCase();
    filterCity = inputCity.value.toUpperCase();
    fiterState = inputState.value.toUpperCase();
    filterCountry = inputCountry.value.toUpperCase();
    filterShape = inputShape.value.toUpperCase();

    table = document.getElementById("myTable");

    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        tdCity = tr[i].getElementsByTagName("td")[1];
        tdState = tr[i].getElementsByTagName("td")[2];
        tdCountry = tr[i].getElementsByTagName("td")[3];
        tdShape = tr[i].getElementsByTagName("td")[4];

        if (td) {
            if ((td.innerHTML.toUpperCase().indexOf(filter) > -1) && (tdCity.innerHTML.toUpperCase().indexOf(
                    filterCity) > -1) &&
                (tdState.innerHTML.toUpperCase().indexOf(fiterState) > -1) && (tdCountry.innerHTML.toUpperCase().indexOf(
                    filterCountry) > -1) && (tdShape.innerHTML.toUpperCase().indexOf(filterShape) > -1)) {

                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}



function MyFilterShape() {
    var input, inputCity, inputState, inputCountry, inputShape, 
        filter, filterCity, fiterState, filterCountry, filterShape, 
        table, tr, td, tdCity,tdState, tdCountry, tdShape, i;

    input = document.getElementById("myInput");
    inputCity = document.getElementById("MyInputCity");
    inputState = document.getElementById("MyInputState");
    inputCountry = document.getElementById("MyInputCountry");
    inputShape = document.getElementById("MyInputShape");

    filter = input.value.toUpperCase();
    filterCity = inputCity.value.toUpperCase();
    fiterState = inputState.value.toUpperCase();
    filterCountry = inputCountry.value.toUpperCase();
    filterShape = inputShape.value.toUpperCase();

    table = document.getElementById("myTable");

    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        tdCity = tr[i].getElementsByTagName("td")[1];
        tdState = tr[i].getElementsByTagName("td")[2];
        tdCountry = tr[i].getElementsByTagName("td")[3];
        tdShape = tr[i].getElementsByTagName("td")[4];

        if (td) {
            if ((td.innerHTML.toUpperCase().indexOf(filter) > -1) && (tdCity.innerHTML.toUpperCase().indexOf(
                    filterCity) > -1) &&
                (tdState.innerHTML.toUpperCase().indexOf(fiterState) > -1) && (tdCountry.innerHTML.toUpperCase().indexOf(
                    filterCountry) > -1) && (tdShape.innerHTML.toUpperCase().indexOf(filterShape) > -1)) {

                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

