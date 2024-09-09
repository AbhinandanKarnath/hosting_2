
function fetch_api()
{
    const url_id = 'https://api.nytimes.com/svc/books/v3/lists/2019-01-20/hardcover-fiction.json?api-key=QTd4H7HDVpLKhqIqtV42NmAthrt8ub4b'
    const url_id1 = "https://api.coursera.org/api/courses-v1"
    fetch("books.jsons")
    .then(res => res.json())
    .then(res => {
        let str = ""
        // console.log(res)
        // console.log(res.results.books[0].title)
        // console.log(res.results.books[0].book_image)
        // console.log(res.results.books[0].description)

        for(let i = 0 ;i< 15 ; i++)
        {
            str = "<img src='"+res.results.books[i].book_image+"'> <h5>"+res.results.books[i].title+"</h5>";
        }

        console.log(str)

        document.getElementById("container").innerHTML = str;
    })
}

fetch_api()