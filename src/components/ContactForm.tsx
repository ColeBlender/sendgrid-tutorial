"use client";

import { useRef } from "react";

function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmitContactForm = () => {};

  return (
    <form
      ref={formRef}
      action={handleSubmitContactForm}
      className="rounded-lg bg-slate-200/30 p-8 w-[400px]"
    >
      <h3 className="mb-8 text-center text-xl">Contact Us</h3>

      <div className="flex flex-col gap-6">
        <input
          name="name"
          type="text"
          placeholder="Name"
          className="rounded-md p-2 text-black"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="rounded-md p-2 text-black"
        />
        <textarea
          name="message"
          placeholder="Message"
          className="rounded-md p-2 min-h-40 text-black"
        />

        <button
          type="submit"
          className="w-48 rounded-lg bg-slate-800 py-2 ml-auto"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
