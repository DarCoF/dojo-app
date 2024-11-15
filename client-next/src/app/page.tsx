import Link from 'next/link';
import Card from './ui-comps/card/card';
// Import styles
import './styles/globals.css';

export default function Home() {
  return (
    <div className="min-h-screen main-background text-white flex flex-col items-center justify-center px-4">
      {/* Main Header Section */}
      <header className="text-center max-w-7xl">
        <h1 className="text-5xl font-extrabold mb-12">
          The Ultimate Destination for BJJ Enthusiasts
        </h1>
        <p className="text-lg text-gray-400 mb-4">
          <strong className="text-white">T.A.P. (Tecniques and Positions)</strong> was born out of a passion for Brazilian Jiu-Jitsu and the desire to continue scaling this sport to new heights. 
        </p>
        <p className="text-lg text-gray-400 mb-4">
          The steadfast growth in bjj popularity and the inherent complexity of the sport puts serious top pressure on the <strong className='text-white'>need for accesible, rich and extensible learning resources</strong>.
          Blindfully navigating the vast space of tecniques, positions and sequences becomes a salomonic endeavor.
        </p>
        <p className="text-lg text-gray-400 mb-12">    
          TAP aspires to improve passive learning in two concrete avenues. Through <strong className='text-white'> neat visual representations</strong> and via <strong className='text-white'>structured learning paths</strong>.
        </p>
        <div className="flex space-x-4 justify-center">
          <Link href="/graph" className="bg-white text-black font-semibold py-2 px-4 rounded hover:bg-gray-200 transition">
            Get Started
          </Link>
          <Link href="/project-page" className="bg-gray-900 text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-600 transition">
            Learn More
          </Link>
        </div>
      </header>

      {/* Features Section */}
      <section className="mt-12 max-w-4xl text-center">
        <h2 className="text-3xl font-bold mb-8">
          What's in TAP?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <Card
          imageUrl="/img/card-top.jpg"
          altText="The Map"
          title="The Map"
          description="It's just a tree! But, instead of leaves, it has techniques."
          buttonTag='Explore'
          tags={[]}
        />
        <Card
          imageUrl="/img/card-top.jpg"
          altText="Tutorials"
          title="Tutorials"
          description="Mostly tailored for those newcomers hoping to temper your frustration. We got you cover with guided tutorials!"
          buttonTag='Explore'
          tags={[]}
        />
        <Card
          imageUrl="/img/card-top.jpg"
          altText="The Project"
          title="The Project"
          description="If you're interested in contributing to the project, check out our GitHub repository. We also accept donations."
          buttonTag='Explore'
          tags={[]}
        />
        {/* Add more Card components as needed */}
      </div>
      </section>
    </div>
  );
}
