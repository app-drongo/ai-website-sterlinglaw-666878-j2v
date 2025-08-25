import Herohome from '@/components/Herohome';
import Abouthome from '@/components/Abouthome';
import Services from '@/components/Services';
import Cta from '@/components/Cta';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <section id="section-0" className="scroll-mt-16">
        <Herohome />
      </section>
      <section id="section-1" className="scroll-mt-16">
        <Abouthome />
      </section>
      <section id="section-2" className="scroll-mt-16">
        <Services />
      </section>
      <section id="section-3" className="scroll-mt-16">
        <Cta />
      </section>
    </main>
  );
}