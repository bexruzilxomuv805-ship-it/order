import { z } from 'zod';

export const createOrderSchema = z.object({
    title: z.string().min(5, 'title kamida 5 belgi').max(100, 'title 100 belgidan oshmasin'),
    duration: z.number().int('duration son bolishi kerak').min(1, 'duration 1-180 oraliqda').max(180, 'duration 1-180 oraliqda'),
    videoUrl: z.string().url('videoUrl URL bolishi kerak'),
    courseId: z.number().int('courseId son bolishi kerak').positive('courseId musbat son bolishi kerak')
});
