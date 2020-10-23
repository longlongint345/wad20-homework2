$(function(){
    $.get("https://private-anon-2fdffe98c5-wad20postit.apiary-mock.com/users/1", function(respose){
        let profilePicture = $('<img class="avatar">').attr('src', respose.avatar);
        let dropdown = $('<div class="dropdown-content">');
        profilePicture.click(function(){
            dropdown.toggle("fast");
        })
        dropdown.append($("<p>").css('margin-bottom', 2).text(respose.firstname + " " + respose.lastname));
        dropdown.append($("<p>").css('margin-top', 0).text(respose.email));

        dropdown.append($("<a>").attr('href','browse.html').text("Browse"));
        dropdown.append($("<a>").attr('href','login.html').text("Log out"));
        $('.avatar-container').append(profilePicture);
        $('.avatar-container').append(dropdown);
    }).fail(function(){
        alert("An error has occurred, cannot fetch profile data");
    });
});