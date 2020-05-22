var Jimp = require('jimp');



new Jimp(1080, 1080, '#000000', (err, image1) => {
    Jimp.read("./input.jpg", (err, image2) => {
        Jimp.read("./sample-circle.png", (err, circle) => {
            Jimp.loadFont(Jimp.FONT_SANS_32_WHITE).then(font => {

                if (err) throw err;

                image1.composite(image2.resize(300, 300), 100, 100, []);

                image1.composite(circle, 400, 400).print(font, 300, 300, "bla bla bla 1");

                image1.write('output.jpg');

            });
        });
    });
});