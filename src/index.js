import "./style.css";

const fetchBtn = document.querySelector("#fetchBtn");
const inputKeyword = document.querySelector("#inputKeyword");
const errorMsg = document.querySelector("#errorMsg");
const img = document.querySelector("img");

const fetchImg = async (keyword) => {
  try {
    const API_KEY = "HKEgwNAllg1pMBaj1wooNdWXXGKDzbdX";
    const API = `https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=${keyword}`;
    const response = await fetch(API);
    const result = await response.json();
    console.log(result);
    if (result.data && result.data.length === 0) {
      imgIsEmpty();
    } else {
      img.src = result.data.images.original.url;
    }
    fetchBtn.disabled = false;
  } catch (error) {
    console.log(error);
    fetchBtn.disabled = false;
  }
};

const imgIsEmpty = () => {
  errorMsg.textContent = "Search keyword is empty";
  img.src = "#";
  removeErrorMsg();
};

const removeErrorMsg = () => {
  setTimeout(() => {
    errorMsg.textContent = "";
  }, 3000);
};

fetchBtn.addEventListener("click", () => {
  fetchBtn.disabled = true;
  const keyword = inputKeyword.value;
  if (keyword) {
    fetchImg(keyword);
  } else {
    errorMsg.textContent = "Please enter a search keyword";
    fetchBtn.disabled = false;
    removeErrorMsg();
  }
});

fetchImg("cats");
