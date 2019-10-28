$(function() {
   

        $("select").on("change", function() {
            let $selection = $(this).val()
            
            $.getJSON(`https://api.nytimes.com/svc/topstories/v2/${$selection}.json?api-key=jGnr0G8J3IgQZ3kmspywu5bYkvAD26Cr`)
            .done(function(data) {

        
            let counter = 0

            $.each(data.results, function(key, value) {
            console.log(value)
            if (value.multimedia.length !== 0 && counter < 12) {
            counter ++;

            $(".display").append(`<img src="${value.multimedia[4].url}"/>`)
            $(".display").append(`<p>${value.abstract}</p>`)

            return counter !== 12

            
            }
    
            });
        });

    });

            
})




