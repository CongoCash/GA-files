// https://spotify-token-finder.herokuapp.com/

$.ajax({
    type: "GET",
    url: "https://api.spotify.com/v1/search",
    data: {
        q: "query from form",
        type: "track"
    },
    headers: {
        "Authorization": "Bearer yourtoken"
    }
});