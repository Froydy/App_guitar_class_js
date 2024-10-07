class Spinner{

    handleClear() {
        ROOT_SPINNER.innerHTML = ''
    }
    
    render (){
        const html = `
            <div class="spinner-container">
                <img class="spinner__img" src="components/Spinner/Dual Ring@1x-1.2s-200px-200px.svg">
            </div>
        `

        ROOT_SPINNER.innerHTML = html
    }
}

const spinnerPage = new Spinner()

