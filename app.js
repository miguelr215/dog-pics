// DOG PICS



// function to display results
function displayResults(responseJson, numberPics){
    if(numberPics > responseJson.message.length){
        numberPics = responseJson.message.length;
    }
    console.log(responseJson);
    // create variable that will hold final image string
    let finalString = "";
    // loop through each message and set message to image src
    for(let i = 0; i < numberPics; i++){
        finalString = finalString.concat(" ", '<img src="'+ responseJson.message[i] +'" class="dogPic" alt="placeholder"></img>');
    }
    // show final string in html
    $('.picBox').removeClass('hidden');
    $('.picBoxHeader').removeClass('hidden');
    $('.picBox').html(finalString);
};

// function to get dog pic
function getDogPic(){
    let userNumber = $('#userNumber').val();
    // set default to 3
    if(userNumber == null || userNumber <= 0 || userNumber === isNaN()){
        userNumber = 3;
    }
    fetch(`https://dog.ceo/api/breeds/image/random/${userNumber}`)
        .then(response => response.json())
        .then(responseJson => displayResults(responseJson, userNumber))
        .catch(error => alert('Something went wrong, try again'));
    // clear input
    $('#userNumber').val('');
};

// watch form for submit button
function watchForm(){
    $('form').on('click', '#submitBtn', function(event){
        event.preventDefault();
        getDogPic();
    })
};

// function to run on page load
$(function() {
    console.log('App loaded, waiting for action');
    watchForm();
});