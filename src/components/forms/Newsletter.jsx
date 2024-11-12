import React, { useState } from "react";

function NewsletterSignup() {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission, e.g., send data to an API
    console.log("Email submitted:", email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex max-w-md4 border border-zinc-500">
        <label htmlFor="email-address" className="sr-only">
          Email address
        </label>
        <input
          id="email-address"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="min-w-0 flex-auto border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm/6"
          placeholder="your@email.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className="flex-none bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          Subscribe
        </button>
      </div>
    </form>
  );
}

export default NewsletterSignup;
