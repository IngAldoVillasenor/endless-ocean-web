import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CourseFeatures from './components/CourseFeatures';
import UpcomingTripsPreview from './components/UpcomingTripsPreview';
import NewsletterLead from './components/NewsletterLead';
import Footer from './components/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col">
      <Navbar />
      
      {/* El contenido principal de la landing */}
      <main className="flex-grow">
        <HeroSection />
        <CourseFeatures />
        <UpcomingTripsPreview />
        
        {/* <InstagramFeed /> Lo dejamos comentado hasta que decidamos qué widget o API usar */}
        
        <NewsletterLead />
      </main>

      <Footer />
    </div>
  );
}