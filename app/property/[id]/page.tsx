import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Bath,
  BedDouble,
  CheckCircle2,
  Home,
  Mail,
  MapPin,
  Maximize,
  Phone,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/data/properties";

type PropertyDetailsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function PropertyDetailsPage({
  params,
}: PropertyDetailsPageProps) {
  const { id } = await params;

  const property = properties.find(
    (item) => item.id === id
  );

  if (!property) {
    notFound();
  }

  const relatedProperties = properties
    .filter((item) => item.id !== property.id)
    .slice(0, 3);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50">
        {/* HEADER */}
        <section className="bg-white">
          <Container className="py-6 sm:py-8">
            <Link
              href="/properties"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition hover:text-teal-700"
            >
              <ArrowLeft size={17} />
              Back to Properties
            </Link>
          </Container>
        </section>

        {/* PROPERTY */}
        <section className="pb-12 sm:pb-16">
          <Container>
            <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">
              {/* IMAGE */}
              <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    priority
                    className="object-cover"
                  />

                  <div className="absolute left-4 top-4 rounded-full bg-white px-4 py-2 text-xs font-bold text-teal-700 shadow sm:left-6 sm:top-6">
                    {property.purpose}
                  </div>
                </div>
              </div>

              {/* DETAILS */}
              <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <MapPin
                    size={17}
                    className="text-teal-700"
                  />
                  {property.location}
                </div>

                <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  {property.title}
                </h1>

                <p className="mt-4 text-2xl font-bold text-teal-700 sm:text-3xl">
                  {property.price}
                </p>

                {/* STATS */}
                <div className="mt-7 grid grid-cols-3 gap-2 border-y border-gray-100 py-5">
                  <div className="text-center">
                    <BedDouble
                      size={20}
                      className="mx-auto text-teal-700"
                    />

                    <p className="mt-2 text-sm font-semibold text-gray-900">
                      {property.bedrooms > 0
                        ? property.bedrooms
                        : "—"}
                    </p>

                    <p className="mt-1 text-xs text-gray-500">
                      Bedrooms
                    </p>
                  </div>

                  <div className="border-x border-gray-100 text-center">
                    <Bath
                      size={20}
                      className="mx-auto text-teal-700"
                    />

                    <p className="mt-2 text-sm font-semibold text-gray-900">
                      {property.bathrooms > 0
                        ? property.bathrooms
                        : "—"}
                    </p>

                    <p className="mt-1 text-xs text-gray-500">
                      Bathrooms
                    </p>
                  </div>

                  <div className="text-center">
                    <Maximize
                      size={20}
                      className="mx-auto text-teal-700"
                    />

                    <p className="mt-2 text-sm font-semibold text-gray-900">
                      {property.area}
                    </p>

                    <p className="mt-1 text-xs text-gray-500">
                      Area
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <Link
                  href="/contact"
                  className="mt-7 flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-teal-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-800"
                >
                  <Mail size={17} />
                  Contact About This Property
                </Link>

                <a
                  href={`https://wa.me/923067706730?text=${encodeURIComponent(
                    `Hello Apki Manzil, I am interested in this property:\n\nProperty: ${property.title}\nLocation: ${property.location}\nPrice: ${property.price}\nArea: ${property.area}\n\nPlease provide more details.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-green-200 bg-green-50 px-5 py-3 text-sm font-semibold text-green-700 transition hover:bg-green-100 active:scale-[0.98]"
                >
                  <Phone size={17} />
                  WhatsApp About This Property
                </a>
              </div>
            </div>

            {/* DESCRIPTION + FEATURES */}
            <div className="mt-8 grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">
              {/* DESCRIPTION */}
              <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                    <Home size={20} />
                  </div>

                  <h2 className="text-xl font-bold text-gray-900">
                    Property Overview
                  </h2>
                </div>

                <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base">
                  {property.description}
                </p>

                <div className="mt-7 rounded-xl bg-gray-50 p-5">
                  <div className="flex items-start gap-3">
                    <MapPin
                      size={19}
                      className="mt-0.5 shrink-0 text-teal-700"
                    />

                    <div>
                      <p className="font-semibold text-gray-900">
                        Location
                      </p>

                      <p className="mt-1 text-sm text-gray-500">
                        {property.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FEATURES */}
              <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
                <h2 className="text-xl font-bold text-gray-900">
                  Property Features
                </h2>

                <div className="mt-5 space-y-3">
                  {property.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 rounded-xl bg-gray-50 px-4 py-3"
                    >
                      <CheckCircle2
                        size={18}
                        className="shrink-0 text-teal-700"
                      />

                      <span className="text-sm font-medium text-gray-700">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* RELATED PROPERTIES */}
        {relatedProperties.length > 0 && (
          <section className="border-t border-gray-200 bg-white py-12 sm:py-16">
            <Container>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest text-teal-700">
                    More Properties
                  </p>

                  <h2 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">
                    Explore More in Arabian City
                  </h2>
                </div>

                <Link
                  href="/properties"
                  className="text-sm font-semibold text-teal-700 transition hover:text-teal-800"
                >
                  View All Properties →
                </Link>
              </div>

              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {relatedProperties.map((item) => (
                  <PropertyCard
                    key={item.id}
                    property={item}
                  />
                ))}
              </div>
            </Container>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}