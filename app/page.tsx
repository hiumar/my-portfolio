import Portfolio from './portfolio';
import {readContent} from '../lib/content-store';
export const dynamic='force-dynamic';
export default async function Home(){const {content}=await readContent();return <Portfolio content={content}/>;}
