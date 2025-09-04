import { redirect } from 'next/navigation';
import { Chapter } from '@/lib/chapters';

export default function Home() {
  // Redirect to the cover page (Chapter 0)
  redirect(`/${Chapter.COVER}`);
}
