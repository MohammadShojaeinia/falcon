//VALIDATION

const Joi = require('@hapi/joi');

const registervaliadation = (data) => {
    const schema = {
        firstname: Joi.string.min(3).required,
        lastname: Joi.string.min(3).required,
        email: Joi.string.min(3).required().email(),
        password: Joi.string().min(6).required()
    };
    return Joi.valiadte(data, schema);
};

module.exports.registervaliadation = registervaliadation;
