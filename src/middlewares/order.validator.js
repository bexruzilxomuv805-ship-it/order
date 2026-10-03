import { createOrderSchema } from '../validations/order.schema.js';

class OrderValidator {
    constructor() {
        this.validateCreate = this.validateCreate.bind(this);
    }

    validateCreate(req, res, next) {
        try {
            const result = createOrderSchema.safeParse(req.body);

            if (!result.success) {
                const errors = result.error.issues.map(error => error.message);
                return res.status(400).json({ errors });
            }

            req.body = result.data;
            next();
        } catch (error) {
            return res.status(500).json({
                error: error.message
            });
        }
    }
}

export default new OrderValidator();
