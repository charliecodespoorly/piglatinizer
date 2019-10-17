$( "document" ).ready(function() {
    $("#button").click(function(){
        var input = $(".input").val();
        alert(input);
        $(".output").html("<p>"+phraseconvert(input)+"</p>")
    });

    function wordconvert(word){
        return(word.slice(1,word.length)+word.slice(0,1)+"ay");
    }

    function phraseconvert(phrase){
        words = phrase.split(" ");
        var output = "";
        for(var i = 0; i < words.length, i++;){
            output = output + wordconvert(words[i]);
        }
        return output;
    }
});