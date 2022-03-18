var func1 = function(){
    var reference;

    for (reference in accessories) {
        var accessory = accessories[reference];
        var option= $('<p>');
        option.attr('value',reference);
        option.text(accessory.title);
        option.text('<img class="img_film" src="public/'+ reference + '.jpg" align = "right"></img>');
        var day = accessory['days']
        option.text('Showtime days:' + day);
        var weekday;

        option.text(accessory.title + " " + accessory.price.toFixed(2) + " " + "$");
        $("#films").append(option);
    }
}
$(function(){
    func1();
});
