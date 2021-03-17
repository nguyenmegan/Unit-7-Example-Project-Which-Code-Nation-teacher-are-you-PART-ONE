let count = 0;
$(".submit").click(function() {
    let number = Number($(".number").val());
    let hobby = $(".hobby").val().toLowerCase();
    $(".results").show();
    $(".results").append("<p>Your favorite number is " + number + " and you like " + hobby + ".</p>");
    count = count + 1;
    $(".counter").text("This quiz has been taken " + count + " time(s)");
});