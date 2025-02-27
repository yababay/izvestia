const publisher = document.getElementById('publisher')
const area = publisher && publisher.querySelector('textarea')

if(area) {
    publisher.addEventListener('show.bs.modal', () => area.value = window.getSelection().toString().trim())
}

function handleKeyDown (oEvent) {
    if (oEvent.keyCode == 80 && oEvent.ctrlKey )
    {
        if (oEvent.preventDefault) oEvent.preventDefault();
        if (oEvent.stopPropagation) oEvent.stopPropagation();
        const button = document.querySelector('[data-bs-target="#publisher"]')//alert(123)
        if(button) button.click()
    }
}

document.addEventListener('keydown', handleKeyDown)
