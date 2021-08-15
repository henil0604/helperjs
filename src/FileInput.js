const FileInputInterface = require("./interfaces/FileInput");

const FileInput = (config) => {
    config = FileInputInterface(config);
    return new Promise(resolve => {

        let input = document.createElement("input");
        input.type = "file";
        input.style.width = 0;
        input.style.height = 0;
        input.style.position = "fixed";
        input.style.top = 0;
        input.style.left = 0;

        if (config.multiple) {
            input.setAttribute("multiple", "");
        }
        if (config.directory) {
            input.setAttribute("webkitdirectory", "");
            input.setAttribute("directory", "");
            input.setAttribute("multiple", "");
        }

        if (config.accept) {
            input.setAttribute("accept", config.accept);
        }

        let timeout = null;

        input.onclick = (e) => {
            timeout = setTimeout(() => {
                resolve(input.files);
                input.remove();
            }, config.timeout || 60000)
        }

        input.onchange = (e) => {
            e.preventDefault();
            clearTimeout(timeout);
            resolve(e.target.files);
            input.remove();
        }

        document.body.appendChild(input);

        input.click();

    })
}

module.exports = FileInput;