import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MailchimpSubscribe from "react-mailchimp-subscribe";

const url = "https://xyz.us10.list-manage.com/subscribe/post?u=57ab3f3bcc9a090ffb39b616f&amp;id=95611e066e&amp;f_id=003d8ae3f0";

const CustomForm = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      email.length > 0 &&
      onValidated({
        EMAIL: email
      });
  };

  useEffect(() => {
    if (status === 'success') {
      toast.success('You are subscribed!');
    } else if (status === 'error') {
      toast.error(`Subscription Error: ${message}`);
    }
  }, [status, message]);  
  
  return (
    <form onSubmit={handleSubmit} className="flex max-w-md4 border border-zinc-500">
      <label htmlFor="email-address" className="sr-only">Email address</label>
      <div className="flex-auto">
        <input
          id="email-address"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="min-w-0 border-0 bg-white/5 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm/6"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="flex-none bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2   
 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
      >
        Subscribe
      </button> 
    </form>
  );
};

const NewsletterSignup = () => {
  return (
    <div>
      <ToastContainer />  {/* Ensure ToastContainer is rendered */}
      <MailchimpSubscribe
      url={url}
      render={({ subscribe, status, message }) => (
        <CustomForm
          status={status}
          message={message}
          onValidated={formData => subscribe(formData)}
        />
      )}/>
    </div>
  );
};

export default NewsletterSignup;