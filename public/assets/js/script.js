$(".devour-form").submit(function(event) {
    event.preventDefault();

    var burgerid = $(this).find(".burger_id").val();
    console.log(burgerid);

    $.ajax({
        type: "put",
        url: "/burgers/update/" + burgerid
    });
});