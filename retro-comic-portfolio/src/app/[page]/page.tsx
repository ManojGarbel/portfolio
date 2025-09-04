import { notFound } from 'next/navigation';
import { Chapter, getChapterById } from '@/lib/chapters';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import { PageBook } from '@/components/PageBook';
import { NavBar } from '@/components/NavBar';
import { Pager } from '@/components/Pager';
import { GestureLayer } from '@/components/GestureLayer';

interface PageProps {
  params: {
    page: string;
  };
}

export async function generateMetadata({ params }: PageProps) {
  const pageId = parseInt(params.page);
  const chapter = getChapterById(pageId);
  
  if (!chapter) {
    return generateSEOMetadata(Chapter.COVER);
  }
  
  return generateSEOMetadata(pageId);
}

export default function ChapterPage({ params }: PageProps) {
  const pageId = parseInt(params.page);
  const chapter = getChapterById(pageId);
  
  if (!chapter || pageId < 0 || pageId >= 8) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-paper relative overflow-hidden">
      {/* Background textures */}
      <div className="fixed inset-0 paper-texture opacity-30 pointer-events-none" />
      <div className="fixed inset-0 halftone-overlay pointer-events-none" />
      
      {/* Main content */}
      <div className="relative z-10">
        <NavBar currentChapter={pageId} />
        
        <main className="page-container">
          <PageBook currentChapter={pageId} />
        </main>
        
        <Pager currentChapter={pageId} />
      </div>
      
      {/* Gesture and keyboard handling */}
      <GestureLayer />
      
      {/* Page numbers and progress indicator */}
      <div className="fixed bottom-4 right-4 z-50">
        <div className="bg-white/90 backdrop-blur-sm comic-border comic-shadow px-3 py-2 rounded-lg">
          <span className="font-comic text-sm text-ink">
            {pageId + 1} / 8
          </span>
        </div>
      </div>
      
      {/* Chapter tabs for desktop */}
      <div className="hidden lg:block fixed right-4 top-1/2 transform -translate-y-1/2 z-40 space-y-2">
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={i}
            className={`w-3 h-8 rounded-l-lg border-2 border-r-0 transition-all duration-200 ${
              i === pageId
                ? 'bg-retro-red border-retro-red'
                : 'bg-white border-ink hover:bg-retro-yellow'
            }`}
            style={{ transform: `translateX(${i === pageId ? 0 : 4}px)` }}
          />
        ))}
      </div>
    </div>
  );
}

// Generate static params for all chapters
export async function generateStaticParams() {
  return Array.from({ length: 8 }, (_, i) => ({
    page: i.toString(),
  }));
}