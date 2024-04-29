"use client";

import { useRef, useTransition } from "react";
import { sendContactEmailAction } from "@/actions";
import toast from "react-hot-toast";

function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const [isPending, startTransition] = useTransition();

  const handleSubmitContactForm = (formData: FormData) => {
    startTransition(async () => {
      const { errorMessage } = await sendContactEmailAction(formData);
      if (!errorMessage) {
        formRef.current?.reset();
        toast.success("Message successfully sent!");
      } else {
        toast.error(errorMessage);
      }
    });
  };

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
          className="rounded-md p-2"
          disabled={isPending}
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="rounded-md p-2"
          disabled={isPending}
        />
        <textarea
          name="message"
          placeholder="Message"
          className="rounded-md p-2 min-h-40"
          disabled={isPending}
        />

        <button
          type="submit"
          disabled={isPending}
          className="w-48 rounded-lg bg-slate-800 py-2 ml-auto"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
