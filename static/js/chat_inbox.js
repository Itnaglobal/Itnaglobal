$(document).ready(function () {
  const userAllChats = document.querySelector(".user__allChats");
  userAllChats.scrollTop = userAllChats.scrollHeight;
  const myId = document.getElementById("my_id").value;
  const chatLength = document.querySelector(".chat__length");
  const myUser = document.getElementById("my_user");
  let sender = "";

//   reload_chat = () => {
//     $.ajax({
//       url: `/betaversion/chat/chatroom/${myId}/`,
//       success: function() {
//         document.querySelector(".alert__chatReload").classList.add("active__reloadChat");

//         document.querySelector("#tap__reload").addEventListener('click', () => {
//           window.location.reload();
//         });
//       }
//     });
//   }

//   setTimeout(function() {
//     reload_chat();
//   }, 25000);

  reload_chat = () => {
    $.ajax({
      url: `/betaversion/api/messages/`,
      success: function(data) {
        let chatList = [];
        let chat_id = null;
        let mysender = "";
        
        console.log(sender);
        
        for (let i=0; i<data.length; i++) {
            // console.log(data[i]);
            // console.log(data[i].chatroom.id);
            if (data[i].chatroom.id === parseInt(myId)) {
                chatList.push(data[i]);
                // sender = data[i].sender.username;
                chat_id = myId;
            }
        }
        
        // if (chatList.length > 0) {
        //     // console.log(chatList);
        //     mysender = chatList[chatList.length - 1].sender.username;
        // }
        console.log("sender:", mysender);
        
        if (chatLength.value === undefined || chatLength.value === null || chatLength.value === "") {
            chatLength.value = chatList.length;
        }
        
        // console.log(chatLength.value, chatList.length);
        
        if (mysender !== undefined || mysender !== "" || chatLength.value !== undefined || chatLength.value !== null) {
            console.log("I AM HERE!");
            if (chatLength.value > 0 && chatLength.value !== chatList.length && myId === chat_id) {
                if (mysender !== "" && myUser !== mysender) {
                    mysender = "";
                    document.querySelector(".alert__chatReload").classList.add("active__reloadChat");
                    document.querySelector("#tap__reload").addEventListener('click', () => {
                      window.location.reload();
                    });
                }
            }
        }
        console.log(chatList.length);
      }
    });
  }

  setInterval(function() {
    reload_chat();
  }, 5000);

  goBack = document.querySelector(".go__back");

  goBack.addEventListener('click', () => {
    window.location.href = "/betaversion/inbox";
  });

  const chatForm = $("#chat__form");

  chatForm.submit(function (event) {
    event.preventDefault();

    const actionEndPoint = chatForm.attr("action");
    const method = chatForm.attr("method");
    let data = chatForm.serialize();

    $.ajax({
      url: actionEndPoint,
      method: method,
      data: data,
      success: function (data) {
        if (data.message_info) {
          // alert(data.message_info);

          appendToMessage(data.message_info);
          $("#chat__form")[0].reset();
        }
      },
      error: function (errorData) {
        alert("Message not sent!");
      },
    });
  });
});

function appendToMessage(message) {
    // console.log(message.username);
    sender = message.username;
  $(".user__allChats").append(`
  <div class="user__me" id="message_${message.id}">
  <div class="opposite__userImg">
    <img
      src="/media/${message.profile_image}"
      alt=""
    />
  </div>
  <div class="chat__msg">
    <div class="chat__timestamp">
      <span class="fw-bold">${message.username}</span>
      <small class="text-muted">${message.send_at}</small>
    </div>
    <p>${message.message}</p>
  </div>
</div>
  `);

  userAllChats = document.querySelector(".user__allChats");
  userAllChats.scrollTop = userAllChats.scrollHeight;
}

// Window width
// const windowWidth = window.innerWidth;

const searchIcon = document.querySelector(".searchbar");
const seachBoxInput = document.querySelector(".seach__boxInput");
const userDropDown = document.querySelector(".user__dropdown");
const leftSearchBar = document.querySelector(".left__searchBar");
const closeSearchBar = document.querySelector(".close__searchBar");
const userChatGroup = document.querySelector(".user__chatGroup");
// const userList = document.querySelector(".user__chatList");

const rightTopDots = document.querySelector(".right__topDots");
const rightAlternateOptions = document.querySelector(".right__alternateOptions");
const closeAlternateOptions = document.querySelector(".close__alternateOption");
// const rightMainContent = document.querySelector(".right__mainContent");

// const leftSide = document.querySelector(".left__side");
// const userChatInfo = document.getElementsByClassName("user__chatInfo");
// const middleSide = document.querySelector(".middle__side");

// const goBack = document.querySelector(".go__back");

// // Search bar input show/hide section starts
searchIcon.addEventListener("click", () => {
  userChatGroup.style.marginTop = "0.6rem";
  // userList.style.display = "none";
  userDropDown.style.display = "none";
  leftSearchBar.style.display = "none";
  seachBoxInput.style.display = "flex";
  seachBoxInput.style.justifyContent = "space-between";
  seachBoxInput.style.alignItems = "center";
});

closeSearchBar.addEventListener("click", () => {
  // userList.style.display = "inherit";
  userChatGroup.style.display = "inherit";
  userDropDown.style.display = "inherit";
  leftSearchBar.style.display = "inherit";
  seachBoxInput.style.display = "none";
  userChatGroup.style.marginTop = "1.45rem";
});
// // Search bar input show/hide section ends

// // Right side top section alternate options show/hide section starts
// rightTopDots.addEventListener("click", () => {
//   rightTopDots.style.display = "none";
//   rightAlternateOptions.style.display = "flex";
//   rightAlternateOptions.style.justifyContent = "space-between";
// });

// closeAlternateOptions.addEventListener("click", () => {
//   rightMainContent.style.marginTop = "1.5rem";
//   rightTopDots.style.display = "flex";
//   rightAlternateOptions.style.display = "none";
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
