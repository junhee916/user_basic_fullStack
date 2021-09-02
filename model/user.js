const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = mongoose.Schema(
    {
        name : {
            type : String
        },
        email : {
            type : String,
            required : true,
            unique : true,
            match : /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        },
        password : {
            type : String,
            required : true
        }
    },
    {
        timestamps : true
    }
)

userSchema.pre('save', async function(next){

    try{
        const salt = await bcrypt.genSalt(10)

        const passwordHash = await bcrypt.hash(this.password, salt)

        this.password = passwordHash;

        next();
    }
    catch(err){
        next(err)
    }
})

userSchema.methods.comparePassword = function(isInputPasword, cb){

    bcrypt.compare(isInputPasword, this.password, (err, isMatch) => {

        if(err) return cb(null, err)

        cb(null, isMatch)
    })
}

module.exports = mongoose.model('user', userSchema)