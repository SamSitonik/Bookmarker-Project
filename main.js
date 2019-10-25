// test first ALWAYS to check if the JS and HTML are linked together, by opening the 'Developer Tools' in the console, example) console.log(123); annnd "save"

// Two things are happening when type in the input boxes and click submit 1)Find a place to store the 'name' and 'Url' 2) then render it out. 
// Save Bookmark
function saveBookmark(e) {
    // Prevent page from reloading(default action):
    e.preventDefault();

    // Step 1: Get site name and url(using DOM and querySelector)
    var siteName = document.querySelector("#siteName").value;
    var siteUrl = document.querySelector("#siteUrl").value;

    // Create a bookmark object    // TEST- console.log(bookmark)
    var bookmark = {
        name: siteName,
        url: siteUrl
    };

    //   Store bookmark(In the console), Instead of storing the bookmarks one by one, we are going to create an array
    var bookmarks = [];

    // Check if the local storage is empty, 
    if (localStorage.getItem("bookmarks") !== null) { 
        
    }
 
    // Check if the local storage is NOT empty, we need to "web" it

    // if (localStorage.getItem("bookmarks") !== null) {

    // Get bookmarks from local storage, 
    // If NOT empty, GRAB them 
    //   bookmarks = localStorage.getItem("bookmarks"); This WON'T WORK because the local storage only allows us to store a sting in it, and we are working with an array here. That's why we had to add "JSON.parse" at the front, see below, to surround my local storage.

        // bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    
    // adding new bookmark
    bookmarks.push(bookmark);

    // Update bookmarks in local storage
    // 'setItem' add to item to it, needs 2 things 1)key 2)value
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    // END, Step 1) The whole process to store the item, to change it back to string and store it in local storage. 

    // re-fetch bookmarks output
    // fetchBookmarks();
}

    // Adding event listener to "Submit" button. This got pushed down from step 1, when they save the form, they want to call the function "saveBookmark"-Shiyu- TEST HERE by console.log out
document.querySelector("form").addEventListener("submit", saveBookmark);
//     .................line 42- 108

//     // added after all this stuff, we came back up to put this here,nested it here
//     fetchBookmarks();

//     // empty the inputs
//     document.querySelector("form").reset();
// }
//     // Fetch Bookmarks (not in the other curly-braces)
//     function fetchBookmarks() {
//         // Get bookmarks from local storage
//         var bookmarks =JSON.parse(localStorage.getItem("bookmarks"));

// // Select the output bookmarks div
// var output = document.querySelector("#bookmarks");

// // Reset the bookmarks div
// output.innerHTML = "";

// // Loop over bookmarks
// for (var i = 0; i < bookmarks.length; i++) {
//     // Create div
//     var div = document.createElement("div");
//     // Create h3 with bookmark name as content
//     var h3 = document.createElement("h3");
//     h3.textContent = bookmarks[i].name;

//     // Create visit link
//     var a = document.createElement("a");
//     a.href =bookmarks[i].url;
//     a.className = "btn btn-success";
//     a.textContent = "Visit";

//     // Create delete button
//     var button= document.createElement("button");
//     button.className = "btn btn-danger";
//     bottom.textContent = "Delete";

//     // Add event listener to delete button
//     button.addEventListener("click", function(e) {
//         var name= e.target.parentElement.children[0].textContent;
//             deleteBookmark(name);
//     });

//     // Append h3, 'a' button, into div
//     div.appendChild(h3);
//     div.appendChild(a);
//     div.appendChild(button)

//     // Append div into output 
//     output.appendChild(div);
//     }
// }
// // Delete bookmark
// function deleteBookmark(name) {
//     // Get bookmarks from local storage
//     var bookmarks = JSON.parse(localStorage.getItem("bookmarks)"));

//     // loop over bookmarks
//     for (var i = 0; i < bookmarks.length; i++) {
//         // looking up bookmark with giver name, then delete it 
//         if (bookmarks[i].name === name) {
//             bookmarks.splice(i, 1);
//         break;
//         }
//     }
// // Update localStorage
// localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

// // re-fetch bookmarks output
// fetchBookmarks();
// }

// // Adding event listener to submit button
// document.querySelector("form").addEventListener("submit", saveBookmark);

// // Adding event listener for page loading
// window.addEventListener("load", fetchBookmarks); 

