import mongoose, {Schema} from 'mongoose';
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new mongoose.schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },
        fullName: {
            type: String,
            required: true,
            trim: true,
            index: true
        },
        avatar: {
            type: String,   // cloudinary url
            required: true
        },
        coverImage: {
            type: String,   // cloudinary url
        },
        watchHistory: [
            {
                type: Schema.Types.ObjectId,
                ref: "Video"
            }
        ],
        password: {
            type: String,
            required: [true, 'Password is required']
        },
        refreshToken: {
            type: String
        }
    },{timestamps: true}
)


// Note that arrow function is not used here because arrow function doesnot have a refference to "this" context or current context
userSchema.pre("save", async function (next) {          // Over here userschema uses a pre hook to listen for a save event and when completed returns next (because it is a middleware)
    
    //checking if password field is modified or not. If not modified then return next otherwise hash the password and return next 
    if (!this.isModified("password")) {
        return next();
    }

    this.password = bcrypt.hash(this.password, 10)      // Overe here 10 means the number of rounds of salt required to hash the password
    next()
})

// A custom method isPasswordCorrect is defined to check the password
userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)     // Compares the password (encrypted) that the user sends with the actual encrypted password
}

// A custom method isPasswordCorrect is defined to generate access token
userSchema.methods.generateAccessToken = function() {
    return jwt.sign(
        {
            _id: this._id,                                //payload
            email: this.email,
            username: this.username,
            fullName: this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,                  //secret
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY    //expiry
        }
    )
}

// A custom method isPasswordCorrect is defined to generate refresh token
userSchema.methods.generateRefreshToken = function() {
    return jwt.sign(
        {
            _id: this._id,                                //payload
        },
        process.env.REFRESH_TOKEN_SECRET,                 //secret
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY   //expiry
        }
    )
}

export const User = mongoose.model("User", userSchema)