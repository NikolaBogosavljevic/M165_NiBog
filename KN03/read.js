db.Song.find({ title: { $regex: /Rock/ } }, { _id: 1, title: 1 });
db.Album.find({ release_date: { $lt: new Date("2005-01-01") } }, { _id: 0, name: 1, genre: 1, release_date: 1 });
db.Band.find({ $or: [{ genre: "Rock" }, { genre: "Jazz" }] }, { _id: 1, name: 1, genre: 1 });
db.Member.find({ name: /Mike/, instrument: "Drums" }, { _id: 0, name: 1, instrument: 1 });
