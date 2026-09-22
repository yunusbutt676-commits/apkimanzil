"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  ArrowLeft,
  Building2,
  ChevronDown,
  Filter,
  Home,
  MapPin,
  RotateCcw,
  Search,
} from "lucide-react";
import { useMemo, useState } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/data/properties";

const propertyTypes = [
  "Any Type",
  "Farmhouse",
  "House",
  "Apartment",
  "Plot",
];

const priceOptions = [
  "Any Price",
  "Under PKR 1 Crore",
  "PKR 1–2 Crore",
  "PKR 2–5 Crore",
  "Above PKR 5 Crore",
];

const purposeOptions = ["All", "Buy"];

export default function PropertiesPage() {
  const searchParams = useSearchParams();

  const initialPurpose = searchParams.get("purpose") || "Buy";
  const initialType = searchParams.get("type") || "Any Type";
  const initialPrice = searchParams.get("price") || "Any Price";

  const [purpose, setPurpose] = useState(initialPurpose);
  const [propertyType, setPropertyType] = useState(initialType);
  const [price, setPrice] = useState(initialPrice);

  const [typeOpen, setTypeOpen] = useState(false);
  const [priceOpen, setPriceOpen] = useState(false);

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      /* PURPOSE FILTER */
      const purposeMatch =
        purpose === "All" ||
        (purpose === "Buy" && property.purpose === "For Sale");

      /* TYPE FILTER */
      const typeMatch =
        propertyType === "Any Type" ||
        property.type === propertyType;

      /* PRICE FILTER */
      let priceMatch = true;

      switch (price) {
        case "Under PKR 1 Crore":
          priceMatch = property.priceValue < 10_000_000;
          break;

        case "PKR 1–2 Crore":
          priceMatch =
            property.priceValue >= 10_000_000 &&
            property.priceValue <= 20_000_000;
          break;

        case "PKR 2–5 Crore":
          priceMatch =
            property.priceValue > 20_000_000 &&
            property.priceValue <= 50_000_000;
          break;

        case "Above PKR 5 Crore":
          priceMatch = property.priceValue > 50_000_000;
          break;

        case "Any Price":
        default:
          priceMatch = true;
      }

      return purposeMatch && typeMatch && priceMatch;
    });
  }, [purpose, propertyType, price]);

  const resetFilters = () => {
    setPurpose("All");
    setPropertyType("Any Type");
    setPrice("Any Price");
    setTypeOpen(false);
    setPriceOpen(false);
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
                Explore Properties
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
                Browse houses, apartments, plots and farmhouses
                available in Arabian City, Lahore.
              </p>
            </div>
          </Container>
        </section>

        {/* FILTERS */}
        <section className="border-b border-gray-200 bg-white">
          <Container className="py-5">
            <div className="flex items-center gap-2">
              <Filter
                size={18}
                className="text-teal-700"
              />

              <p className="font-semibold text-gray-900">
                Filter Properties
              </p>
            </div>

            <div className="mt-4 grid gap-3 md:grid-cols-4">
              {/* PURPOSE */}
              <div className="flex min-h-12 rounded-xl border border-gray-200 bg-gray-50 p-1">
                {purposeOptions.map((option) => {
                  const active = purpose === option;

                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setPurpose(option)}
                      className={`flex-1 rounded-lg px-2 py-2 text-xs font-semibold transition sm:text-sm ${
                        active
                          ? "bg-teal-700 text-white shadow-sm"
                          : "text-gray-600 hover:bg-white"
                      }`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>

              {/* TYPE */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => {
                    setTypeOpen((open) => !open);
                    setPriceOpen(false);
                  }}
                  className="flex min-h-12 w-full items-center justify-between rounded-xl border border-gray-200 bg-white px-4 text-left transition hover:border-teal-500"
                  aria-expanded={typeOpen}
                  aria-haspopup="listbox"
                >
                  <div className="flex items-center gap-3">
                    <Home
                      size={17}
                      className="text-teal-700"
                    />

                    <div>
                      <p className="text-[11px] text-gray-400">
                        Property Type
                      </p>

                      <p className="text-sm font-semibold text-gray-800">
                        {propertyType}
                      </p>
                    </div>
                  </div>

                  <ChevronDown
                    size={17}
                    className={`text-gray-400 transition ${
                      typeOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {typeOpen && (
                  <div
                    className="absolute left-0 top-[calc(100%+8px)] z-50 w-full min-w-[190px] overflow-hidden rounded-xl border border-gray-200 bg-white p-1.5 shadow-xl"
                    role="listbox"
                  >
                    {propertyTypes.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => {
                          setPropertyType(type);
                          setTypeOpen(false);
                        }}
                        className={`block w-full rounded-lg px-3 py-2.5 text-left text-sm transition ${
                          propertyType === type
                            ? "bg-teal-50 font-semibold text-teal-700"
                            : "text-gray-700 hover:bg-gray-50"
                        }`}
                        role="option"
                        aria-selected={propertyType === type}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* PRICE */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => {
                    setPriceOpen((open) => !open);
                    setTypeOpen(false);
                  }}
                  className="flex min-h-12 w-full items-center justify-between rounded-xl border border-gray-200 bg-white px-4 text-left transition hover:border-teal-500"
                  aria-expanded={priceOpen}
                  aria-haspopup="listbox"
                >
                  <div className="flex items-center gap-3">
                    <Building2
                      size={17}
                      className="text-teal-700"
                    />

                    <div>
                      <p className="text-[11px] text-gray-400">
                        Price
                      </p>

                      <p className="text-sm font-semibold text-gray-800">
                        {price}
                      </p>
                    </div>
                  </div>

                  <ChevronDown
                    size={17}
                    className={`text-gray-400 transition ${
                      priceOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {priceOpen && (
                  <div
                    className="absolute left-0 top-[calc(100%+8px)] z-50 w-full min-w-[220px] overflow-hidden rounded-xl border border-gray-200 bg-white p-1.5 shadow-xl"
                    role="listbox"
                  >
                    {priceOptions.map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => {
                          setPrice(option);
                          setPriceOpen(false);
                        }}
                        className={`block w-full rounded-lg px-3 py-2.5 text-left text-sm transition ${
                          price === option
                            ? "bg-teal-50 font-semibold text-teal-700"
                            : "text-gray-700 hover:bg-gray-50"
                        }`}
                        role="option"
                        aria-selected={price === option}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* RESET */}
              <button
                type="button"
                onClick={resetFilters}
                className="flex min-h-12 items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 text-sm font-semibold text-gray-600 transition hover:border-teal-200 hover:bg-teal-50 hover:text-teal-700"
              >
                <RotateCcw size={16} />
                Reset Filters
              </button>
            </div>
          </Container>
        </section>

        {/* RESULTS */}
        <section className="py-12 sm:py-16">
          <Container>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-teal-700">
                  Arabian City
                </p>

                <h2 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">
                  Available Properties
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                  {filteredProperties.length}{" "}
                  {filteredProperties.length === 1
                    ? "property"
                    : "properties"}{" "}
                  found
                </p>
              </div>

              <div className="flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm text-gray-500 shadow-sm">
                <Search size={16} />

                {propertyType !== "Any Type"
                  ? propertyType
                  : "All Types"}
              </div>
            </div>

            {/* PROPERTY GRID */}
            {filteredProperties.length > 0 ? (
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredProperties.map((property) => (
                  <PropertyCard
                    key={property.id}
                    property={property}
                  />
                ))}
              </div>
            ) : (
              /* EMPTY STATE */
              <div className="mt-8 rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-16 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-teal-50 text-teal-700">
                  <Search size={24} />
                </div>

                <h3 className="mt-5 text-xl font-bold text-gray-900">
                  No properties found
                </h3>

                <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-gray-500">
                  No property matches your selected
                  filters. Try changing the property
                  type, price range or purpose.
                </p>

                <button
                  type="button"
                  onClick={resetFilters}
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-teal-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-800"
                >
                  <RotateCcw size={16} />
                  Reset Filters
                </button>
              </div>
            )}
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
