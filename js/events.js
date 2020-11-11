//define functions here
function getIt() {
	$('p').on('click', () => {
		alert('hey!');
	})
}

function frameIt() {
  $(window).on('load', function() {
    $('img').addClass('tasty')
  })
}

function submitIt() {
  $(window).on('submit', function() {
    alert("Your form is going to be submitted now.")
  })
}

function pressIt() {
  $('input').on('keydown', function(key) {
    if(key.which == 71){
			alert('GGGG was pressed');
		}
  })
}



$(document).ready(function(){

	getIt()
	frameIt()
	submitIt()
	pressIt()
// call functions here

});
