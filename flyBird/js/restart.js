var restart = {
    button: document.createElement('button'),
    showRestart: function (parentObj) {
        this.button.style.width = '85px';
        this.button.style.height = '29px';
        this.button.style.margin = 0;
        this.button.style.padding = 0;
        this.button.style.backgroundImage = 'url(../img/start.jpg)';
        this.button.style.position = 'absolute';
        this.button.style.left = '150px';
        this.button.style.top = '350px';
        this.button.style.zIndex = '1';
        parentObj.appendChild(this.button);
    }
}