import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
export const metadata: Metadata = { title: "Umamusume Atlas — Community Database", description: "Explore Umamusume characters, support cards, and skills." };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body><SiteHeader />{children}<footer className="footer"><span>UMAMUSUME ATLAS</span><span>Unofficial fan-made database · Demo data may be incomplete</span></footer></body></html>; }
