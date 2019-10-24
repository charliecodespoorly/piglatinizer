$( "document" ).ready(function() {
    $("#button").click(function(){
        var input = $(".input").val();
        // alert(phraseconvert(input));
        $(".output").text(phraseconvert(input))
    });

    function wordconvert(word){
        // alert("eagle".match("/$[aeiou]+/g"));
        if(word.match(/^[aeiou]+/)){
          return(word+"ay")
        }

        else{
          return(word.match(/^[^aeiou]+/)+"ay ");
        }
    }

    function phraseconvert(phrase){
        words = phrase.split(" ");
        var output = "";
        for(var i = 0; i < words.length; i++){
            output = output + wordconvert(words[i]);
        }
        return output.toLowerCase();
    }
});