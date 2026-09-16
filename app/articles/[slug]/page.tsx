import {notFound} from 'next/navigation';import {articles,getArticle} from '../../lib/data';
export function generateStaticParams(){return articles.map(a=>({slug:a.slug}))}
export default async function Article({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const a=getArticle(slug);if(!a)notFound();return <article className="article"><div className="eyebrow">{a.category}</div><h1>{a.title}</h1><div className="meta">{a.author} · {a.publishedAt}</div><p>{a.excerpt}</p><div className="article-body">{a.body.map((p,i)=><p key={i}>{p}</p>)}</div></article>}
