const divAdicional = document.querySelector('#elementos-adicionales');
class Toast {
    constructor(text, time, ToastName, type, idTemplate) {
        this.text = text;
        this.time = time;
        this.ToastName = ToastName
        this.type = type;
        this.idTemplate = idTemplate;
    }

    show() {
        document.querySelector('.modal-ommission').classList.remove('d-none');
        var content = document.createTextNode(this.text);
    
        document.querySelector('.alert-text').appendChild(content);
        document.querySelector('.modal-div').classList.add('fixed-top');
        if (this.type == 'success') {
            document.querySelector(this.ToastName).classList.add('alert-success');
        } else {
            document.querySelector(this.ToastName).classList.add('alert-danger');
        }
        document.querySelector(this.ToastName).classList.add('show');
        console.log('una');
        setTimeout(() => {
            document.querySelector(this.ToastName).classList.remove('show');

            document.querySelector('.alert-text').innerHTML = '';
            document.querySelector('.modal-div').classList.remove('fixed-top');
            document.querySelector('.modal-ommission').classList.add('d-none');
        }, this.time);

    }
    
}

class Button {
    constructor(text, id) {
        this.text = text;
        this.id = id;
    }

    getButton() {
        return `
            <div class="d-flex btn-add">
            <button class="btn btn-outline-success btn-sm my-2 my-sm-0 mr-3 rounded-pill" type="button" id="${this.id}">${this.text}</button>
            </div>
        `;
    }
}

class SearchInput {
    constructor (id) {
        this.id = id;
    }

    getSearchInput() {
        return `
        <div class"d-flex" id="buscar-div">
            <input class="form-control  rounded-pill search" type="search" placeholder="Buscar" aria-label="Search" id="${this.id}">
        </div>`;
    }
}

class Tr {
    constructor(tr) {
        this.tr = tr;
    }

    getTr(){
        return this.tr;
    }
}