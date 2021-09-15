const onFileUpload = () => {
    const file = document.querySelector(".file__uploaded").value;
    let filename = file.split("\\");
    filename = filename[filename.length - 1];
    document.querySelector("#file_val").innerText = filename;
    document.querySelector("#file_val").style.display = "block";
}