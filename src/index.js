import "./style.css";

const fetchBtn = document.querySelector("#fetchBtn");

const fetchImg = () => {
  const API_KEY = "HKEgwNAllg1pMBaj1wooNdWXXGKDzbdX";
  const API = `https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=cats`;
  const img = document.querySelector("img");
  fetch(API)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed fetch: ${response.status}`);
      }
      return response.json();
    })
    .then((result) => {
      console.log(result);
      img.src = result.data.images.original.url;
      fetchBtn.disabled = false;
    })
    .catch((error) => {
      console.log(error);
    });
};

fetchBtn.addEventListener("click", () => {
  fetchBtn.disabled = true;
  fetchImg();
});

fetchImg();
