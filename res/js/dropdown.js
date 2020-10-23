function dropdown() {
    document.getElementById("avatar-dropdown").classList.toggle("show");
}

$(function(){
    $.get("https://private-anon-2fdffe98c5-wad20postit.apiary-mock.com/users/1", function(respose){
        let profilePicture = $('<img class="avatar">').attr('src', respose.avatar).attr('onclick','dropdown()');
        let dropdown = $('<div id="avatar-dropdown" class="dropdown-content">');
        dropdown.append($("<p></p>").text(respose.firstname + " " + respose.lastname));
        dropdown.append($("<p></p>").text(respose.email));

        dropdown.append($("<a></a>").attr('href','browse.html').text("Browse"));
        dropdown.append($("<a></a>").attr('href','login.html').text("Log out"));
        $('.avatar-container').append(profilePicture);
        $('.avatar-container').append(dropdown);
    });
});