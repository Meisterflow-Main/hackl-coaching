import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import CookieBanner from "./CookieBanner";

export default function SiteLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      <CookieBanner />
    </div>
  );
}