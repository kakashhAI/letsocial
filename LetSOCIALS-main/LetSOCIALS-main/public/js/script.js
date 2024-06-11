document.getElementById('link-instagram').addEventListener('click', function () {
    console.log("linkInsta");
    /* window.location.href = `https://www.facebook.com/v10.0/dialog/oauth?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&scope=user_profile,user_media&response_type=token`; */
});


document.getElementById('link-youtube').addEventListener('click', function () {
    console.log("linkYoutube");
    /* window.location.href = `https://accounts.google.com/o/oauth2/auth?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&scope=https://www.googleapis.com/auth/youtube.upload&response_type=token`; */
});


document.getElementById('link-tiktok').addEventListener('click', function () {
    console.log("linkTiktok");
    /*  window.location.href = `https://open-api.tiktok.com/platform/oauth/connect/?client_key=YOUR_CLIENT_KEY&scope=user.info.basic,video.list&response_type=code&redirect_uri=YOUR_REDIRECT_URI&state=state`; */
});


//Validation des liens...

function showStatus(message) {
    document.getElementById('status').innerText = message;
}

// Après avoir reçu et vérifié le jeton d'accès
showStatus('Your Instagram account is successfully linked.');
