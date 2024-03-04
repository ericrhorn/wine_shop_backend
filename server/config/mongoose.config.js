// const mongoose = require("mongoose");

// mongoose
//   .connect("mongodb://localhost/name_db", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("Established a connection to the database"))
//   .catch((err) =>
//     console.log("Something went wrong when connecting to the database", err)
//   );
// const mongoose = require('mongoose');

// module.exports = async () => {
//     try {
//         await mongoose.connect(process.env.wine_db, {});
//         console.log("CONNECTED TO DATABASE SUCCESSFULLY");
//     } catch (error) {
//         console.error('COULD NOT CONNECT TO DATABASE:', error.message);
//     }
// };
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/wine_db")
  .then(() => console.log("Established a connection to the database"))
  .catch((err) =>
    console.log("Something went wrong when connecting to the database ", err)
  );
