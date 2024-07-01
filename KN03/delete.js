db.Member.deleteOne({ "_id": ObjectId("6682a00f64640faff188c8b4") });

db.Song.deleteMany({ 
    $or: [
        { _id: ObjectId("6682a00f64640faff188c8be") }, 
        { _id: ObjectId("6682a00f64640faff188c8bf") }
    ] 
});