/**Basado en 
 https://api.jquery.com/each/
 http://api.jquery.com/jquery.getjson/
 api falsa
 http://myjson.com/i1gx3
 https://api.myjson.com/bins/i1gx3

 */
const url = "https://api.myjson.com/bins/q5nfr"

const URL = 'https://api.myjson.com/bins'

// ES6 Javascript 
const apiCall = {
    getAllGenders: () => {
        return new Promise((resolve, reject) => {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                // console.log(this)
                if (this.readyState == 4 && this.status == 200) {
                   console.log( "");
                   resolve(JSON.parse(xhttp.response))
                }
            }; 
            xhttp.open("GET", URL + "/j0g6f", true);
            xhttp.send();
        });
    },

    getGenderById: (id) => {
        return new Promise((resolve, reject) => {
            var xhttp = new XMLHttpRequest();
            const URL_TO_CALL = URL + '/generos/' + id;

            xhttp.onreadystatechange = function() {
                // console.log(this)
                if (this.readyState == 4 && this.status == 200) {
                   console.log( "");
                   resolve(JSON.parse(xhttp.response))
                }
            }; 

            xhttp.open("GET", URL_TO_CALL, true);
            xhttp.send();
        })
    }
};


apiCall.getGenderById('comedia')
    .then(result => {
        console.log(result)
    }).catch(err => {
        console.log('err: '+err)
    })