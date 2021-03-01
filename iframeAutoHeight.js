var receiveMessage = function(event) {
   
    if (event.data.startsWith("AutoHeight:V")){
        let getIframe = document.getElementsByTagName('iframe');
        if (getIframe.length > 0){
            getIframe[0].height = event.data.substring("AutoHeight:V".length);
        }
    }
}
window.addEventListener("message", receiveMessage, false);