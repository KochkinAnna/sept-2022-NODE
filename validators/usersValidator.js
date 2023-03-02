const Joi = require('joi')

exports.usersValidator = (data)=>{
    const schema = Joi.object({
        name:Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required(),
        age:Joi.number().min(0).max(100).required(),
        gender:Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required()
    })

    return schema.validate(data)
}