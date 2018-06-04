function renderBooklist(book_selections) {
    //select the <tbody> element
    //you can make this more precise by using a descendant selector,
    //referring to a particular <table> by ID or style class name
    var tbody = document.querySelector("tbody");

    //clear any existing content in the body
    tbody.textContent = "";
    return tbody;

    //for each element in the array...
    for (var idx = 0; idx < book_selections.length; idx++) {
        //get the person record at the current index
        var new_book = book_selections[idx];

        //render that person record as a <tr> with <td>s
        //and append it to the <tbody>
        tbody.appendChild(renderBook(new_book));
       
    }
}

function renderBook(new_book) {
    //create the <tr> element
    var tr = document.createElement("tr");

    //create and append the <td> elements
    tr.appendChild(renderBookProp(new_book.title, true));
    tr.appendChild(renderBookProp(new_book.author));
    tr.appendChild(renderBookProp(new_book.genre));
    tr.appendChild(renderBookProp(new_book.grade));

    //return the table row to the caller
    return tr;
}


function renderBookProp(content, nonNumeric) {
    //create the new <td> element
    var td = document.createElement("td");

    //set its text content to the provided value
    td.textContent = content;

    //if it should be formatted as numeric...
    if (nonNumeric) {
        //add the "numeric" style class
        td.classList.add("nonnumeric");
    }

    //return the new element to the caller
    return td;
}

//var MOVIES = [...] from above

BOOKLIST.sort(function(a, b) { 
return b.title - a.title;
})
renderBook(BOOKLIST);

var Inputvariable = document.getElementById("book-filter");

Inputvariable.addEventListener("input", function() {


var genrefilter = BOOKLIST.filter(function(el) {

return el.title.toLowerCase().indexOf(Inputvariable.value.toLowerCase()) > -1;
});

renderBooklist(genrefilter);
});