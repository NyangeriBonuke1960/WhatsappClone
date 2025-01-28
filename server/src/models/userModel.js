const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    phoneNumber: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        validate: {
            validator: function(v){
                return /^\+\d{1,3}\d{7,14}$/.test(v);
            },
            message: (props) => `${props.value} is not a valid phone number!`
        }
    },
    profileName: {
        type: String,
        trim: true,
        minLength: [2, "Profile name must be atleast 2 characters long"],
        maxLength: [50, "Profile name cannot exceed 50 characters"]
    },
    profilePicture: {
        type: String,
        default: 'default-profile-picture-url',
        validate: {
            validator: function(v){
                return /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/.test(v)
            },
            message: (props) => `${props.value} is not a valid URL`
        }
    },
    status: {
        type: String,
        default: 'Hey there, I am using whatsapp',
        maxLength: [100, "Status cannot exceed 100 characters"]
    }
},
{
    timeStamps: true
})

module.exports = mongoose.model('User', UserSchema)