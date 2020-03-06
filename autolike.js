// ==UserScript==
// @name         instagram auto-like
// @version      1.0
// @author       Shi0n
// @match        https://www.instagram.com/
// ==/UserScript==

(function() {
    'use strict';

    function getPosts(){
        var posts = document.getElementsByClassName("ltpMr Slqrh");
        var unliked_posts = [];

        for(let i=0; i<posts.length; i++){
            var svg = posts[i].querySelector("svg");

            if(!posts[i].hasAttribute("liked") && svg.getAttribute("fill") == "#262626"){ // #262626 == unliked post, #ed4956 == liked post
                unliked_posts.push(posts[i]);
            }
        }
        return unliked_posts;
    }

    function likePost(post){
        if(!post.hasAttribute("liked")){
            var button = post.querySelector("button");
            button.click();
            post.setAttribute("liked", true);
        }
    }
    
    function main(){
        if(document.location.pathname == "/"){
            var posts = getPosts();
            
            for(let i in posts){
                likePost(posts[i]);
            }
        }
    }

    setInterval(main, 1.5);
    
})();