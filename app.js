
$(function() {
   

        $("select").on("change", function() {
            $('.display').empty();
            
            let $selection = $(this).val()
            $.getJSON(`https://api.nytimes.com/svc/topstories/v2/${$selection}.json?api-key=jGnr0G8J3IgQZ3kmspywu5bYkvAD26Cr`)
            
            .done(function(data) {
               
        
            let counter = 0
            $.each(data.results, function(key, value) {
            
            if (value.multimedia.length !== 0 && counter < 12) {
            counter ++;
            
            $(".display").append(`<figure><a href ="${value.url}"target="_blank"><img src="${value.multimedia[4].url} "/><p>${value.abstract}</p></a></figure>`)
            console.log(value);
       
           
            
            return counter !== 12


           

          



            
            }
    
            });
        });

    });

            
})

// ======================

// $(document).ready(function() {
//     $(".loader").hide();
//     $(".posts").on("change", function(event) {
//       $("ul").empty();
//       $(".loader").show();
//       $change = $(this).val();
//       $.getJSON(
//         https://api.nytimes.com/svc/topstories/v2/${$change}.json?api-key=YTMJtmBtB00ippV8QvL3cjmtA9aRZvIf
//       ).done(function(data) {
//         let counter = 0;
//         $.each(data.results, function(key, value) {
//           console.log(value);
//           let multimedia = value.multimedia;
//           if (multimedia.length === 0) {
//             return;
//           }
//           let description = value.abstract;
//           let articleURL = value.url;
//           $.each(multimedia, (key, value) => {
//             if (value.format === "superJumbo") {
//               let imageURL = value.url;
//               let listItem = `<li><a href = "${articleURL}" target="_blank">
//                       <img src = "${imageURL}"><p>${description}</p></a></li>`;
//               $("ul").append(listItem);
//               $("footer").css({"position":"relative", "padding-bottom": "30px"});
//               $(".loader").hide();
//             } else {
//               return;
//             }
//           });
//           counter++;
//           return counter !== 12;
//         });
//       });
//     });
//    });



