function backToTop() {
  if (window.scrollY > 1000) {
    // console.log(window.scrollY);
    document.getElementById("back_to_top").style.display = "block";
  } else {
    document.getElementById("back_to_top").style.display = "none";
  }
}

// location

// Move the filterOptions function outside the $(document).ready() block
function filterOptions(searchText) {
  const options = $(".options li");
  let anyVisible = false;
  options.each(function () {
    const optionText = $(this).text().trim().toLowerCase();
    if (optionText.includes(searchText)) {
      $(this).addClass("matching"); // Add the "matching" class to matching options
      $(this).show();
      anyVisible = true;
    } else {
      $(this).removeClass("matching"); // Remove the "matching" class from non-matching options
      $(this).hide();
    }
  });

  // Hide the options if there are no matches
  if (!anyVisible) {
    $(".options").hide();
  } else {
    $(".options").show();
  }
}

$(document).ready(function () {
  $("#location-search").on("input", function () {
    const searchText = $(this).val().trim().toLowerCase();
    filterOptions(searchText); // Call the filterOptions function correctly
    console.log(searchText);
  });

  $(".options li").click(function () {
    const value = $(this).data("value");
    $("#location-search").val($(this).text().trim().toLowerCase());
    $(".options").hide();
  });
});


// split & nested categories arrow

// Use jQuery hover method to show/hide the arrow
$(document).ready(function () {
  $(".dropdown-item").hover(
    function () {
      $(this).find(".arrow").show();
    },
    function () {
      $(this).find(".arrow").hide();
    }
  );
});
