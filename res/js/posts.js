$(function(){



    $.get("https://private-anon-e3f0ec5c7e-wad20postit.apiary-mock.com/posts", function(response){
        for (post of response){
            let authorData = post.author;
            let mediaData = post.media;

            let mainDiv = $('<div class="post">');
            let authorDiv = $('<div class="post-author">');
            let authorInfoSpan = $('<span class="post-author-info">');
            let profilePicture = $('<img alt="Post author">').attr('src', authorData.avatar);
            let authorNameField = $('<small>').text(authorData.firstname + " " + authorData.lastname);
            let date = $('<small>').text(post.createTime);

            authorInfoSpan.append(profilePicture);
            authorInfoSpan.append(authorNameField);
            authorDiv.append(authorInfoSpan);
            authorDiv.append(date);
            mainDiv.append(authorDiv);
            
            if (mediaData != null){
                let visualContentDiv = $('<div class="post-image">');
                if (mediaData.type === "image"){
                    let image = $('<img>').attr('src', mediaData.url);
                    visualContentDiv.append(image);
                }
                else if (mediaData.type === 'video'){
                    let video = $('<video controls>')
                    let source = $('<source type="video/mp4">').attr('src', mediaData.url);
                    video.append(source);
                    visualContentDiv.append(video);
                }
                mainDiv.append(visualContentDiv);
            }

            let postText = $('<div class="post-title">');
            let postTextContent = $('<h3>').text(post.text);
            postText.append(postTextContent);
            mainDiv.append(postText);

            let postActionsDiv = $('<div class="post-actions">');
            let likeButton = $('<button type="button" name="like" class="like-button">').text(post.likes);
            likeButton.click(function(){
                if (likeButton.hasClass("liked")){
                    likeButton.removeClass("liked");
                }else{
                    likeButton.addClass("liked");
                }
            });
            postActionsDiv.append(likeButton);
            mainDiv.append(postActionsDiv);

            
            $('.main-container').append(mainDiv);


        }
    }).fail(function(){
        alert("An error has occurred, cannot fetch post data");
    });

});