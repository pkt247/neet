let videoData = [
  { "videoNumber": 1,  "checkboxes": 1, "checked": 1 },
  { "videoNumber": 2,  "checkboxes": 1, "checked": 1 },
  { "videoNumber": 3,  "checkboxes": 1, "checked": 1 },
  { "videoNumber": 4,  "checkboxes": 1, "checked": 1 },
  { "videoNumber": 5,  "checkboxes": 1, "checked": 0 },
  { "videoNumber": 6,  "checkboxes": 1, "checked": 1 },
  { "videoNumber": 7,  "checkboxes": 1, "checked": 1 },
  { "videoNumber": 8,  "checkboxes": 1, "checked": 1 },
  { "videoNumber": 9,  "checkboxes": 1, "checked": 0 },
  { "videoNumber": 10, "checkboxes": 1, "checked": 0 },
  { "videoNumber": 11, "checkboxes": 1, "checked": 0 },
  { "videoNumber": 12, "checkboxes": 1, "checked": 0 },
  { "videoNumber": 13, "checkboxes": 1, "checked": 1 },
  { "videoNumber": 14, "checkboxes": 1, "checked": 1 },
  { "videoNumber": 15, "checkboxes": 1, "checked": 1 },
  { "videoNumber": 16, "checkboxes": 1, "checked": 0 },
  { "videoNumber": 17, "checkboxes": 1, "checked": 0 },
  { "videoNumber": 18, "checkboxes": 1, "checked": 1 },
  { "videoNumber": 19, "checkboxes": 1, "checked": 1 },
  { "videoNumber": 20, "checkboxes": 1, "checked": 1 },
  { "videoNumber": 21, "checkboxes": 1, "checked": 1 },
  { "videoNumber": 22, "checkboxes": 1, "checked": 1 },
  { "videoNumber": 23, "checkboxes": 1, "checked": 0 }
];


// Function to generate the initial video list
function generateVideoList() {
    const videoList = document.getElementById("video-list");

    videoData.forEach(video => {
        let listItem = document.createElement("li");
        listItem.id = `video-${video.videoNumber}`;
        listItem.innerHTML = `
            <label>${video.videoNumber}</label>
            <div class="checkboxes"></div>
        `;
        videoList.appendChild(listItem);

        // Add checkboxes for this video as per the videoData
        for (let i = 0; i < video.checkboxes; i++) {
            addCheckbox(video.videoNumber, i < video.checked); // Pre-check based on data
        }
    });
}

// Function to add a checkbox with pre-checked logic
function addCheckbox(videoNumber, preChecked = false) {
    const videoItem = document.getElementById(`video-${videoNumber}`).querySelector('.checkboxes');
    let newCheckbox = document.createElement("input");
    newCheckbox.type = "checkbox";
    newCheckbox.classList.add("viewed-checkbox");

    // Pre-check the checkbox if the flag is set
    if (preChecked) {
        newCheckbox.checked = true;
    }

    videoItem.appendChild(newCheckbox);
}

// Initialize the list when the page loads
window.onload = generateVideoList;
