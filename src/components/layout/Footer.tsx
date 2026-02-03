// components/layout/Footer.tsx
import Link from "next/link";

import {
  Facebook,
  Instagram,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black/85 text-slate-300">
      
      {/* Payment & Shipping */}
      {/* <div className="border-b border-slate-800">
        <div className="container mx-auto px-4 py-8">
          <div className="grid gap-6 md:grid-cols-2">
            
            <div>
              <p className="mb-4 text-sm font-semibold text-white">
                Payment System
              </p>
              <div className="flex flex-wrap gap-3">
                {["visa", "mastercard", "upi", "paytm"].map((item) => (
                  <Image
                    key={item}
                    src={`/payments/${item}.png`}
                    alt={item}
                    width={48}
                    height={30}
                  />
                ))}
              </div>
            </div>

            <div>
              <p className="mb-4 text-sm font-semibold text-white">
                Shipping Partners
              </p>
              <div className="flex flex-wrap gap-3">
                {["bluedart", "delhivery", "ekart"].map((item) => (
                  <Image
                    key={item}
                    src={`/shipping/${item}.png`}
                    alt={item}
                    width={70}
                    height={30}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>
      </div> */}

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">

          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold text-white">
              The Aqua Lifescape
            </h3>
            <p className="mt-4 text-sm leading-relaxed">
              Beautiful aquascapes in your home or business can
              create peace and harmony, helping you escape daily stress.
            </p>

            <div className="mt-6 flex gap-4">
              <Facebook className="h-5 w-5 cursor-pointer hover:text-white" />
              <Instagram className="h-5 w-5 cursor-pointer hover:text-white" />
            </div>
          </div>

          {/* Categories Column 1 */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">
              Product Categories
            </h4>
            <ul className="space-y-2 text-sm">
              {["Lights", "Filters", "Soil", "Fertilizers", "CO2"].map(
                (item) => (
                  <li key={item}>
                    <Link href="#" className="hover:text-white">
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Categories Column 2 */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">
              More Products
            </h4>
            <ul className="space-y-2 text-sm">
              {["Plants", "Food", "Accessories", "Aquarium", "Terrarium"].map(
                (item) => (
                  <li key={item}>
                    <Link href="#" className="hover:text-white">
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {["Home", "Shop", "About", "Blog", "My Account"].map(
                (item) => (
                  <li key={item}>
                    <Link href="#" className="hover:text-white">
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">
              Contact Us
            </h4>

            <ul className="space-y-3 text-sm">
              <li className="flex gap-2">
                <Phone className="h-4 w-4" /> +91 88957 71074
              </li>
              <li className="flex gap-2">
                <Mail className="h-4 w-4" /> theaquascapelife@gmail.com
              </li>
              <li className="flex gap-2">
                <MapPin className="h-4 w-4" />
                Vasai, Maharashtra, India
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto flex flex-col gap-4 px-4 py-6 text-sm md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} The Aqua Lifescape. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-4">
            {[
              "Privacy Policy",
              "Terms & Conditions",
              "Refund Policy",
              "Shipping Policy",
            ].map((item) => (
              <Link
                key={item}
                href="#"
                className="hover:text-white"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
}
