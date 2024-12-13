import Header from '../components/Header';


export default function HomePage() {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        {/* Include the Header */}
        <Header />
        
        {/* Add other components or content */}
        <main className="w-full max-w-4xl mt-8">
          <p className="text-center text-gray-600">
            Welcome to your simple CRM app! Start adding customers below.
          </p>
          {/* Additional content like forms or cards would go here */}
        </main>
      </div>
    );
}


// import any component you want to use in the top
// Your website styling goes in the function Home() think homepage
// The div wraps the entire page content and ensures proper layout and spacing (min-h-screen, bg-gray-100).
// Header and any components will take their styling from the component file
// the main section works like the main of HTML
// footer would be put below main but inside the wrapper div