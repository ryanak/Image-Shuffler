$(document).ready(function () {
    var imgs = $(".changer li img");
    var imgpreload = [];
    var all = ["http://www.carlogos.org/logo/Ferrari-logo.png", "http://www.carlogos.org/logo/Lamborghini-logo.png", "http://www.carlogos.org/logo/Porsche-logo.png", "http://www.carlogos.org/logo/BMW-logo.png", "http://www.carlogos.org/logo/Audi-logo.png", "http://www.carlogos.org/logo/Volkswagen-logo.png", "http://www.carlogos.org/logo/Ford-logo.png", "http://www.carlogos.org/logo/Toyota-logo.png", "http://www.carlogos.org/logo/Honda-logo.png"];

    function newImages() {
        imgs[0].src = all[0];
        imgs[1].src = all[1];
        imgs[2].src = all[2];
        imgs[3].src = all[3];
        imgs[4].src = all[4];
    }
    for (var p = 0; p < all.length; p++) {
        imgpreload[p] = new Image();
        imgpreload[p].src = all[p];
    }

    function shuffle(v) {
        for (var j, x, i = v.length; i; j = parseInt(Math.random() * i, 10), x = v[--i], v[i] = v[j], v[j] = x);
        return v;
    }

    shuffle(all);
    newImages();
    imgs.fadeIn(3000);

    setInterval(function () {
        imgs.fadeOut(function () {
            shuffle(all);
            newImages();
        });
        imgs.fadeIn(3000);
    }, 5000);
});