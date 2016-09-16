export class MoviesService{
    constructor($http, $log, apiURL){
        this.$http = $http;
        this.$log = $log;
        this.apiURL = apiURL;
    }

    searchMoviesInCollection(searchTerm){
        return this.$http.get(`${this.apiURL}collection?title=${searchTerm}`)
                        .then(
            (response) => {
                return response.data;
            }
        );
    }

    searchMovies(searchTerm){
        return this.$http.get(`${this.apiURL}online?title=${searchTerm}`)
                        .then(
            (response) => {
                return response.data;
            }
        );
    }

    getMovie(id){
        return this.$http.get(`${this.apiURL}${id}`).then(
            (response) => {
                return response.data;
        });
    }

    getMovies(){
        return this.$http.get(`${this.apiURL}`).then(
            (response) => {
                return response.data;
            });
    }

    add(movie){
        this.$log.debug("Adding movie!");
        this.$http.post(`${this.apiURL}`,
            {
                "imdbId" : movie.imdbId
            }
        );
    }
}
