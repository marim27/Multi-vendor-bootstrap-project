function filterOptions2(searchText2) {
    const options2 = $(".options2 li");
    let anyVisible2 = false;
    options2.each(function () {
      const optionText2 = $(this).text().trim().toLowerCase();
      if (optionText2.includes(searchText2)) {
        $(this).addClass("matching"); // Add the "matching" class to matching options
        $(this).show();
        anyVisible2 = true;
      } else {
        $(this).removeClass("matching"); // Remove the "matching" class from non-matching options
        $(this).hide();
      }
    });

    // Hide the options2 if there are no matches
    if (!anyVisible2) {
      $(".options2").hide();
    } else {
      $(".options2").show();
    }
  }

  $(document).ready(function () {
    $("#location-search2").on("input", function () {
      const searchText2 = $(this).val().trim().toLowerCase();
      filterOptions2(searchText2); // Call the filteroptions2 function correctly
      console.log(searchText2);
    });

    $(".options2 li").click(function () {
      const value2 = $(this).data("value2");
      $("#location-search2").val($(this).text().trim().toLowerCase());
      $(".options2").hide();
    });
  });
