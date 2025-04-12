import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

const Landing = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Navbar />
      <div className="max-w-7xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-gray-100 sm:text-5xl md:text-6xl">
            <span className="block">Create your professional CV</span>
            <span className="block text-[#3B82F6] dark:text-[#3B82F6]">in minutes</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Build stunning resumes with our easy-to-use CV builder. Choose from professional templates and get hired faster.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <Link to="/editor">
              <Button className="px-8 py-3 text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                Get Started
              </Button>
            </Link>
            <Button 
              variant="outline" 
              className="mt-3 sm:mt-0 sm:ml-3 px-8 py-3 text-base font-medium rounded-md text-blue-700 dark:text-blue-400"
            >
              View Templates
            </Button>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-32">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                </svg>
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900 dark:text-gray-100">Easy to Use</h3>
              <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                Create your CV in minutes with our intuitive builder. No design skills needed.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                </svg>
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900 dark:text-gray-100">Professional Templates</h3>
              <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                Choose from our collection of professionally designed templates.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900 dark:text-gray-100">Export as PDF</h3>
              <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                Download your CV in PDF format, ready to be sent to employers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing; 