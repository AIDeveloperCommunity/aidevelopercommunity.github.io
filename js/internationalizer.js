var userLang = navigator.language || navigator.userLanguage;
var lng = userLang.split('-')[0];
$(".lng-en").slideUp();
$(".lng-fr").slideUp();
switch(lng){
	case "en":
		$(".lng-en").slideDown();
		break;
	case "fr":
		$(".lng-fr").slideDown();
		break;
	case "gr":
		$(".lng-gr").slideDown();
		break;
	default:
		$(".lng-en").slideDown();
}
