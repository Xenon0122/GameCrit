document.addEventListener("DOMContentLoaded", function () {
    const publishBtn = document.querySelector("#publish");
    const userComment = document.querySelector(".usercomment");
    const userName = document.querySelector(".username");
    const commentsContainer = document.querySelector(".comments");
    const commentCount = document.getElementById("comment-count");

    // Enable/Disable Publish Button
    userComment.addEventListener("input", () => {
        if (userComment.value.trim() === "") {
            publishBtn.setAttribute("disabled", "disabled");
            publishBtn.classList.remove("abled");
        } else {
            publishBtn.removeAttribute("disabled");
            publishBtn.classList.add("abled");
        }
    });

    // Add Comment Function
    function addComment() {
        if (userComment.value.trim() === "") return;

        const name = userName.value.trim() || "Anonymous";
        const avatar = name === "Anonymous" ? "anonymous.png" : "user.png";
        const commentText = userComment.value.trim();
        const timestamp = new Date().toLocaleString();

        // Create Comment HTML (Fixed syntax issue)
        const commentHTML = `
            <div class="comment">
                <img src="image/pfp.png" alt="User Avatar" class="avatar" />
                <div class="comment-content">
                    <h1>${name}</h1>
                    <p>${commentText}</p>
                    <span class="date">${timestamp}</span>
                </div>    
            </div>`;

        // Append Comment
        commentsContainer.insertAdjacentHTML("beforeend", commentHTML);

        // Reset Input
        userComment.value = "";
        publishBtn.setAttribute("disabled", "disabled");
        publishBtn.classList.remove("abled");

        // Update Comment Count
        commentCount.textContent = document.querySelectorAll(".comment").length;
    }

    // Publish Comment Event
    publishBtn.addEventListener("click", addComment);
});
