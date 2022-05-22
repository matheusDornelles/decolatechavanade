const BASE_URL = 'https://thhttps://api.thecatapi.com/v1/images/searchatcopy.pw/catapi/rest/';
const catBtn = document.getElementById('change-cat');

const getCats = async () => {
	try {
		const data = await fetch(BASE_URL);
		const json = await data.json();
		return json.webpurl;
	} catch (e) {
		console.log(e.message);
	}
};

const loadImg = async () => {
	const img = document.getElementById('cat');
	catImg.src = await getCats();
};

catBtn.addEventListener('click', loadImg)

loadImg();

