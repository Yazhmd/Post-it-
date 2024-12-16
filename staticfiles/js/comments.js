/* jshint esversion: 6 */
/* global bootstrap */

const editButtons = document.getElementsByClassName("btn-comment-edit");
const commentText = document.getElementById("id_body");
const commentForm = document.getElementById("commentForm");
const submitButton = document.getElementById("submitButton");
const deleteModal = new bootstrap.Modal(document.getElementById("deleteModal"));
const deleteButtons = document.getElementsByClassName("btn-comment-delete");
const deleteConfirm = document.getElementById("deleteConfirm");

/**
* Initializes edit functionality for the provided edit buttons.
* 
* For each button in the `editButtons` collection:
* - Retrieves the associated comment's ID upon click.
* - Fetches the content of the corresponding comment.
* - Populates the `commentText` input/textarea with the comment's content for editing.
* - Updates the submit button's text to "Update".
* - Sets the form's action attribute to the `edit_comment/{commentId}` endpoint.
*/
for (let button of editButtons) {
  button.addEventListener("click", (e) => {
      let commentId = e.target.getAttribute("data-comment-id");
      let commentContent = document.getElementById(`comment${commentId}`).innerText;
      commentText.value = commentContent;
      submitButton.innerText = "Update";
      commentForm.setAttribute("action", `edit_comment/${commentId}`);
      commentForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Get the Add Comment Modal
      const addCommentModal = document.getElementById("addComment");
      addCommentModal.style.display = "flex";
  });
}

/**
* Initializes deletion functionality for the provided delete buttons.
* 
* For each button in the `deleteButtons` collection:
* - Retrieves the associated comment's ID upon click.
* - Updates the `deleteConfirm` link's href to point to the 
*   deletion endpoint for the specific comment.
* - Displays a confirmation modal (`deleteModal`) to prompt 
*   the user for confirmation before deletion.
*/
for (let button of deleteButtons) {
  button.addEventListener("click", (e) => {
      let commentId = e.target.getAttribute("data-comment-id");
      deleteConfirm.href = `delete_comment/${commentId}`;
      deleteModal.show();
  });
}

// Open the Add Comment Modal
function openAddComment()
{
  // Get the Add Comment Modal
  const addCommentModal = document.getElementById("addComment");
  addCommentModal.style.display = "flex";

}
// Close the Add Comment Modal
function closeAddComment()
{
  // Get the Add Comment Modal
  const addCommentModal = document.getElementById("addComment");
  addCommentModal.style.display = "none";
}