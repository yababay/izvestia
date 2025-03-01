function handleKeyDown (oEvent) {
    if (oEvent.keyCode == 66 && oEvent.ctrlKey ) {
        if (oEvent.preventDefault) oEvent.preventDefault();
        if (oEvent.stopPropagation) oEvent.stopPropagation();
        location = location.toString().replace('/edit/', '/view/')
    }
    if (oEvent.keyCode == 89 && oEvent.ctrlKey ) {
        if (oEvent.preventDefault) oEvent.preventDefault();
        if (oEvent.stopPropagation) oEvent.stopPropagation();
        const origin = document.querySelector('meta[name="origin"]')?.getAttribute('content')
        if(origin) open(origin, '_blank')
    }
}

document.addEventListener('keydown', handleKeyDown)
