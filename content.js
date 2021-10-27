// array of names of the elements to remove
var namesTW = [
    "twitch-block",
    "twitch-embed",
    "twitch-chat-embed",
    "twitch-live"
]; 

// Loop to remove dom element "twitch" from the page
for (let i = 0; i < namesTW.length; i++) {
    if (document.getElementById(namesTW[i]) != null) {
        var element = document.getElementById(namesTW[i]);
        element.parentNode.removeChild(element);
    };
};
