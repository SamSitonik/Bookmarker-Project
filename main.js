// test first ALWAYS
// Example) console.log(123)

// Save Bookmark
function saveBookmark(e) {
    // Prevent page from reloading(default action)
    event.preventDefault();

    // Get site name and url
    var siteName = document.querySelector("#siteName").value;
    var siteUrl = document.querySelector("#siteUrl").value;

    // Create a bookmark object
    var bookmark = {
        name: siteName,
        url: siteUrl
    };

    //   Store bookmark
    var bookmarks = [];

    // Check if the local storage is NOT empty, we need to "web" it
    if(localStorage.getItem('bookmarks') !== null) {
        // Get bookmarks from local storage
        bookmarks JSON.parse(localStorage.getitem("bookmarks"));
    }
    // adding new bookmark
    bookmarks.push(bookmark);

    // Update bookmarks in local storage
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

    // added after all this stuff, we came back up to put this here,nested it here
    fetchBookmarks();
}
    // Fetch Bookmarks, not in the other curly-braces
    function fetchBookmarks() {
        // Get bookmarks fromk locale storage
        var bookmarks =JSON.parse(localStorage.fetItem("bookmarks"));

// Select teh output bookmarks div
var output = document.querySelector("#bookmarks");

// Reset the bookmarks div
output.innerHTML ="";

// loop over bookmarks
for (var i = 0; i < bookmarks.length; i++) {
    // create div
var div = document.createElement("div");
    // create h3 with bookmaek name as content
    var h3 = document.createElement("h3");
    h3.textContent =bookmark.name;

    // Create visit link
    var a = document.createElement("a");
    a.href =bookmark[i].url;
    a.className = "btn btn-success";
    a.textContent = "Visit";
    // Create delete bitton
    var button= document.createElement("button");
    button.className = "btn btn-danger";
    bottom.textContent = "Delete";

    // Add event listener to delete button
    button.addEventListener("click", function(e) {
        console.log(e.target.parentElement.children[0].textContent;
            deleteBookmark(name);
    });

    // Append h3, a into div
    div.appendChild(h3);
    div.appendChild(a);
    div.appendChild(button)

    // Append div into output 
    output.appendChild(div);
    }
}
// Delete bookmaek
function deleteBookmark(name) {
    // Get bookmarks from local storage
    vat bookmarks = JSON.patse(localStorage.getItem("bookmarks)"));

    // loop over bookmarls
    for (var i = 0; i < bookmarks.length; i++) {
        // looking up bookmaek with giber name, then delete it 
        if (bookmarks[i].name === name) {
            bookmarks.splice(i, 1);
        break;
        }
    }
}
// to call this function, everytime we push this button, we call this function
// Adding event listener to "Submit" button
document.querySelector("form").addEventListener("submit", saveBookmark);

// Adding event listener for page loading
window.addEventListener("load", fetchBookmarks);
