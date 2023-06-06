const mongoose = require("mongoose");


const User = new mongoose.Schema(
  {
    firstname: { type: String},
    lastname: { type: String},
    email: { type: String  },
    address: { type: String  },
    contactNo: { type: String },
    status:{type:String, default:"Active"}
  },
  { timestamps: true }
);
module.exports = mongoose.model("User", User);
