// 给定一个对象数组
const songs = [
    { id: 1, name: "Song1", artist: "artist1" },
    { id: 2, name: "Song2", artist: "artist2" },
    { id: 3, name: "Song3", artist: "artist3" },
    { id: 4, name: "Song4", artist: "artist4" }
    
];

let allSongName = songs.map(function(song){
    return song.name;
});

console.log(allSongName);

const lowerCaseSongs = songs.map(song => song.name.toLowerCase());

console.log(lowerCaseSongs);


