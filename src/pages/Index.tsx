
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import LaunchForm from '@/components/LaunchForm';
import LiveLaunches from '@/components/LiveLaunches';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <LaunchForm />
        <LiveLaunches />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
