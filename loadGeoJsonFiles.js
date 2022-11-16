
const submitForm = () => {
    const urlString = $('#urlInput').val()
    let url;
    try {
        url = new URL(urlString)
        $('#urlInput').css("border", "0px solid black")
        $('#urlLabel').text("")

        const data = $.ajax({
            url: urlString,
            dataType: "json",
            success: (data, statusText) => {
                console.log("success")
                console.log(data)
                L.geoJson(data).addTo(map);
            },
            error: (error) => {
                console.log(error)
                alert(`Error: ${error.statusText}`)
            }
        })


       


    } catch (_) {
        $('#urlInput').css("border", "1px solid red")
        $('#urlLabel').text("Not a valid url")
    }
}


document.getElementById('fileInput').addEventListener('change', function() {
    const reader = new FileReader()
    reader.onload = () => {
        const res = reader.result
        const resJson = JSON.parse(res);
        L.geoJson(resJson).addTo(map)
    }   
    reader.readAsText(this.files[0])
})
