export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=eUdo9BOIbLp7O3x4wnPVkNHyIMWjxp3T&q=${category}&limit=30`;
  const resp = await fetch(url);
  const { data = [] } = await resp.json();
  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
  console.log(data);
  console.log(gifs);
  return gifs;
};
