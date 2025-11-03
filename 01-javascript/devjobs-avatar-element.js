class DevJobsAvatar extends HTMLElement{
    constructor(){
        super(); // llamar al constructor de HTMLElement

        this.attachShadow({mode: 'open'}); // crea un shadow DOM

    }

    createUrl(service, username){
        return `https://unavatar.io/${service}/${username}`;
    }


    render(){
        const service = this.getAttribute('service') ?? "github";
        const username = this.getAttribute('username') ?? "vrsno";
        const size = this.getAttribute('size') ?? 40;

        const url = this.createUrl(service, username);

    this.shadowRoot.innerHTML = `
    <style>
    img {
    border: 10px solid red;
    width: ${size}px;
    height: ${size}px;
    border-radius: 9999px;
    }
    </style>
    <img
    src=${url}
    alt="avatar de vrsno ${username}"
    class="avatar"
    />
    `
    }
    
    connectedCallback(){
        this.render();
    }
}



customElements.define('devjobs-avatar', DevJobsAvatar);