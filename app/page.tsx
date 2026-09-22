"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Home as HomeIcon,
  ShieldCheck,
  Sparkles,
  Trees,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import PropertyCard from "@/components/PropertyCard";
import SectionHeading from "@/components/SectionHeading";
import { properties } from "@/data/properties";

const categories = [
  {
    title: "Houses",
    description: "Family homes & villas",
    icon: HomeIcon,
  },
  {
    title: "Apartments",
    description: "Modern urban living",
    icon: Building2,
  },
  {
    title: "Plots",
    description: "Build your future",
    icon: Trees,
  },
  {
  title: "Farmhouse",
  description: "Luxury farmhouses & countryside properties",
  icon: Building2,
  },
];

const benefits = [
  {
    icon: ShieldCheck,
    title: "Trusted Listings",
    description: "Explore properties with clear and useful information.",
  },
  {
    icon: CheckCircle2,
    title: "Easy Search",
    description: "Find properties by type, price and your requirements.",
  },
  {
    icon: Sparkles,
    title: "Better Choices",
    description: "Explore spaces that fit your lifestyle and needs.",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden">
        {/* HERO */}
        <section className="relative min-h-[600px] bg-gray-950 sm:min-h-[650px]">
          <Image
            src="/images/WhatsApp Image 2026-09-21 at 3.11.56 PM (5).jpeg"
            alt="Property in Arabian City Lahore"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/55" />

          <Container className="relative z-10 flex min-h-[600px] items-center py-16 sm:min-h-[650px] sm:py-20">
            <div className="w-full max-w-4xl">
              <div className="max-w-3xl">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur">
                  <Sparkles size={16} />
                  Find your perfect place
                </div>

                <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                  Your next chapter starts with the right{" "}
                  <span className="text-teal-400">home.</span>
                </h1>

                <p className="mt-5 max-w-2xl text-base leading-7 text-gray-200 sm:text-lg sm:leading-8">
                  Discover homes, apartments, plots and farmhouse properties
                  in Arabian City, Lahore.
                </p>

                {/* HERO ACTIONS */}
                <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:w-auto">
                  <Link
                    href="/properties"
                    className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-teal-700 px-6 py-3 text-sm font-bold text-white transition hover:bg-teal-800 active:scale-[0.98] sm:w-auto"
                  >
                    Explore Properties
                    <ArrowRight size={18} />
                  </Link>

                  <Link
                    href="/contact"
                    className="flex min-h-12 w-full items-center justify-center rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20 active:scale-[0.98] sm:w-auto"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>

            </div>
          </Container>
        </section>

        {/* FEATURED */}
        <section className="bg-white py-16 sm:py-20">
          <Container>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <SectionHeading
                eyebrow="Featured"
                title="Properties worth exploring"
                description="Explore some of the properties available in Arabian City."
              />

              <Link
                href="/properties"
                className="flex w-fit items-center gap-2 text-sm font-bold text-teal-700 transition hover:text-teal-800"
              >
                View all properties
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {properties.slice(0, 3).map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </Container>
        </section>

       {/* LOCATION */}
        <section className="bg-gray-50 py-16 sm:py-20">
          <Container>
            <SectionHeading
              eyebrow="Location"
              title="Find Us in Arabian City"
              description="Explore our location in Arabian City, Lahore."
              center
            />

            <div className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
              {/* Google Map */}
              <div className="h-[320px] w-full sm:h-[420px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3396.563939107238!2d74.4693983!3d31.645787700000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919118acaeb011f%3A0x661056b0a816b3dc!2sARABIAN%20CITY!5e0!3m2!1sen!2s!4v1789970685413!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="Apki Manzil - Arabian City Lahore"
                />
              </div>

              {/* Location Information */}
              <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Arabian City, Lahore
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    Lahore, Pakistan
                  </p>
                </div>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=31.645787700000003,74.4693983"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-11 w-full items-center justify-center rounded-xl bg-teal-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-800 active:scale-[0.98] sm:w-auto"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </Container>
        </section>

        {/* CATEGORIES */}
        <section className="bg-white py-16 sm:py-20">
          <Container>
            <SectionHeading
              eyebrow="Property Types"
              title="Find the right type of property"
              description="Explore houses, apartments, plots and farmhouses properties in Arabian City."
            />

            <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
              {categories.map((category) => {
                const Icon = category.icon;

                return (
                  <Link
                    href="/properties"
                    key={category.title}
                    className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-7"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-700 transition group-hover:bg-teal-700 group-hover:text-white">
                      <Icon size={23} />
                    </div>

                    <h3 className="mt-5 font-bold text-gray-900">
                      {category.title}
                    </h3>

                    <p className="mt-2 text-sm leading-5 text-gray-500">
                      {category.description}
                    </p>

                    <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-teal-700">
                      Explore
                      <ArrowRight size={14} />
                    </div>
                  </Link>
                );
              })}
            </div>
          </Container>
        </section>

        {/* WHY US */}
        <section className="bg-gray-950 py-16 sm:py-20">
          <Container>
            <SectionHeading
              eyebrow="Why Apki Manzil"
              title="A simpler way to discover property"
              description="A straightforward way to explore your next property in Arabian City."
            />

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <div
                    key={benefit.title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-7"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-700 text-white">
                      <Icon size={22} />
                    </div>

                    <h3 className="mt-5 text-lg font-bold text-white">
                      {benefit.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-gray-400">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="bg-teal-700 py-16 sm:py-20">
          <Container>
            <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-bold uppercase tracking-widest text-teal-100">
                  Your next move
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Ready to find your next property?
                </h2>

                <p className="mt-4 text-sm leading-6 text-teal-50 sm:text-base">
                  Explore available properties in Arabian City or get in touch
                  with our team.
                </p>
              </div>

              <Link
                href="/properties"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-teal-700 transition hover:bg-gray-100 active:scale-[0.98] sm:w-auto"
              >
                Explore Properties
                <ArrowRight size={17} />
              </Link>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}