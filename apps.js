function createParagraph(){
    var wordOne = document.getElementById('cont').value;
    var wordTwo = document.getElementById('padj').value;
    var wordThree = document.getElementById('adj1').value;
    var wordFour = document.getElementById('noun1').value;
    var wordFive = document.getElementById('noun2').value;
    var wordSix = document.getElementById('anm1').value;
    var wordSeven = document.getElementById('veg1').value;
    var wordEight = document.getElementById('veg2').value;
    var wordNine = document.getElementById('adj2').value;



    var paragraph = 'Make sure your '  + wordOne + ' is filled with nutritious ' + wordTwo + '. Do not go to the ' + wordThree +' food stand across the street from school. The hamburgers they serve are fried in ' + wordFour +' and are made of ' + wordFive +' meat. So take a sandwich of ' + wordSix +' or '+ wordSeven +" it's much healthier! Drink " + wordEight + ' milk instead of ' + wordNine + ' colas';


    document.getElementById('answer').innerHTML = paragraph
}