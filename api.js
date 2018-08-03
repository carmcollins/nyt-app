var api = "0f1e5f1eb5e3402dadd720d3519de6bf";

$(document).ready(function () {
    //when submit button is pushed
    $("#sButton").on("click", function () {

        var term = $("#search-input").val().trim();
        console.log(term);
        var records = $("#records-input").val().trim();
        var startYear = $("#start-year-input").val().trim();
        var endYear = $("#end-year-input").val().trim();

        //search term

        var urlInitial = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        var url = urlInitial += "?" + $.param({
            "api-key": "0f1e5f1eb5e3402dadd720d3519de6bf",
            "q": term,
            "begin_date": startYear,
            "end_date": endYear
        });

        $.ajax({
            url: url,
            method: 'GET',
        }).then(function (termResponse) {
            console.log(termResponse);
            for (i = 0; i < records; i++) {
                var articleLi = $("<li class='list-group-item'>");

                var title= (termResponse.response.docs[i].headline.main);
                var author= (termResponse.response.docs[i].byline.original);
                var section= (termResponse.response.docs[i].section_name);
                var timeStamp=(termResponse.response.docs[i].pub_date);
                var site= (termResponse.response.docs[i].web_url);
                
                articleLi.append($("<p>" + title + "</p>"));
                articleLi.append($("<p>" + author + "</p>"));
                articleLi.append($("<p>" + section + "</p>"));
                articleLi.append($("<p>" + timeStamp + "</p>"));
                articleLi.append($("<p>" + site + "</p>"));
                
                $(".list-group").append(articleLi);
            }
        });
    });

   

});

$("#cButton").on("click", function () {
    $("#search-input").empty();
    $("#records-input").empty();
    $("#start-year-input").empty();
    $("#end-year-input").empty();

});