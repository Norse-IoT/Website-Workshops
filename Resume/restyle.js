let style = [
    {name:"Blue", link:"blue.css"},
    {name:"Red", link:"red.css"}
    ]
    
window.addEventListener("load", function(){
    document.querySelector("nav").innerHTML = `<div>Norse IoT Resume Workshops</div><div id="projects"></div>`
    style.forEach(function(css) {
        document.querySelector("#projects").innerHTML += `<button onclick="changeStyle('${css.link}')">${css.name}</button>`
    })
});

function changeStyle(style) {
    document.querySelector("link").href = style
}