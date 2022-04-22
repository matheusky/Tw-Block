// array of names of the elements to remove
var namesTW = [
  "offline-embeds",
  "twitch.tv",
  "twitch-live",
  "twitch-block",
  "twitch-embed",
  "twitch-chat-embed",
  "twitch-chat-embed-container",
  "twitch-chat-embed-container-mobile",
  "twitch-player",
  "twitch-player-container",
  "twitch-player-container-mobile"
];

// wait for page to load
window.onload = function () {
  // await 5 seconds to make sure the page is loaded
  setTimeout(function () {
    // Loop to remove dom element "twitch" from the page
    for (let i = 0; i < namesTW.length; i++) {
      if (document.getElementById(namesTW[i]) != null) {
        var element = document.getElementById(namesTW[i]);
        element.parentNode.removeChild(element);
      } // end if

      if (document.querySelectorAll("." + namesTW[i]) != null) {
        var elems = document.querySelectorAll("." + namesTW[i]);
        elems.forEach(function (element) {
          element.parentNode.removeChild(element);
        });
      } // end of if

      if (document.querySelectorAll("#" + namesTW[i]) != null) {
        var elems = document.querySelectorAll("#" + namesTW[i]);
        elems.forEach(function (element) {
          element.parentNode.removeChild(element);
        });
      } // end of if

      if (document.querySelectorAll("iframe." + namesTW[i]) != null) {
        var elems = document.querySelectorAll("iframe." + namesTW[i]);
        elems.forEach(function (element) {
          element.parentNode.removeChild(element);
        });
      } // end of if

      if (
        document.querySelectorAll('iframe[src*="' + namesTW[i] + '"]') != null
      ) {
        var elems = document.querySelectorAll(
          'iframe[src*="' + namesTW[i] + '"]'
        );
        elems.forEach(function (element) {
          element.parentNode.removeChild(element);
        });
      } // end of if

      if (document.querySelectorAll('[id*="' + namesTW[i] + '"]') != null) {
        var elems = document.querySelectorAll('[id*="' + namesTW[i] + '"]');
        elems.forEach(function (element) {
          element.parentNode.removeChild(element);
        });
      } // end of if
    } // end of for loop
  }, 500); // end of setTimeout
};
