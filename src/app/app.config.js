export function appConfig($routeProvider, $locationProvider){
    console.log("Applying config.");

    $locationProvider.html5Mode(true);
    /*$routeProvider.when("/", {

    });*/

    $routeProvider.when("/movies/", {
        template : "<movies-list></movies-list>"
    });

    $routeProvider.when("/movies/add", {
        template : "<movies-add></movies-add>"
    });

    $routeProvider.when("/movies/search", {
        template : "<movies-search></movies-search>"
    });


    $routeProvider.when("/movies/:id", {
        template : "<movie-details></movie-details>"
    });

    $routeProvider.otherwise({
        template : "<movie-not-found-error></movie-not-found-error>"
    });
}
