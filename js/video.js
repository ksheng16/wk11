var video = document.querySelector("#player1")

window.addEventListener("load", function() {
	console.log("Good job opening the window")
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("In slower")
	console.log("Current speed is", video.playbackRate)
	video.playbackRate *= 0.9;

	console.log("New speed is", video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("In faster")
	console.log("Current speed is", video.playbackRate)
	video.playbackRate *= 1.1;

	console.log("New speed is", video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("In skip")
	console.log("The duration is", video.duration)
	console.log("Current location is" , video.currentTime)

	video.currentTime += 15

	console.log("New location is", video.currentTime)
});

let muteButton = document.querySelector("#mute");
document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted) {
        video.muted = false;
		muteButton.textContent = "Mute"
        console.log("Unmuted");
    } else {
        video.muted = true;
		muteButton.textContent = "Unmute"
        console.log("Muted");
    }
});

document.querySelector("#slider").addEventListener("input", function() {
    let volume = this.value / 100;
	video.volume = volume;
	document.querySelector("#volume").textContent = (volume * 100 ) + "%"; 
});

document.querySelector("#vintage").addEventListener("click", function(){
    video.classList.add("oldSchool")
});

document.querySelector("#orig").addEventListener("click", function(){
    video.classList.remove("oldSchool")
});
