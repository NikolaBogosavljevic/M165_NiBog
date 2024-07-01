db.Song.updateOne(
    { _id: song1 },
    { $set: { title: "Updated Rock song" } }
);
db.Member.updateMany(
    { $or: [{ instrument: "Guitar" }, { instrument: "Vocals" }] },
    { $set: { instrument: "Updated Instrument" } }
);
db.Album.replaceOne(
    { name: "Jazz album" },
    {
        name: "Replaced Jazz album",
        genre: "Jazz",
        release_date: new Date("1995-03-15"),
        songs: [song4]
    }
);
