$(document).ready(function () {
    Reference = $(".carrousel li:first-child");
    NbElement = $(".carrousel li").length;
    t;

    $(".carrousel")
        .wrap('<div class="carrousel-conteneur"></div>')
        .css("width", (Reference.width() * NbElement));
    $(".carrousel-conteneur")
        .width(Reference.width())
        .height(Reference.height())
        .css("overflow", "hidden")
        .after(''
        + '<ul class="carrousel-pagination">'
        + '	<li style="list-style-type:none" class="carrousel-prev"><a class="gauche"><img src="http://www.icône.com/images/icones/1/9/arrow07-3.png"></a></li>'
        + '	<li style="list-style-type:none" class="carrousel-next"><a class="droite"><img src="http://www.icône.com/images/icones/1/9/arrow07-1.png"></a></li>'
        + '</ul>'
        + '');

    Cpt = 0;

    var t = setInterval(function () {

        $(".carrousel").animate(test(), function () {
            $(".carrousel").animate({
                marginLeft: - (Reference.width() * Cpt)
            });

        })


    }, 3000)



    function test() {
        if (Cpt < 3) {
            Cpt++;
        }
        else {
            Cpt = 0;
        }
    };


    $(".carrousel-next a").click(function () {
        if (Cpt < 3) {
            Cpt++;
        }
        else {
            Cpt = 0;
        }
        $(".carrousel").animate({
            marginLeft: - (Reference.width() * Cpt)
        });
    });
    $(".carrousel-prev a").click(function () {
        if (Cpt > 0) {
            Cpt--;
        }
        else {
            Cpt = 3
        }
        $(".carrousel").animate({
            marginLeft: - (Reference.width() * Cpt)
        });
    });

});


