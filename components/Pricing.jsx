import { Button } from "@/components/ui/button";

const Pricing = () => {
  return (
    <main className="container px-4 py-16 sm:py-24 lg:py-48 justify-between">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10 text-center">
          Choose Your Fitness Journey
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Basic Membership Card */}

          <div className="bg-white rounded-lg hover:shadow-lg overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-4">
                One Month Membership
              </h3>
              <p className="text-gray-600 mb-6">
                For dedicated fitness enthusiasts seeking maximum results
              </p>
              <div className="text-4xl font-bold mb-6">
                5,500Ksh<span className="text-xl font-normal">/month</span>
              </div>
              <ul className="mb-8 space-y-2">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-red-600 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Unlimited gym access
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-red-600 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Unlimited group classes
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-red-600 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  1 personal training session/month
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-red-600 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Nutrition consultation
                </li>
              </ul>
            </div>
            <div className="p-4">
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                Choose Plan
              </Button>
            </div>
          </div>

          {/* Premium Membership Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-red-600">
            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-4">
                Three Months Membership
              </h3>
              <p className="text-gray-600 mb-6">
                For dedicated fitness enthusiasts seeking maximum results
              </p>
              <div className="text-4xl font-bold mb-6">
                14,000Ksh<span className="text-xl font-normal">/month</span>
              </div>
              <ul className="mb-8 space-y-2">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-red-600 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Unlimited gym access
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-red-600 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Unlimited group classes
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-red-600 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  1 personal training session/month
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-red-600 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Nutrition consultation
                </li>
              </ul>
            </div>
            <div className="p-4">
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                Choose Plan
              </Button>
            </div>
          </div>

          {/* Personalized Plan Card */}
          <div className="bg-white rounded-lg hover:shadow-lg overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-4">Personalized Plan</h3>
              <p className="text-gray-600 mb-6">
                Tailored to your specific fitness goals and needs whether you
                are loosing weight or loosing fat
              </p>
              <div className="text-4xl font-bold mb-6">
                Contact us<span className="text-xl font-normal"></span>
              </div>
              <ul className="mb-8 space-y-2">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-red-600 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Unlimited gym access
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-red-600 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Unlimited group classes
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-red-600 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  1 personal training session/month
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-red-600 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Nutrition consultation
                </li>
              </ul>
            </div>
            <div className="p-4">
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                Request Personalized Plan
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Pricing;
