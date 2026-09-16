export type Article={slug:string;title:string;excerpt:string;category:string;publishedAt:string;author:string;body:string[]};
export const articles:Article[]=[
{slug:'dhaka-morning',title:'ঢাকার সকাল: টংয়ের আড্ডায় আজকের শহর',excerpt:'শহরের ব্যস্ততার মাঝেও টংয়ের চায়ের কাপে জমে উঠেছে গল্প, খবর আর মানুষের কথা।',category:'ঢাকা',publishedAt:'2026-09-16',author:'টং ডেস্ক',body:['ঢাকার সকাল শুরু হয় ব্যস্ত রাস্তা, পরিচিত মুখ আর এক কাপ গরম চায়ের সঙ্গে।','এই গল্পগুলোই টং-এর খবরের প্রাণ—মানুষের কাছ থেকে মানুষের কাছে খবর পৌঁছে দেওয়া।']},
{slug:'campus-voices',title:'ক্যাম্পাসে নতুন প্রজন্মের গল্প',excerpt:'শিক্ষার্থী, ক্লাব ও তরুণ উদ্যোগের নানা গল্প উঠে আসছে নতুন করে।',category:'ক্যাম্পাস',publishedAt:'2026-09-15',author:'ফাহিম ডেস্ক',body:['ক্যাম্পাস শুধু ক্লাসরুম নয়; এখানে তৈরি হয় বন্ধুত্ব, নেতৃত্ব ও নতুন ধারণা।','তরুণদের ছোট ছোট উদ্যোগই অনেক সময় বড় পরিবর্তনের শুরু করে।']},
{slug:'tech-bangladesh',title:'বাংলাদেশের তরুণদের হাতে প্রযুক্তির নতুন সম্ভাবনা',excerpt:'AI, সফটওয়্যার ও ডিজিটাল নির্মাণে তরুণদের আগ্রহ দ্রুত বাড়ছে।',category:'প্রযুক্তি',publishedAt:'2026-09-14',author:'টেক ডেস্ক',body:['প্রযুক্তি শেখার সুযোগ এখন আগের চেয়ে অনেক বেশি সহজলভ্য।','তবে দক্ষতার পাশাপাশি দায়িত্বশীল ব্যবহার ও যাচাই করা তথ্যও জরুরি।']}
];
export function getArticle(slug:string){return articles.find(a=>a.slug===slug)}
