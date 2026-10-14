import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    item: {
        type: String,
        required: [true, 'item is required'],
        trim: true
    },
    price: {
        type: Number,
        required: [true, 'number is required'],
        min: [1000, 'minimum price is 1000 sum']
    },
    address: {
        type: String,
        required: [true, 'address is required']
    },
    status: {
        type: String,
        enum: ['pending', 'preparing', 'delivered', 'rejected'],
        default: 'pending'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

export default mongoose.model('order', orderSchema)
