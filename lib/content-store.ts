import { contentSchema } from './content-schema';
import { defaultContent } from './default-content';
const source='https://fullstack-developer-portfolio.tealbirch32.chatgpt.site';
export async function readContent(){
 const token=process.env.PORTFOLIO_SOURCE_TOKEN;
 if(!token)return {content:defaultContent};
 try{
  const response=await fetch(source+'/api/portfolio',{
   headers:{'OAI-Sites-Authorization':'Bearer '+token},
   cache:'no-store',redirect:'error',signal:AbortSignal.timeout(5000)
  });
  if(!response.ok){console.warn('Portfolio content service unavailable; displaying bundled content.');return {content:defaultContent};}
  const result=await response.json();
  const parsed=contentSchema.safeParse(result.content);
  if(!parsed.success){console.warn('Portfolio content response invalid; displaying bundled content.');return {content:defaultContent};}
  return {content:parsed.data};
 }catch{
  console.warn('Portfolio content request failed; displaying bundled content.');
  return {content:defaultContent};
 }
}
