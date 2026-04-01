const Subscription = () => {
  return (
    <section className="py-12 sm:py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-400 mt-2 text-sm sm:text-base">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 items-center">
          {/* Starter */}
          <div className="bg-white rounded-2xl shadow p-6 text-left">
            <h3 className="text-xl font-semibold">Starter</h3>
            <p className="text-gray-400 text-sm">Perfect for getting started</p>

            <h2 className="text-3xl font-bold mt-4">
              $0<span className="text-base font-normal">/Month</span>
            </h2>

            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>✔ Access to 10 free tools</li>
              <li>✔ Basic templates</li>
              <li>✔ Community support</li>
              <li>✔ 1 project per month</li>
            </ul>

            <button className="mt-6 w-full bg-linear-to-r from-purple-500 to-indigo-500 text-white py-2 rounded-full hover:opacity-90 transition-opacity">
              Get Started Free
            </button>
          </div>

          {/* Pro (Highlighted) */}
          <div className="relative rounded-2xl shadow-xl p-6 text-left text-white bg-linear-to-b from-purple-600 to-indigo-600 lg:scale-105 sm:col-span-2 lg:col-span-1">
            {/* Badge */}
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-xs px-3 py-1 rounded-full text-black font-semibold whitespace-nowrap">
              Most Popular
            </span>

            <h3 className="text-xl font-semibold">Pro</h3>
            <p className="text-sm text-purple-200">Best for professionals</p>

            <h2 className="text-3xl font-bold mt-4">
              $29<span className="text-base font-normal">/Month</span>
            </h2>

            <ul className="mt-4 space-y-2 text-sm">
              <li>✔ Access to all premium tools</li>
              <li>✔ Unlimited templates</li>
              <li>✔ Priority support</li>
              <li>✔ Unlimited projects</li>
              <li>✔ Cloud sync</li>
              <li>✔ Advanced analytics</li>
            </ul>

            <button className="mt-6 w-full bg-white text-purple-600 py-2 rounded-full font-semibold hover:bg-purple-50 transition-colors">
              Start Pro Trial
            </button>
          </div>

          {/* Enterprise */}
          <div className="bg-white rounded-2xl shadow p-6 text-left sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-semibold">Enterprise</h3>
            <p className="text-gray-400 text-sm">For teams and businesses</p>

            <h2 className="text-3xl font-bold mt-4">
              $99<span className="text-base font-normal">/Month</span>
            </h2>

            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>✔ Everything in Pro</li>
              <li>✔ Team collaboration</li>
              <li>✔ Custom integrations</li>
              <li>✔ Dedicated support</li>
              <li>✔ SLA guarantee</li>
              <li>✔ Custom branding</li>
            </ul>

            <button className="mt-6 w-full bg-linear-to-r from-purple-500 to-indigo-500 text-white py-2 rounded-full hover:opacity-90 transition-opacity">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscription;
