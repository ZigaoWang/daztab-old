var toggleSwitch = document.getElementById("toggleSwitch");
var backgroundVideo = document.getElementById("backgroundVideo");

// 默认显示图片
backgroundVideo.style.display = "none";

toggleSwitch.addEventListener("change", function() {
  if (toggleSwitch.checked) {
    // 开关打开，显示视频
    backgroundVideo.style.display = "block";
    toggleSwitch.parentNode.style.backgroundColor = "green";
  } else {
    // 开关关闭，隐藏视频
    backgroundVideo.style.display = "none";
  }
});
