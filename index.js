document.querySelector(".converter").addEventListener("click", function () {
  const charToReplace = " ";
  let results = document.querySelector(".MsgInput");
  let input_value = results.value;
  let message = document.querySelector("#message-content");

  const result = replaceCharWithWhiteSpace(input_value, charToReplace);
  results.value = "";
  message.textContent = "";
  message.append(result);
});

function replaceCharWithWhiteSpace(inputString, charToReplace) {
  let tumblingEmoji = "\u{1F938}";

  return inputString.replace(new RegExp(charToReplace, "g"), tumblingEmoji);
}
function copyMessage() {
  // Get the text content of the message container
  const messageContent = document.getElementById("message-content").innerText;

  // Create a temporary textarea element to copy the text to the clipboard
  const tempTextarea = document.createElement("textarea");
  tempTextarea.value = messageContent;

  // Append the temporary textarea to the document
  document.body.appendChild(tempTextarea);

  // Select the text inside the textarea
  tempTextarea.select();

  // Execute the copy command to copy the selected text to the clipboard
  document.execCommand("copy");

  // Remove the temporary textarea from the document (optional)
  document.body.removeChild(tempTextarea);

  // Optionally, provide some feedback to the user
  alert("Message copied to clipboard!");
}
