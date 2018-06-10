var movies = [
    {
        title: "Secreto de sus ojos",
        rating: 5,
        hasWatched: true
    },
    {
        title: "Avengers Infinity war",
        rating: 5,
        hasWatched: true
    },
    {
        title: "Deadpool 2",
        rating: 4,
        hasWatched: false
    },
    {
        title: "Wakolda",
        rating: 2,
        hasWatched: true
    }
];

movies.forEach(function(movie){
    var watched;
    if (movie.hasWatched) {
        watched = "have watched";
    } else{
        watched = "have not seen";
    }
    console.log("You "+watched+' "'+movie.title+'" - '+movie.rating+" stars");
});