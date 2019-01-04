// audio
var x = document.getElementById("myAudio"); 

function playAudio() { 
    x.play(); 
}

// copy to clipboard
function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
  }

//   show copied
$(document).ready(function(){
    $(".col-md-3").click(function(){
        $(".showCopy").fadeIn().fadeOut(1000);
    });
    
});