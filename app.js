$(function() {

        
  

        $("select").on("change", function() {
            let $selection = $(this).val()
            // console.log($selection)
            $.getJSON(`https://api.nytimes.com/svc/topstories/v2/${$selection}.json?api-key=jGnr0G8J3IgQZ3kmspywu5bYkvAD26Cr`)
            .done(function(data) {
                $.each(data.results, function(key, value) {
                    console.log(data.results)
                $(".display").append(`<img src="${value.multimedia[4].url}"/>`)
                $(".display").append(`<p>${value.title}</p>`)
                console.log(value.title)

                // $(".post").append(`<p>${value.icon}</p>`)
                // $(".results").append(`<p>${value.id}</p>`)
                // $(".results").append(`<p>${value.main}</p>`)
                
                
                


            });
        });

    });
   








            
})




