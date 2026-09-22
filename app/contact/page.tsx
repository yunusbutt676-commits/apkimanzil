"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  Send,
  MessageCircle,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/Container";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50">
        {/* HEADER */}
        <section className="bg-gray-950 py-14 sm:py-16">
          <Container>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-300 transition hover:text-white"
            >
              <ArrowLeft size={17} />
              Back to Home
            </Link>

            <div className="mt-7 max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white">
                <MapPin size={16} />
                Arabian City, Lahore
              </div>

              <h1 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Let&apos;s Find Your Manzil
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
                Have a question about a property or want to list your
                property in Arabian City? Send us a message and our team will
                get in touch with you.
              </p>
            </div>
          </Container>
        </section>

        {/* CONTACT CONTENT */}
        <section className="py-12 sm:py-16">
          <Container>
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              {/* CONTACT INFO */}
              <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
                <p className="text-sm font-bold uppercase tracking-widest text-teal-700">
                  Contact Us
                </p>

                <h2 className="mt-3 text-2xl font-bold text-gray-900 sm:text-3xl">
                  We&apos;re here to help
                </h2>

                <p className="mt-4 text-sm leading-7 text-gray-500">
                  Whether you are looking to buy, rent or list a property in
                  Arabian City, Lahore, get in touch with Apki Manzil.
                </p>

                <div className="mt-8 space-y-5">
                  {/* LOCATION */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                      <MapPin size={20} />
                    </div>

                    <div>
                      <p className="font-semibold text-gray-900">
                        Location
                      </p>
                      <p className="mt-1 text-sm text-gray-500">
                        Arabian City, Lahore, Pakistan
                      </p>
                    </div>
                  </div>

                  {/* PHONE */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                      <Phone size={20} />
                    </div>

                    <div>
                      <p className="font-semibold text-gray-900">Phone</p>
                      <a
                        href="tel:+923067706730"
                        className="mt-1 block text-sm text-gray-500 transition hover:text-teal-700"
                      >
                        +92 306 7706730
                      </a>
                    </div>
                  </div>

                  {/* WHATSAPP */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                      <MessageCircle size={20} />
                    </div>

                    <div>
                      <p className="font-semibold text-gray-900">
                        WhatsApp
                      </p>

                      <a
                        href="https://wa.me/923067706730?text=Hi%2C%20I%27m%20interested%20in%20a%20property%20listed%20on%20Apki%20Manzil."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 block text-sm text-gray-500 transition hover:text-teal-700"
                      >
                        Chat with us directly
                      </a>
                    </div>
                  </div>

                  {/* EMAIL */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                      <Mail size={20} />
                    </div>

                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <a
                        href="mailto:apkimanzil.official@gmail.com"
                        className="mt-1 block break-all text-sm text-gray-500 transition hover:text-teal-700"
                      >
                        apkimanzil.official@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* WHATSAPP CTA */}
                <a
                  href="https://wa.me/923067706730?text=Hi%2C%20I%27m%20interested%20in%20a%20property%20listed%20on%20Apki%20Manzil."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-teal-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-800 active:scale-[0.99]"
                >
                  <MessageCircle size={18} />
                  Chat on WhatsApp
                </a>

                <div className="mt-5 rounded-xl bg-gray-50 p-5">
                  <p className="text-sm font-semibold text-gray-900">
                    Looking for a property?
                  </p>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    Explore our available properties in Arabian City, Lahore.
                  </p>

                  <Link
                    href="/properties"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-teal-700 transition hover:text-teal-800"
                  >
                    Browse Properties
                    <ArrowLeft
                      size={16}
                      className="rotate-180"
                    />
                  </Link>
                </div>
              </div>

              {/* CONTACT FORM */}
              <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
                {submitted ? (
                  <div className="flex min-h-[500px] flex-col items-center justify-center text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-50 text-teal-700">
                      <CheckCircle2 size={32} />
                    </div>

                    <h2 className="mt-6 text-2xl font-bold text-gray-900">
                      Message Received
                    </h2>

                    <p className="mt-3 max-w-md text-sm leading-6 text-gray-500">
                      Thank you for contacting Apki Manzil. Your message has
                      been submitted successfully.
                    </p>

                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-6 rounded-xl bg-teal-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-800"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <div>
                      <p className="text-sm font-bold uppercase tracking-widest text-teal-700">
                        Send a Message
                      </p>

                      <h2 className="mt-3 text-2xl font-bold text-gray-900 sm:text-3xl">
                        Tell us what you need
                      </h2>

                      <p className="mt-3 text-sm leading-6 text-gray-500">
                        Fill out the form below and we&apos;ll get back to you
                        regarding your property enquiry.
                      </p>
                    </div>

                    <form
                      onSubmit={handleSubmit}
                      className="mt-8 space-y-5"
                    >
                      {/* NAME */}
                      <div>
                        <label
                          htmlFor="name"
                          className="mb-2 block text-sm font-semibold text-gray-800"
                        >
                          Full Name
                        </label>

                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          placeholder="Enter your name"
                          className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
                        />
                      </div>

                      {/* EMAIL */}
                      <div>
                        <label
                          htmlFor="email"
                          className="mb-2 block text-sm font-semibold text-gray-800"
                        >
                          Email Address
                        </label>

                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="you@gmail.com"
                          className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
                        />
                      </div>

                      {/* PHONE */}
                      <div>
                        <label
                          htmlFor="phone"
                          className="mb-2 block text-sm font-semibold text-gray-800"
                        >
                          Phone Number
                        </label>

                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          placeholder="+92 xxx xxxxxxx"
                          className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
                        />
                      </div>

                      {/* INTEREST */}
                      <div>
                        <label
                          htmlFor="interest"
                          className="mb-2 block text-sm font-semibold text-gray-800"
                        >
                          I&apos;m Interested In
                        </label>

                        <select
                          id="interest"
                          name="interest"
                          required
                          defaultValue=""
                          className="w-full appearance-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
                        >
                          <option value="" disabled>
                            Select an option
                          </option>
                          <option value="buy">Buying a Property</option>
                          <option value="rent">Renting a Property</option>
                          <option value="list">Listing a Property</option>
                          <option value="general">General Enquiry</option>
                        </select>
                      </div>

                      {/* MESSAGE */}
                      <div>
                        <label
                          htmlFor="message"
                          className="mb-2 block text-sm font-semibold text-gray-800"
                        >
                          Message
                        </label>

                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          placeholder="Tell us what you are looking for..."
                          className="w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
                        />
                      </div>

                      {/* SUBMIT */}
                      <button
                        type="submit"
                        className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-teal-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-800 active:scale-[0.99]"
                      >
                        <Send size={17} />
                        Send Message
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
