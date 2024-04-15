var posts=["2024/04/15/hello-world - 副本/","2024/04/11/hello-world/","2024/04/15/护网蓝队、红队/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };