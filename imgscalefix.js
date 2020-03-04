const el = document.body.children

if (el.length === 1 && el[0] instanceof HTMLImageElement) {
    el[0].style.transform = `scale(${1 / devicePixelRatio})`
}