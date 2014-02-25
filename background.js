var speedIdx = 0;
var speeds = [1, 1.5, 2, 2.5, 3, 0.5];

function updateSpeed() {
  var executable = "var media = document.querySelectorAll('audio, video');";
      executable += "for(i = 0; i < media.length; i++) {";
      executable += "media[i].playbackRate = "+speeds[speedIdx]+";";
      executable += "}";

  chrome.tabs.executeScript(null, {code:executable});
  chrome.browserAction.setIcon({path:"icon" + speeds[speedIdx] + ".png"});

  speedIdx = speedIdx + 1 < speeds.length ? speedIdx + 1 : 0;
}

chrome.browserAction.onClicked.addListener(updateSpeed);
updateSpeed();