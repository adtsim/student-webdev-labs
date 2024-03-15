$(document).ready(() => {
  // API endpoint for fetching books
  const apiUrl = "https://anapioficeandfire.com/api/books";

  // Function to fetch books from the API
  const addBookToDOM = (item) => {
    console.log(item.name);

    $("#books").append(
      $("<div>")
        .css({
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "20px",
        })
        .append($("<h3>").text(item.name))
        .append($("<p>").text(item.authors[0]))
        .append($("<p>").text(item.released.substr(0, 4)))
        .append($("<p>").text("${item.numberOfPages} pages"))
    );
  };

  const fetchData = (apiUrl) => {
    $.ajax({
      type: "GET",
      url: apiUrl,
      success: (data) => {
        data.forEach((item) => {
          addBookToDOM(item);
        });
      },
      error: (error) => {
        console.error(error);
        $("#books").append($("<div>").text("Error! Please try again."));
      },
      complete: () => {
        $("#loading").remove();
      },
    });
  };

  fetchData(apiUrl);
});
