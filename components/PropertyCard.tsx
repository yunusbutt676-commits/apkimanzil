import Image from "next/image";
import Link from "next/link";
import {
  Bath,
  BedDouble,
  MapPin,
  Maximize,
} from "lucide-react";
import type { Property } from "@/data/properties";

type PropertyCardProps = {
  property: Property;
};

export default function PropertyCard({
  property,
}: PropertyCardProps) {
  return (
    <Link
      href={`/property/${property.id}`}
      className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-teal-700 shadow">
          {property.purpose}
        </div>
      </div>

      <div className="p-5">
        <p className="text-xl font-bold text-gray-900">
          {property.price}
        </p>

        <h3 className="mt-2 text-lg font-semibold text-gray-900">
          {property.title}
        </h3>

        <div className="mt-2 flex items-center gap-1 text-sm text-gray-500">
          <MapPin size={15} className="text-teal-700" />
          {property.location}
        </div>

        <div className="mt-5 grid grid-cols-3 gap-2 border-t border-gray-100 pt-4 text-sm text-gray-500">
          <div className="flex items-center gap-1.5">
            <BedDouble size={16} />
            {property.bedrooms}
          </div>

          <div className="flex items-center gap-1.5">
            <Bath size={16} />
            {property.bathrooms}
          </div>

          <div className="flex items-center gap-1.5">
            <Maximize size={16} />
            {property.area}
          </div>
        </div>
      </div>
    </Link>
  );
}