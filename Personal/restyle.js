let style = [
    {name:"Blue Personal Site", link:"blue.css"},
    {name:"Red Personal Site", link:"red.css"},
    {name:"Green Personal Site", link:"green.css"}
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
    document.querySelector("nav").innerHTML += `<button onclick='download()'>Download Template</button><a href="../"><button>Back to Templates</button></a>`
});

function changeStyle(style) {
    document.querySelector("link").href = style
    css = style;
}

let html;
let css = "red.css";
async function download() {
    let connection = await fetch("https://norse-iot.github.io/Website-Workshops/Personal/");
    html = await connection.text();
    let styleBegin = html.slice(0, html.search("<!--STYLE SWITCHER BEGIN-->"))
    let styleEnd = html.slice(html.search("<!--STYLE SWITCHER END-->")+26)
    html = styleBegin+styleEnd
    let linkBegin = html.slice(0,html.search("<link"))
    let linkEnd = html.slice(html.search(".css\">")+6)
    let link = (html.slice(linkBegin, linkEnd))
    
    connection = await fetch(`https://norse-iot.github.io/Website-Workshops/Personal/${css}`);
    let downloadCSS = await connection.text();
    html = `${linkBegin}<style>${downloadCSS}</style>${linkEnd}`


    let textFileAsBlob = new Blob([html], { type: "text" });
    let downloadLink = document.createElement('a');
    downloadLink.download = "index.html";
    downloadLink.innerHTML = 'Download File';

    if (window.webkitURL != null) {
        downloadLink.href = window.webkitURL.createObjectURL(
            textFileAsBlob
        );
    } else {
        downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
        downloadLink.onclick = destroyClickedElement;
        downloadLink.style.display = 'none';
        document.body.appendChild(downloadLink);
    }

    downloadLink.click();
} 
