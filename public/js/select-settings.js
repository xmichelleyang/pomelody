// Example of how to use a GET request for data
 
// function callback(result){
//   $("#main-content").append(result['prodURL']);
// }

function verifyProdURL(){

  //$.get("/data/", callback);


  var url = (document.getElementById("prod-url").value);
  isProd = true;
  isRelax = false;
  // validation fails if the input is blank
  if(url == "") {
    alert("Error: Please enter a playlist URL!");
    return false;
  }

  // regular expression to match only alphanumeric characters and spaces
  var re = /^(http:|https:)\/\/.*$/m

  // validation fails if the input doesn't match our regular expression
  if(!re.test(url)) {
    alert("Error: Input a valid playlist URL");
    return false;
  }
  getConfirmation()
}

function verifyRelaxURL(){
  var url = (document.getElementById("relax-url").value);
  isProd = false;
  isRelax = true;
  // validation fails if the input is blank
  if(url == "") {
    alert("Error: Please enter a playlist URL!");
    return false;
  }

  // regular expression to match only alphanumeric characters and spaces
  var re = /^(http:|https:)\/\/.*$/m

  // validation fails if the input doesn't match our regular expression
  if(!re.test(url)) {
    alert("Error: Input a valid playlist URL");
    return false;
  }
  getConfirmation()
}


var myHeaders = new Headers();
myHeaders.append('acess-token', 'BQCIszHKSV4JrjkQttdVLAytD-1AFKAU1pmR4P5BJ5ncWhaL9c3kc83NU2HgTUfMn-w2DYRZJ0SxfpjpD7aMX4xe-Q0jd7TBylPPBErryDOtym7i5xP-831V19pkUzRBxmEr2QPRWI4nfohBJK5SvtvNOgi8PZm8HA');

const myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default' };

function getConfirmation() {

  if (isProd == true) {
    var url = (document.getElementById("prod-url").value);
    localStorage.setItem('prod_url', url)

    prod_url = url;
  }
  else {
    var url = (document.getElementById("relax-url").value);
    localStorage.setItem('relax_url', url)

    relax_url = url;
  }

  //url issues need to be addressed
  if (url.includes("spotify")) {
    token = url.split("playlist/")[1]
    if (token.includes("?si=")) {
      token = token.split("?si=")[0]
    }

    // const spotifyapi = "https://api.spotify.com/v1/playlists/" + token + '-H Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Bearer BQDw1LxB5bAWuZ3U3n7IpBNKqILRA4n4HcX__FI0tJ1ujznhhmihhAMY23G8DrWAUnyBcT0bldEoRTRPFsWaDHaz5IBrAWl3pd7_LHaf8r4P9TBEIp2dj8V8OVoSdmzUIA-qUnlepDCTnpJRAPhkJpxfNw3Hr61K9g'
    // console.log(spotifyapi)

    // fetch(spotifyapi, myInit).then(
    //   data=>{return data.json()}).then(res=>{console.log(res)})

    // fetch(spotifyapi)
    //   .then(function(data) {
    //     console.log(data)
    //   })
    //
    //
    // }
    // var auth_url = "https://accounts.spotify.com/authorize"
    // auth_url += "?client_id=b4c291c0effb4b64bd6b961dc52fab74"
    // auth_url += "&response_type=token"
    // auth_url += "&redirect_uri=http://example.com"
    // console.log(auth_url)
    // fetch(auth_url, {
    //   method:'POST'
    // }).then(res => res.json())
    // .then(response => console.log("Success", JSON.stringify(response)))

    // fetch (auth_url, {
    //   method: 'POST',
    //   body: 'grant_type=client_credentials',
    //   headers: {
    //     'Content-Type' : 'application/x-www-form-urlencoded',
    //     'Authorization': "Basic b4c291c0effb4b64bd6b961dc52fab74:04a8dab3dc93464fa470ddf9f5b6e435",
    //     'Access-Control-Allow-Origin': '*'
    //   },
    //   mode: 'cors'
    // })    // }).then(res => res.json())
    // .then(response => console.log("Success", JSON.stringify(response)))

  }
  if (isProd == true) {
    var retVal = confirm("Is 'My Rad Study Beats' the correct playlist?");
  }
  else {
    var retVal = confirm("Is 'My Rad Relax Beats' the correct playlist?");
  }

  if( retVal == true ) {
    return true;
  } else {
    window.location.reload();
    return false;
  }
}


const handleProdSubmit = event => {  
  // Stop the form from submitting since we’re handling that with AJAX.
  event.preventDefault();
  console.log("Insidehandle prod submit")
  
  // TODO: Call our function to get the form data.
  const data = {};
  
  // Demo only: print the form data onscreen as a formatted JSON object.
  const dataContainer = document.getElementById("productivity-form")[0];
  
  // Use `JSON.stringify()` to make the output valid, human-readable JSON.
  dataContainer.textContent = JSON.stringify(data, null, "  ");

  console.log(dataContainer)
  
  // ...this is where we’d actually do something with the form data...
};



function genJSON(){
  var prod_url = localStorage.getItem('prod_url');
  var prodName = "";
  var prod_time = localStorage.getItem('prod_time');
  var relax_url = localStorage.getItem('relax_url');
  var relaxName = "";
  var relax_time = localStorage.getItem('relax_time');
  var dict = {
    "prodURL": prod_url,
    "prodName": prodName,
    "prodTime": prod_time,
    "relaxURL": relax_url,
    "relaxName": relaxName,
    "relaxTime": relax_time,
  };

  console.log(dict);
  // var obj = JSON.parse(dict);
  // console.log(obj);
}

function updateProdTimeVal(val){
  localStorage.setItem('prod_time', val);
  prod_time = val;
}


function updateRelaxTimeVal(val){
  localStorage.setItem('relax_time', val);
  console.log(localStorage.getItem('relax_time'));
  relax_time = val;
}

// Stop form from appending onto URL
$("form").submit(function() { return false; });