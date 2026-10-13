import { z } from 'zod';
const text = (max:number) => z.string().trim().min(1, 'This field is required').max(max);
export const groups = ['Backend','Frontend','Databases','Cloud & tools','AI & automation'] as const;
export const contentSchema = z.object({
 name:text(100), role:text(150), introduction:text(1200), about:text(2500), domains:text(2500), approach:text(1200), location:text(200), email:z.string().trim().email().max(254), linkedin:z.string().trim().url().max(500).refine(v=>{try{const u=new URL(v);return u.protocol==='https:'&&(u.hostname==='linkedin.com'||u.hostname==='www.linkedin.com')&&!u.username&&!u.password;}catch{return false;}},'Enter an https://www.linkedin.com profile URL'),
 skills:z.array(z.object({name:text(100),group:z.enum(groups)}).strict()).max(150),
 projects:z.array(z.object({title:text(150),type:text(150),tags:z.array(text(60)).max(10),kind:z.enum(['dashboard','portal','agent','ai']),description:text(1000),details:text(6000),steps:z.array(text(30)).max(3).optional()}).strict()).max(50),
 experience:z.array(z.tuple([text(100),text(150),text(200),text(4000)])).max(40)
}).strict();
export type PortfolioContent=z.infer<typeof contentSchema>;
export const saveSchema=z.object({content:contentSchema,revision:z.number().int().min(0)}).strict();
