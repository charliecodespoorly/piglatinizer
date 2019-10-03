$( "document" ).ready(function() {
    $("#button").click(function(){
            var input = $(".input").val();
            $(".output").html("<p>"+input+"</p>")
    });

    function wordconvert(word){
        return(word.slice(1,word.length)+word.slice(0,1)+"ay");
    }

    function phraseconvert(phrase){
        words = phrase.split(" ");
        for(var i = 0; i < words.length);
    }
});