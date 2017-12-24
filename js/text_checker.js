/*global $*/
var size = 80,
    cardContent= $('.text_checker'),
    cardText = cardContent.text();
    
if(cardText.length > size){
	cardContent.text(cardText.slice(0, size) + ' ...');
}