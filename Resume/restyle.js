let style = [
    {name:"Blue Resume", link:"blue.css"},
    {name:"Red Resume", link:"red.css"},
    {name:"Green Resume", link:"green.css"}
    ]

window.addEventListener("load", function(){
    document.querySelector("nav").innerHTML = `<div style="font-family: sans-serif;padding-bottom: 5px;">Norse IoT Resume Workshops</div><div style="margin-bottom:.5em" id="projects"></div>`
    style.forEach(function(css) {
        if (css.link.search(".css") != -1) {
            document.querySelector("#projects").innerHTML += `<button onclick="changeStyle('${css.link}')">${css.name}</button>`

        }
        else {
            document.querySelector("#projects").innerHTML += `<a href="${css.link}"><button>${css.name}</button></a>`

        }
    })
    document.querySelector("nav").innerHTML += `<a download href="https://norse-iot.github.io/Website-Workshops/Resume/index.html"><button>Download Template</button></a><a class='css-download' download href="https://norse-iot.github.io/Website-Workshops/Resume/red.css"><button>Download CSS</button></a>`
});

function changeStyle(style) {
    document.querySelector("link").href = style
    document.querySelector(".css-download").href = `https://norse-iot.github.io/Website-Workshops/Resume/${style}`
}