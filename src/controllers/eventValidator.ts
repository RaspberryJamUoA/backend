import {joiValidator} from './middleware/joiValidator';
import joi from 'joi';
import {IEvent} from '../interfaces/IEvent';

export const validateBodyEvent = joiValidator(joi.object<IEvent>({
    clubName: joi.string().required(),
    cost: joi.number().required(),
    dateTime: joi.string().isoDate(),
    description: joi.string().required(),
    eventName: joi.string().required(),
    keywords: joi.array().items(joi.string()),
    location: joi.string().required(),
    membershipRequired: joi.bool().required()
}));
