import { contentSchema } from './content-schema';
const source='https://fullstack-developer-portfolio.tealbirch32.chatgpt.site';
export async function readContent(){
 const token=process.env.PORTFOLIO_SOURCE_TOKEN;
 if(!token)throw new Error('PORTFOLIO_SOURCE_TOKEN must be configured server-side.');
 const response=await fetch(source+'/api/portfolio',{headers:{'OAI-Sites-Authorization':'Bearer '+token},cache:'no-store',redirect:'error',signal:AbortSignal.timeout(15000)});
 if(!response.ok)throw new Error('Portfolio content source unavailable.');
 const result=await response.json();return {content:contentSchema.parse(result.content)};
}
