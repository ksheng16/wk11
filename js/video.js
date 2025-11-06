var video = document.querySelector("#player1")

window.addEventListener("load", function() {
	console.log("Good job opening the window");
});

let volumeInitialized = false;

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()

	//set volume display the first time play is pressed
	if (!volumeInitialized){
		document.querySelector("#volume").textContent = (video.volume * 100) + "%";
		volumeInitialized = true;
	}
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
	if (video.currentTime + 10 >= video.duration){
		video.currentTime = 0;
		console.log("Going back to beginning");
	}
	else{
		video.currentTime += 10;
	}

	console.log("Current time is", video.currentTime)
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
    console.log("Volume is", this.value, "%");
    video.volume = this.value / 100;
    document.querySelector("#volume").textContent = this.value + "%";
});

document.querySelector("#vintage").addEventListener("click", function(){
    video.classList.add("oldSchool")
});

document.querySelector("#orig").addEventListener("click", function(){
    video.classList.remove("oldSchool")
});
