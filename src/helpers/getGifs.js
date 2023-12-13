export const getGifs = async (categoria) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=K5rdEUETRZunbQIPEzUfJhxvLpqTJood&q=${categoria}&limit=10&offset=0&rating=g&lang=es`;
  const res = await fetch(url);
  const { data } = await res.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    };
  });
  return gifs;
};
