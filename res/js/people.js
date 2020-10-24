$(function(){



  $.get("https://private-anon-44a65fdcdc-wad20postit.apiary-mock.com/profiles", function(response){
    for (person of response){
      let boxDiv = $('<div class="profile-box">')
      let accountPicture = $('<img class="avatar">').attr('src', person.avatar);
      let nameField = $('<p>').text(person.firstname + " " + person.lastname);
      let followButton = $('<button type="button" name="follow" class="follow-button">').text("Follow");

      boxDiv.append(accountPicture)
      boxDiv.append(nameField)
      boxDiv.append(followButton)


      followButton.click(function(){
          if (followButton.hasClass("followed")){
              followButton.removeClass("followed");
              followButton.text("Follow")
          }else{
              followButton.addClass("followed");
              followButton.text("Followed")
          }
        })


      $(".profiles-container").append(boxDiv)
    }

  }).fail(function(){
      alert("An error has occurred, cannot fetch post data");
  });

});
