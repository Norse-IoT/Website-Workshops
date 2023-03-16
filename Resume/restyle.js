let style = [
    {name:"Blue Resume", link:"blue.css"},
    {name:"Red Resume", link:"red.css"},
    {name:"Green Resume", link:"green.css"}
    ]
window.addEventListener("load", function(){
    document.querySelector("nav").innerHTML = `<div style="font-family: sans-serif;padding-bottom: 5px;">Norse IoT Resume Workshops</div><div id="projects"></div>`
    style.forEach(function(css) {
        if (css.link.search(".css") != -1) {
            document.querySelector("#projects").innerHTML += `<button onclick="changeStyle('${css.link}')">${css.name}</button>`

        }
        else {
            document.querySelector("#projects").innerHTML += `<a href="${css.link}"><button>${css.name}</button></a>`

        }
    })
});

function changeStyle(style) {
    document.querySelector("link").href = style
}