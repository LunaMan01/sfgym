class Toast {
    constructor(text, time, ToastName, type) {
        this.text = text;
        this.time = time;
        this.ToastName = ToastName
        this.type = type;
    }

    show() {
        var content = document.createTextNode(this.text);
        document.querySelector('.alert-text').appendChild(content);
        document.querySelector('.modal-div').classList.add('fixed-top');
        if (this.type == 'success') {
            document.querySelector(this.ToastName).classList.add('alert-success');
        } else {
            document.querySelector(this.ToastName).classList.add('alert-danger');
        }
        document.querySelector(this.ToastName).classList.add('show');
        setTimeout(() => {
            document.querySelector(this.ToastName).classList.remove('show');

            document.querySelector('.alert-text').innerHTML = '';
        }, this.time);

    }
}

