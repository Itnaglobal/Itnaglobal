function mainImageDelete(offer_id) {
    document.querySelector(".main_image_id").value = offer_id;
}

function extraImageDelete(image_id) {
    console.log(image_id);
    document.querySelector(`.extra_image_id${image_id}`).value = image_id;
}