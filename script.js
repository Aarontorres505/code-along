function changeBackground(){
    console.log('button clicked')
    let pTag = document.getElementById('target')
    console.log(pTag)
    const red = Math.floor(Math.random()*255)
    const green = Math.floor(Math.random()*255)
    const blue = Math.floor(Math.random()*255)
    pTag.style.background = `rgb(${red}, ${green}, ${blue})`
}