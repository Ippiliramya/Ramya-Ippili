// Add event listeners for borrow and return forms
document.getElementById('borrow-form').addEventListener('submit', borrowBook);
document.getElementById('return-form').addEventListener('submit', returnBook);

// Function to borrow book
function borrowBook(e) {
    e.preventDefault();
    const bookId = document.getElementById('book-id').value;
    const memberId = document.getElementById('member-id').value;

    // API call to borrow book
    fetch('/api/borrow-book', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            bookId,
            memberId
        })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
}

// Function to return book
function returnBook(e) {
    e.preventDefault();
    const bookId = document.getElementById('book-id-return').value;

    // API call to return book
    fetch('/api/return-book', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            bookId
        })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
}

// Load book list
fetch('/api/books')
.then(response => response.json())
.then(data => {
    const bookList = document.getElementById('book-list');
    data.forEach(book => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td>${book.status}</td>
        `;
        bookList.appendChild(row);
    });
})
.catch(error => console.error(error));

// Load member list
fetch('/api/members')
.then(response => response.json())
.then(data => {
    const memberList = document.getElementById('member-list');
    data.forEach(member => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${member.name}</td>
            <td>${member.email}</td>
            <td>${member.phone}</td>
        `;
        memberList.appendChild(row);
    });
})
.catch(error => console.error(error));

document.getElementById('alertbutton').addEventListener('click', function() {
    alert('welcome to Library');
});
