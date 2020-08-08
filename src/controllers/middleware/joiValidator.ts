import {ObjectSchema} from 'joi';
import {RequestHandler} from 'express';
import {UNPROCESSABLE_ENTITY} from 'http-status-codes';


export const joiValidator = (schema: ObjectSchema): RequestHandler => (req, res, next) => {
    try {
        const result = schema.validate(req.body, {
            abortEarly: false
        })

        if (result.error) {
            return res.status(UNPROCESSABLE_ENTITY).send(result.error)
        }

        next()
    } catch (e) {
        next(e)
    }
}
