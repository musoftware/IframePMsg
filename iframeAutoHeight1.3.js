var receiveMessage = function(event) {
    if (event.data.startsWith("AutoHeight:V")){
        let getIframe = document.getElementsByClassName('dynamic_height');
        if (getIframe.length > 0){
            getIframe[0].style.height = event.data.substring("AutoHeight:V".length);
        }
    }
}
window.addEventListener("message", receiveMessage, false);