for (let i = 0; i < 2; i++) {
  document.querySelectorAll(".menu")[i].addEventListener("click", function () {
    document.querySelector(".sidebar").classList.toggle("d-none");
    document.querySelector(".mini-sidebar").classList.toggle("d-none");
    document.querySelector(".sidebar").classList.toggle("tranlate");
    document.querySelector(".overlay").classList.toggle("d-none");
  });
}

// https://www.googleapis.com/youtube/v3/videos?key=AIzaSyDSVlWwlx73jqziDlRMu1eHIGv7zrMsly0&part=snippet&chart=mostPopular&maxResults=1&regionCode=IN

console.log("https://www.googleapis.com/youtube/v3/videos?key=AIzaSyDSVlWwlx73jqziDlRMu1eHIGv7zrMsly0&part=snippet&chart=mostPopular&maxResults=1&regionCode=IN");