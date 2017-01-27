import axios from 'axios';

const key = 'AIzaSyD0KxGbBLA3r2EtQD6t0eUYIEztv2zKRHs';

let API = {
    getVideos: function () {
        return new Promise(function (resolve, reject) {
            axios.get('https://www.googleapis.com/youtube/v3/videos', {
                params: {
                    part: "snippet",
                    key: key,
                    chart: "mostPopular",
                    maxResults: 12,
                    regionCode: 'UA'
                }
            }).then(function (data) {
                resolve(data.data.items);
                console.log(data.data.items)
            })
        })
    }
};

export default API;