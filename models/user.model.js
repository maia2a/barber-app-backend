const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        required: true,
    },
    appoiments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Appoiment",
    }],
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review",
    }],
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

//Hash antes de salvar
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});

module.exports = mongoose.model("User", userSchema);