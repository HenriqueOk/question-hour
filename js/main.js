$(document).ready(function() {
	var songsUrls = [
		"https://www.youtube.com/watch?v=jofNR_WkoCE",
		"https://www.youtube.com/watch?v=9bZkp7q19f0",
		"https://www.youtube.com/watch?v=y6Sxv-sUYtM",
 		"https://www.youtube.com/watch?v=NdJQopRuH1E",
		"https://youtu.be/SkTt9k4Y-a8?t=2m19s",
 		"https://youtu.be/PWgvGjAhvIw?t=1m7s",
 		"https://youtu.be/otCpCn0l4Wo?t=14s",
		"https://www.youtube.com/watch?v=NdJQopRuH1E",
		"https://www.youtube.com/watch?v=-tJYN-eG1zk", //Queen - We Will Rock You
		"https://www.youtube.com/watch?v=dQw4w9WgXcQ", // You just got Ricky Rolled
		"https://www.youtube.com/watch?v=yRh-dzrI4Z4" //Pirates of the Caribbean - He's a Pirate (Argh)
	];

	var size = songsUrls.length;

	$(".js-generate-song-button").on("click", function() {
		var index = Math.floor(Math.random() * size);
		var url = songsUrls[index];
		window.open(url);
	});
});
