
const songs = [
  { id: 1, name: "Song1", artist: "artist1" },
  { id: 2, name: "Song2", artist: "artist2" },
  { id: 3, name: "Song3", artist: "artist3" },
  { id: 4, name: "Song4", artist: "artist4" }
  
];
const mastodonSongs = songs.filter(song => {
    return song.artist.toLowerCase() === "artist4";
  });
  
  console.log(mastodonSongs);

  //  { id: 4, name: 'Song4', artist: 'artist4' } ]