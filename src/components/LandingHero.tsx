
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const LandingHero = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Create your professional CV</span>
            <span className="block text-blue-600">in minutes</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Build stunning resumes with our easy-to-use CV builder. Choose from professional templates and get hired faster.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <Link to="/editor">
              <Button className="px-8 py-3 text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                Get Started
              </Button>
            </Link>
            <Button variant="outline" className="mt-3 sm:mt-0 sm:ml-3 px-8 py-3 text-base font-medium rounded-md text-blue-700">
              View Templates
            </Button>
          </div>
        </div>

        <div className="mt-16">
          <div className="bg-gray-100 border border-gray-200 rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900">Why choose our CV builder?</h3>
              <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="text-base font-medium text-gray-900">Professional Templates</h4>
                  <p className="mt-2 text-sm text-gray-500">Choose from our professionally designed templates to make your CV stand out.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="text-base font-medium text-gray-900">Easy to Use</h4>
                  <p className="mt-2 text-sm text-gray-500">Our intuitive editor makes creating a professional CV quick and easy.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="text-base font-medium text-gray-900">ATS-Friendly</h4>
                  <p className="mt-2 text-sm text-gray-500">Our CVs are designed to pass through Applicant Tracking Systems.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingHero;
