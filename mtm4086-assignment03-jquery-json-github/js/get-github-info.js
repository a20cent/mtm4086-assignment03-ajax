$('#save').click(function () {
    // add loading image to div
    $('#loading').html('<img src="http://preloaders.net/preloaders/287/Filling%20broken%20ring.gif"> loading...');
    
    // run ajax request
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "https://api.github.com/users/a20cent",
        success: function (data) {
            // replace div's content with returned data
            // setTimeout added to show loading
            console.log(data);
            setTimeout(function () {
                $('#loading').html('<img src="' + data.avatar_url + '"><br>' + data.login + '<br>' + data.html_url + '<br>' + data.public_repos + '<br>' + data.created_at );
            }, 2000);
        }
    });
});