// I'm copying Tailwind styles i made in HTML, one key difference-
// Replace class with className, as JSX uses className instead of class for defining CSS classes. 


const Header = () => {
    return (
      <header className="w-full max-w-4xl text-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">
          CRM - Next.js | TailwindCSS | Go | Gorm
        </h1>
      </header>
    );
};
  
export default Header;
  


// {/* <header className="w-full max-w-4xl text-center mb-6">
//             <h1 class="text-2xl font-bold text-gray-900">
//                 CRM - Next.js | TailwindCSS | Go | Gorm
//             </h1>
//  </header> */}