import axios from "axios";

const searchImages = async (term) => {
const response = await axios.get('https://api.unsplash.com/search/photos', {
headers: {
Authorization: 'Client-ID y2vr0K0xx2w2PesH0kfhfRi50DTNY_co2Y2nBFmHCc8'
},
params: {
query: term,
}

});
console.log(response);
return response.data.results;
};

export default searchImages;