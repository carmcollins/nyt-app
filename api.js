var api = "0f1e5f1eb5e3402dadd720d3519de6bf";

$(document).ready(function () {

    $("#sButton").on("click", function () {

        var term = $("#search-input").val().trim();
        console.log(term);
        var records = $("#records-input").val().trim();
        var startYear = $("#start-year-input").val().trim();
        var endYear = $("#end-year-input").val().trim();

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
                var card = $("<div class='card m-4 p-4'>");

                var title = termResponse.response.docs[i].headline.main;
                var author = termResponse.response.docs[i].byline.original;
                var section = termResponse.response.docs[i].section_name;
                var timeStamp = termResponse.response.docs[i].pub_date;
                var site = termResponse.response.docs[i].web_url;

                card.append($("<h5>" + title + "</h5>"));
                card.append($("<h6>" + author + "</h6>"));
                card.append($("<p>" + section + "</p>"));
                card.append($("<p>" + timeStamp + "</p>"));
                card.append($("<a href='" + site + "'>" + site + "</a>"));

                $(".card-box").append(card);
            }
        });
    });

});

$("#cButton").on("click", function () {
    $("#search-input").val("");
    $("#records-input").val("");
    $("#start-year-input").val("");
    $("#end-year-input").val("");
});