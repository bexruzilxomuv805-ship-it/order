import { AppError } from "../errors/app.error.js";
import { BaseController } from "./base.controller.js";
import Order from "../models/order.js";

class OrderController extends BaseController {
    constructor() {
        super();

        this.getAll = this.getAll.bind(this);
        this.getById = this.getById.bind(this);
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }

    async getAll(req, res) {
        try {
            const { status, search } = req.query

            const filter = {}
            if (status) filter.status = status
            if (search) filter.item = {
                $regex: search,
                $options: 'i'
            }

            const orders = await Order.find(filter)

            return res.status(200).json(orders)
        } catch (error) {
            return this.handleError(res, error)
        }
    }

    async getById(req, res) {
        try {
            const order = await Order.findById(req.params.id)

            if (!order) {
                throw new AppError('Order not found', 404)
            }
            return res.status(200).json(order)
        } catch (error) {
            return this.handleError(res, error)
        }
    }

    async create(req, res) {
        try {
            const newOrder = await Order.create(req.body)

            return res.status(201).json(newOrder)
        } catch (error) {
            return this.handleError(res, error)
        }
    }

    async update(req, res) {
        try {
            const order = await Order.findByIdAndUpdate(
                req.params.id,
                req.body,
                {
                    returnDocument: 'after',
                    runValidators: true
                }
            )

            if (!order) {
                throw new AppError('Order is not found', 404)
            }

            return res.status(200).json(order)
        } catch (err) {
            return this.handleError(res, err)
        }
    }

    async delete(req, res) {
        try {
            const order = await Order.findByIdAndDelete(req.params.id)

            if (!order) {
                throw new AppError('Order is not found', 404)
            }

            return res.status(200).json({
                message: `${order.item} order has been canceled`,
                order
            })
        } catch (err) {
            return this.handleError(res, err)
        }
    }
}

export const orderController = new OrderController();
