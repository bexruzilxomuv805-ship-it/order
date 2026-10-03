import { AppError } from "../errors/app.error.js";
import { BaseController } from "./base.controller.js";

class OrderController extends BaseController {
    constructor() {
        super();
        this.orders = [
            {id: 1, title: 'JS', duration: 120, videoUrl: 'https://example.com/js', courseId: 1}
        ];

        this.getAll = this.getAll.bind(this);
        this.getById = this.getById.bind(this);
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }

    getAll(req, res) {
        try {
            const { status } = req.query;
            const result = status ? this.orders.filter(order => order.status === status) : this.orders;

            return this.sendSuccess(res, result);
        } catch (error) {
            return this.handleError(res, error);
        }
    }

    getById(req, res) {
        try {
            const order = this.orders.find(l => l.id === Number(req.params.id));

            if (!order) {
                throw new AppError('order not found', 404);
            }
            return this.sendSuccess(res, order);
        } catch (error) {
            return this.handleError(res, error);
        }
    }

    create(req, res) {
        try {
            const { title, duration, videoUrl, courseId } = req.body;

            const newOrder = {
                id: this.orders.length ? Math.max(...this.orders.map(l => l.id)) + 1 : 1,
                title,
                duration,
                videoUrl,
                courseId
            };
            this.orders.push(newOrder);

            return this.sendSuccess(res, newOrder, 201);
        } catch (error) {
            return this.handleError(res, error);
        }
    }

    update(req, res) {
        try {
            const order = this.orders.find(l => l.id === Number(req.params.id));
            if (!order) {
                throw new AppError('order not found', 404);
            }

            const { id, ...fields } = req.body;
            if (Object.keys(fields).length === 0) {
                throw new AppError('No fields to update', 400);
            }

            Object.assign(order, fields);
            return this.sendSuccess(res, order);
        } catch (error) {
            return this.handleError(res, error);
        }
    }

    delete(req, res) {
        try {
            const index = this.orders.findIndex(l => l.id === Number(req.params.id));
            if (index === -1) {
                throw new AppError('order not found', 404);
            }

            const deleted = this.orders.splice(index, 1)[0];
            return this.sendSuccess(res, {
                message: `order ${deleted.id} has been deleted`,
                order: deleted
            });
        } catch (error) {
            return this.handleError(res, error);
        }
    }
}

export const orderController = new OrderController();
