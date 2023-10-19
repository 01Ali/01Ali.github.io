
var paragraphs = document.querySelectorAll('.item1 p');

var hoverText = 'Believe you can, and you are halfway there. - Theodore Roosevelt';

paragraphs.forEach(function(paragraph) {
    paragraph.addEventListener('mouseover', function() {
        this.textContent = hoverText;
    });

    paragraph.addEventListener('mouseout', function() {
        this.textContent = '👍 '; 
    });
});



