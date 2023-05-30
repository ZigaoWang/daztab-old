var toggleSwitch = document.getElementById("toggleSwitch");
var backgroundVideo = document.getElementById("backgroundVideo");

// 检查localStorage中是否存在用户的选择
var userChoice = localStorage.getItem("userChoice");
if (userChoice === "video") {
  // 用户选择了视频
  toggleSwitch.checked = true;
  backgroundVideo.style.display = "block";
  toggleSwitch.parentNode.style.backgroundColor = "green";
} else {
  // 用户选择了图片（默认）
  toggleSwitch.checked = false;
  backgroundVideo.style.display = "none";
}

toggleSwitch.addEventListener("change", function() {
  if (toggleSwitch.checked) {
    // 用户选择了视频
    backgroundVideo.style.display = "block";
    toggleSwitch.parentNode.style.backgroundColor = "green";
    // 存储用户的选择
    localStorage.setItem("userChoice", "video");
  } else {
    // 用户选择了图片
    backgroundVideo.style.display = "none";
    // 清除用户的选择
    localStorage.removeItem("userChoice");
  }
});
