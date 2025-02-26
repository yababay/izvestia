const publisher = document.getElementById('publisher')
const area = publisher && publisher.querySelector('textarea')

if(area) {
    publisher.addEventListener('show.bs.modal', () => area.value = window.getSelection().toString().trim())
}
