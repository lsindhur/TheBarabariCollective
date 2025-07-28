const form = document.getElementById("bookmark-form");
const buttons = document.querySelectorAll(".filter-btn");
let bookmarks = [];
let filterArr = [];
let currentFilter = 'All';
const bookmarksList = document.getElementById('bookmarks-list');


form.addEventListener("submit", (e) => {
    e.preventDefault()
    const title = document.getElementById("website-title").value;
    const url = document.getElementById("website-url").value;
    const category = document.getElementById("category").value;

    const bookmark = {
        id: Date.now(),
        title : title,
        url: url,
        category: category
    }

    bookmarks.push(bookmark);

    saveBookmarks()
    console.log(bookmarks);
    
    applyFilter();

    form.reset();
})

document.addEventListener("DOMContentLoaded", () => {
    loadBookmarks();
    applyFilter();
})


function renderBookmarks() {
    console.log('Render bookmarks is working')
    bookmarksList.innerHTML = '';

    if(filterArr.length === 0) {
        bookmarksList.innerHTML = `No bookmarks found`
    } else {
        filterArr.forEach((b) => {
            const bookmarkItem = document.createElement('div');
            bookmarkItem.classList.add('bookmark-item')
            bookmarkItem.innerHTML = `
            <div class="bookmark-info">
                        <h3>${b.title}</h3>
                        <a src="${b.url}" class="bookmark-link">${b.url}</a>
                        <div class="bookmark-category">${b.category}</div>
                    </div>
                    <button class='delete-btn'>Delete</button>
            `
            //console.log(bookmarkItem);

            bookmarksList.append(bookmarkItem);

            const deleteBtn = bookmarkItem.querySelector('.delete-btn');
            deleteBtn.addEventListener("click", ()=> {
                handleDelete(b.id)
            })

        })
    }
}

function handleDelete(index) {
  bookmarks =  bookmarks.filter(b => b.id !== index) ;
  saveBookmarks();
  applyFilter();
}


buttons.forEach(btn => {
    btn. addEventListener("click", () => {
        currentFilter = btn.getAttribute("data-filter");
        console.log(currentFilter);
        applyFilter();
    })
})

function applyFilter() {
    if(currentFilter === 'All') {
        filterArr = bookmarks
    } else if (currentFilter === 'Work') {
        filterArr = bookmarks.filter(b => b.category === 'Work')
    } else if(currentFilter === 'Study') {
         filterArr = bookmarks.filter(b => b.category === 'Study')
    } else {
        filterArr = bookmarks.filter(b => b.category === 'Entertainment')
    }
    renderBookmarks();
}

function saveBookmarks() {
    localStorage.setItem("bookmarksArray", JSON.stringify(bookmarks));
}

function loadBookmarks() {
   const storedBookmarks = localStorage.getItem(("bookmarksArray"));
   bookmarks = storedBookmarks? JSON.parse(storedBookmarks) : [];
}