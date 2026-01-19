import Header from '@/components/landing/header';
import { Footer } from '@/components/footer';
import { Docs } from '@/components/docs';

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Docs />
      <Footer />
    </div>
  );
}
