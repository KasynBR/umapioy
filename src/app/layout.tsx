import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
export const metadata: Metadata = { title: "Umamusume Atlas — The Tachyon Project", description: "A community-powered Umamusume: Pretty Derby reference. Browse the live character index, support cards, skills, and race planning tools.", metadataBase: new URL("https://agnesbot.xyz"), openGraph: { title: "Umamusume Atlas", description: "Your research desk for every runner, card, skill, and race.", type: "website" } };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body><SiteHeader />{children}<footer className="footer"><span>UMAMUSUME ATLAS · TACHYON PROJECT</span><span>Unofficial community resource · Game rights belong to Cygames</span><a href="/sources">Data sources & methodology ↗</a></footer></body></html>; }
