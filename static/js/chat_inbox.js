$(document).ready(function() {
  const chatForm = $("#chat__form");

  chatForm.submit(function(event) {
    event.preventDefault();

    const actionEndPoint = chatForm.attr("action");
    const method = chatForm.attr("method");
    let data = chatForm.serialize();

    console.log(actionEndPoint)
    console.log(method)
    console.log(data)

    $.ajax({
      url: actionEndPoint,
      method: method,
      data: data,
      success: function(data) {
        if (data.message_info) {
          // alert(data.success);
          alert(data.message_info);

          appendToMessage(data.message_info);
        }
      },
      error: function(errorData) {
        alert("Message not sent!");
      }
    });
  })
});

function appendToMessage(message) {
  $(".user__allChats").append(`
  <div class="user__me">
  <div class="opposite__userImg">
    <img
      src="${ message.profile_image.url }"
      alt=""
    />
  </div>
  <div class="chat__msg">
    <div class="chat__timestamp">
      <span class="fw-bold">${ message.username }</span>
      <small class="text-muted">${message.send_at}</small>
    </div>
    <p>${ message.message }</p>
  </div>
</div>
  `)
}

// Window width
// const windowWidth = window.innerWidth;

// const searchIcon = document.querySelector(".searchbar");
// const seachBoxInput = document.querySelector(".seach__boxInput");
// const userDropDown = document.querySelector(".user__dropdown");
// const leftSearchBar = document.querySelector(".left__searchBar");
// const closeSearchBar = document.querySelector(".close__searchBar");
// const userChatGroup = document.querySelector(".user__chatGroup");
// const userList = document.querySelector(".user__chatList");

// const rightTopDots = document.querySelector(".right__topDots");
// const rightAlternateOptions = document.querySelector(".right__alternateOptions");
// const closeAlternateOptions = document.querySelector(".close__alternateOption");
// const rightMainContent = document.querySelector(".right__mainContent");

// const leftSide = document.querySelector(".left__side");
// const userChatInfo = document.getElementsByClassName("user__chatInfo");
// const middleSide = document.querySelector(".middle__side");

// const goBack = document.querySelector(".go__back");

// // Search bar input show/hide section starts
// searchIcon.addEventListener("click", () => {
//   userChatGroup.style.marginTop = "0.6rem";
//   userList.style.display = "none";
//   userDropDown.style.display = "none";
//   leftSearchBar.style.display = "none";
//   seachBoxInput.style.display = "flex";
//   seachBoxInput.style.justifyContent = "space-between";
//   seachBoxInput.style.alignItems = "center";
// });

// closeSearchBar.addEventListener("click", () => {
//   userList.style.display = "inherit";
//   userDropDown.style.display = "inherit";
//   leftSearchBar.style.display = "inherit";
//   userChatGroup.style.display = "inherit";
//   seachBoxInput.style.display = "none";
//   userChatGroup.style.marginTop = "1.45rem";
// });
// // Search bar input show/hide section ends

// // Right side top section alternate options show/hide section starts
// rightTopDots.addEventListener("click", () => {
//   rightTopDots.style.display = "none";
//   rightAlternateOptions.style.display = "flex";
//   rightAlternateOptions.style.justifyContent = "space-between";
//   rightMainContent.style.marginTop = "1rem";
// });

// closeAlternateOptions.addEventListener("click", () => {
//   rightTopDots.style.display = "flex";
//   rightAlternateOptions.style.display = "none";
//   rightMainContent.style.marginTop = "1.5rem";
// });
// // Right side top section alternate options show/hide section ends

// // Open chat section starts
// if (windowWidth <= 991) {
//   for (let i = 0; i < userChatInfo.length; i++) {
//     if (
//       userChatInfo[i].addEventListener("click", () => {
//         leftSide.style.display = "none";
//         middleSide.style.display = "inherit";
//       })
//     );
//   }
// }
// // Open chat section ends

// // Go back to user all chat section starts
// goBack.addEventListener("click", () => {
//   middleSide.style.display = "none";
//   leftSide.style.display = "inherit";
// });
// Go back to user all chat section ends
