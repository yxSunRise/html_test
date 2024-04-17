console.log("Hello world")



function initEvent() {
    document.querySelector(".spacex-buy").addEventListener('click',function(e){
        console.log("buy now clicked")
        console.log(e.target)
    })
}

initEvent()

function msgBox(msgInfo) {
    alert(msgInfo)
}