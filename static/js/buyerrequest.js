const viewMoreBtn = document.querySelector(".post__viewMoreBtn");
const postDescriptionText = document.querySelector(".post__descriptionText");

viewMoreBtn.addEventListener("click", () => {
    viewMoreBtn.style.display = "none";
    postDescriptionText.style.all = "unset";
});