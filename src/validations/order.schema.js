import z from "zod";

export const createOrderSchema = z.object({
    item: z.string({ required_error: 'Order name must be in string type' }).min(1),
    price: z.number({ required_error: 'Order price must be in number type' }).min(1000),
    address: z.string({ required_error: 'Address must be in string type' }).min(1)
})
