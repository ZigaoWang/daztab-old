var toggleSwitch = document.getElementById("toggleSwitch");
var backgroundVideo = document.getElementById("backgroundVideo");

// 检查localStorage中是否存在用户的选择
var userChoice = localStorage.getItem("userChoice");
if (userChoice === "video") {
  // 用户选择了视频
  toggleSwitch.checked = true;
  backgroundVideo.style.display = "block";
  toggleSwitch.parentNode.style.backgroundColor = "green";
  loadVideo();
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
    loadVideo();
  } else {
    // 用户选择了图片
    backgroundVideo.style.display = "none";
    // 清除用户的选择
    localStorage.removeItem("userChoice");
  }
});

function loadVideo() {
  // 检查localStorage中是否已经缓存了视频
  var videoCached = localStorage.getItem("videoCached");
  if (videoCached === "true") {
    // 从缓存加载视频
    backgroundVideo.play();
  } else {
    // 首次加载视频，进行缓存
    backgroundVideo.addEventListener("canplaythrough", function() {
      // 视频加载完成后显示并播放
      backgroundVideo.style.display = "block";
      backgroundVideo.play();
      // 标记视频已缓存
      localStorage.setItem("videoCached", "true");
    });
  }
}

window.addEventListener("DOMContentLoaded", function() {
  loadVideo();
});

var toggleSwitch = document.getElementById("toggleSwitch");

toggleSwitch.addEventListener("change", function() {
  if (toggleSwitch.checked) {
    localStorage.setItem("videoEnabled", "true");
  } else {
    localStorage.setItem("videoEnabled", "false");
  }
});
