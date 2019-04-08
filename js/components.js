class Toast {
    constructor(text, time, ToastName) {
        this.text = text;
        this.time = time;
        this.ToastName = ToastName
    }

    show() {
        document.querySelector(this.ToastName).text = this.text;
        document.querySelector(this.ToastName).classList.add('show');
        setTimeout(() => {
            document.querySelector(this.ToastName).classList.remove('show');
        }, this.time)
    }
}
