function openChat() {
    Kommunicate.displayKommunicateWidget(true);
    Kommunicate.launchConversation();
}

(function(d, m) {
    var kommunicateSettings = {
        "appId": "40e56285f4f5070cb5946553b900e5b7",
        "popupWidget": true,
        "automaticChatOpenOnNavigation": true,

        //The following settings will disable the widget on page load
        "onInit": function()
        {
            Kommunicate.displayKommunicateWidget(true);
            document.getElementById("button").disabled=true;
        }
    };
    var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
    s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
    var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
    window.kommunicate = m; m._globals = kommunicateSettings;
})(document, window.kommunicate || {});
/* NOTE : Use web server to view HTML files as real-time update will not work if you directly open the HTML file in the browser. */
