var band1 = new ObjectId();
var band2 = new ObjectId();
var band3 = new ObjectId();

var member1 = new ObjectId();
var member2 = new ObjectId();
var member3 = new ObjectId();
var member4 = new ObjectId();
var member5 = new ObjectId();
var member6 = new ObjectId();

var album1 = new ObjectId();
var album2 = new ObjectId();
var album3 = new ObjectId();
var album4 = new ObjectId();

var song1 = new ObjectId();
var song2 = new ObjectId();
var song3 = new ObjectId();
var song4 = new ObjectId();
var song5 = new ObjectId();
var song6 = new ObjectId();


db.Song.insertMany([
    {
        _id: song1,
        title: "Rock song",
        duration: 4.5
    },
    {
        _id: song2,
        title: "Guitar song",
        duration: 3.8
    },
    {
        _id: song3,
        title: "Drum song",
        duration: 5.0
    },
    {
        _id: song4,
        title: "Jazz song",
        duration: 4.2
    },
    {
        _id: song5,
        title: "Pop song",
        duration: 3.5
    },
    {
        _id: song6,
        title: "Dance song",
        duration: 4.0
    }
]);


db.Album.insertMany([
    {
        _id: album1,
        name: "Rock album",
        genre: "Rock",
        release_date: new Date("2001-05-20"),
        songs: [song1, song2]
    },
    {
        _id: album2,
        name: "Rock and Roll album",
        genre: "Rock",
        release_date: new Date("2003-07-15"),
        songs: [song3]
    },
    {
        _id: album3,
        name: "Jazz album",
        genre: "Jazz",
        release_date: new Date("1995-03-15"),
        songs: [song4]
    },
    {
        _id: album4,
        name: "Pop album",
        genre: "Pop",
        release_date: new Date("2010-07-30"),
        songs: [song5, song6]
    }
]);

db.Band.insertOne({
    _id: band1,
    name: "The Rockers",
    genre: "Rock",
    albums: [album1, album2]
});

db.Band.insertOne({
    _id: band2,
    name: "Jazz guys",
    genre: "Jazz",
    albums: [album3]
});

db.Band.insertOne({
    _id: band3,
    name: "Pop fellas",
    genre: "Pop",
    albums: [album4]
});

db.Member.insertMany([
    {
        _id: member1,
        name: "Johnah^tan",
        instrument: "Guitar",
        bands: [band1]
    },
    {
        _id: member2,
        name: "James doell",
        instrument: "Vocals",
        bands: [band1]
    },
    {
        _id: member3,
        name: "Mike jord",
        instrument: "Drums",
        bands: [band1, band2]
    },
    {
        _id: member4,
        name: "michael",
        instrument: "Saxophone",
        bands: [band2]
    },
    {
        _id: member5,
        name: "Tom cruisi",
        instrument: "Piano",
        bands: [band2]
    },
    {
        _id: member6,
        name: "Emily black",
        instrument: "Keyboard",
        bands: [band3]
    }
]);


