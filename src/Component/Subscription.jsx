import React from 'react';

const Subscription = () => {
  return (
    <section class="py-16">
  <div class="max-w-6xl mx-auto px-4 text-center">
    
    {/* <!-- Title --> */}
    <h2 class="text-4xl font-bold text-gray-800">
      Simple, Transparent Pricing
    </h2>
    <p class="text-gray-400 mt-2 text-md">
      Choose the plan that fits your needs. Upgrade or downgrade anytime.
    </p>

    {/* <!-- Cards --> */}
    <div class="grid md:grid-cols-3 gap-6 mt-12">
      
      {/* <!-- Starter --> */}
      <div class="bg-white rounded-2xl shadow p-6 text-left">
        <h3 class="text-xl font-semibold">Starter</h3>
        <p class="text-gray-400 text-sm">Perfect for getting started</p>

        <h2 class="text-3xl font-bold mt-4">$0<span class="text-base font-normal">/Month</span></h2>

        <ul class="mt-4 space-y-2 text-sm text-gray-600">
          <li>✔ Access to 10 free tools</li>
          <li>✔ Basic templates</li>
          <li>✔ Community support</li>
          <li>✔ 1 project per month</li>
        </ul>

        <button class="mt-6 w-full bg-linear-to-r from-purple-500 to-indigo-500 text-white py-2 rounded-full">
          Get Started Free
        </button>
      </div>

      {/* <!-- Pro (Highlighted) --> */}
      <div class="relative rounded-2xl shadow p-6 text-left text-white bg-linear-to-b from-purple-600 to-indigo-600 scale-105">
        
        {/* <!-- Badge --> */}
        <span class="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-xs px-3 py-1 rounded-full text-black">
          Most Popular
        </span>

        <h3 class="text-xl font-semibold">Pro</h3>
        <p class="text-sm text-purple-200">Best for professionals</p>

        <h2 class="text-3xl font-bold mt-4">$29<span class="text-base font-normal">/Month</span></h2>

        <ul class="mt-4 space-y-2 text-sm">
          <li>✔ Access to all premium tools</li>
          <li>✔ Unlimited templates</li>
          <li>✔ Priority support</li>
          <li>✔ Unlimited projects</li>
          <li>✔ Cloud sync</li>
          <li>✔ Advanced analytics</li>
        </ul>

        <button class="mt-6 w-full bg-white text-purple-600 py-2 rounded-full font-semibold">
          Start Pro Trial
        </button>
      </div>

      {/* <!-- Enterprise --> */}
      <div class="bg-white rounded-2xl shadow p-6 text-left">
        <h3 class="text-xl font-semibold">Enterprise</h3>
        <p class="text-gray-400 text-sm">For teams and businesses</p>

        <h2 class="text-3xl font-bold mt-4">$99<span class="text-base font-normal">/Month</span></h2>

        <ul class="mt-4 space-y-2 text-sm text-gray-600">
          <li>✔ Everything in Pro</li>
          <li>✔ Team collaboration</li>
          <li>✔ Custom integrations</li>
          <li>✔ Dedicated support</li>
          <li>✔ SLA guarantee</li>
          <li>✔ Custom branding</li>
        </ul>

        <button class="mt-6 w-full bg-linear-to-r from-purple-500 to-indigo-500 text-white py-2 rounded-full">
          Contact Sales
        </button>
      </div>

    </div>
  </div>
</section>
  );
};

export default Subscription;