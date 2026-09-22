import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import {
  SiFacebook,
  SiInstagram,
  SiTiktok,
  SiYoutube,
} from "react-icons/si";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-950 text-white">
      <Container className="py-10 sm:py-12">
        <div className="grid gap-8 sm:gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="min-w-0 md:col-span-2">
            <Link
              href="/"
              className="inline-flex items-center gap-2"
              aria-label="Apki Manzil Home"
            >
             <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-xl sm:h-10 sm:w-10">
              <Image
                src="/images/logo.jpeg"
                alt="Apki Manzil Logo"
                fill
                sizes="40px"
                className="object-cover"
                priority
              />
            </div>

              <span className="text-xl font-bold tracking-tight">
                Apki <span className="text-teal-400">Manzil</span>
              </span>
            </Link>

            <p className="mt-4 max-w-md text-sm leading-6 text-gray-400">
              Find houses, apartments, plots and commercial properties in
              Arabian City, Lahore with Apki Manzil.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
              Explore
            </h3>

            <nav className="mt-4 flex flex-col gap-1" aria-label="Footer navigation">
              <Link
                href="/"
                className="flex min-h-10 items-center rounded-lg text-sm text-gray-400 transition hover:text-green-500"
              >
                Home
              </Link>

              <Link
                href="/properties"
                className="flex min-h-10 items-center rounded-lg text-sm text-gray-400 transition hover:text-green-500"
              >
                Properties
              </Link>

              <Link
                href="/contact"
                className="flex min-h-10 items-center rounded-lg text-sm text-gray-400 transition hover:text-green-500"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
              Contact
            </h3>

            <div className="mt-4 space-y-3 text-sm text-gray-400">
              <p className="leading-6">
                Arabian City, Lahore, Pakistan
              </p>

              <a
                href="tel:+923067706730"
                className="block break-words transition hover:text-green-500"
              >
                +92 306 7706730
              </a>

              <a
                href="mailto:apkimanzil@gmail.com"
                className="block break-all transition hover:text-green-500"
              >
                apkimanzil.official@gmail.com
              </a>
            </div>
          </div>
        </div>
            
        {/* Social Media */}
          <div className="mt-10 border-t border-gray-800 pt-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
                  Follow Us
                </h3>

              <div className="flex flex-wrap items-center gap-2 mt-3">

                <a
                  href="https://www.youtube.com/@apkimanzil.com1"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Apki Manzil on YouTube"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-gray-400 transition hover:bg-[#FF0000] hover:text-white active:scale-95"
                >
                  <SiYoutube size={20} />
                </a>

                <a
                  href="https://www.instagram.com/apkimanzil.official/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Apki Manzil on Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-gray-400 transition hover:bg-[#E4405F] hover:text-white active:scale-95"
                >
                  <SiInstagram size={19} />
                </a>

                <a
                  href="https://www.facebook.com/apkimanzil.com1?notif_id=1789561312645635&notif_t=profile_plus_admin_invite&ref=notif"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Apki Manzil on Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-gray-400 transition hover:bg-[#1877F2] hover:text-white active:scale-95"
                >
                  <SiFacebook size={19} />
                </a>

                <a
                  href="https://www.tiktok.com/@apkimanzil"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Apki Manzil on TikTok"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-gray-400 transition hover:bg-black hover:text-white active:scale-95"
                >
                  <SiTiktok size={19} />
                </a>
              </div>
            </div>
          </div>
        </div>


        {/* Bottom */}
        <div className="mt-8 border-t border-gray-800 pt-6 sm:mt-10">
          <div className="flex flex-col gap-3 text-sm text-white-500 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} Apki Manzil. All rights reserved.
            </p>

            <p>Arabian City, Lahore</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}