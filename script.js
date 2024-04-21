
$(document).ready(function () {
  showData();
  colorTime();
  // setInterval(){  .addClass()}

  setInterval(() => {
    colorTime();
  }, 60000);


  //
  function colorTime() {
    var currentTime = dayjs().hour();
    var allTextAreas = $(".description");
    console.log("allTextAreas", allTextAreas);
    $.each(allTextAreas, function (index, val) {
      var blockTime = $(this).attr("id");
      console.log(blockTime);
      if (currentTime < blockTime) {
        $(val).addClass("future");
      }
      else if (currentTime > blockTime) {
        $(val).addClass("past");
      } else {
        $(val).addClass("present");
      }

    })

  }


  //function to get data from localstorage and show it on the page
  function showData() {
    $('#hour-9 .description').val(localStorage.getItem("hour-9"));
    $('#hour-10 .description').val(localStorage.getItem("hour-10"));
    $('#hour-11 .description').val(localStorage.getItem("hour-11"));
    $('#hour-12 .description').val(localStorage.getItem("hour-12"));
    $('#hour-13 .description').val(localStorage.getItem("hour-13"));
    $('#hour-14 .description').val(localStorage.getItem("hour-14"));
    $('#hour-15.description').val(localStorage.getItem("hour-15"));
    $('#hour-16 .description').val(localStorage.getItem("hour-16"));
    $('#hour-17 .description').val(localStorage.getItem("hour-17"));

  }

  $(".saveBtn").on("click", function () {
    var save = $(this).siblings(".description").val();
    console.log("SAVE", save);
    var Timeblock = $(this).parent().attr("id")
    console.log("Timeblock", Timeblock)
    localStorage.setItem(Timeblock, save)
    showData();
  }

  );




  var currentDayEl = $("#currentDay");
  currentDayEl.text(dayjs().format('dddd, MMMM, YYYY'));


});


