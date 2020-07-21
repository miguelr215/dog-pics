// DOG PICS


// function to get dog pic
function getDogPic(){
    let userNumber = $('#userNumber').val();
    // set default to 3
    if(userNumber == null || userNumber <= 0 || userNumber === isNaN()){
        userNumber = 3;
    }
    fetch(`https://dog.ceo/api/breeds/image/random/${userNumber}`)
        .then(response => response.json())
        .then(responseJson => console.log(responseJson));
    // clear input
    $('#userNumber').val('');
};

// watch form for submit button
function watchForm(){
    $('form').on('click', 'button', function(event){
        event.preventDefault();
        getDogPic();
    })
};

// function to run on page load
$(function() {
    console.log('App loaded, waiting for action');
    watchForm();
});