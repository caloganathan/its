import { BUILD } from '../build';
export const GET = () => new Response(JSON.stringify(BUILD, null, 2), { headers: { 'Content-Type': 'application/json' } });
