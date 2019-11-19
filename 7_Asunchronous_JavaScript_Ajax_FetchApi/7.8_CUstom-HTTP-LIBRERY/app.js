const http = new easyHTTP;

//get posts

/* http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts){
    if(err){
        console.log(err);
    }else{
        console.log(posts);
    }
   
}); */

//Create data 
const data = {
    title: 'Custom Post',
    body: 'This is a cusom post'
};
/* http.post('https://jsonplaceholder.typicode.com/posts',data,  function(err, post){
    if(err){
        console.log(err);
    }else{
        console.log(post);
    }
}); */

//update Post
/* http.put('https://jsonplaceholder.typicode.com/posts/5',data,  function(err, post){
    if(err){
        console.log(err);
    }else{
        console.log(post);
    }
}); */

//delete 
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, posts){
    if(err){
        console.log(err);
    }else{
        console.log(posts);
    }
   
})