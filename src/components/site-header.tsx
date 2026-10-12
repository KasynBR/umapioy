"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Activity, Menu, Search, X } from "lucide-react";
import { useState } from "react";
const links=[["Characters","/characters"],["Support cards","/supports"],["Skills","/skills"]];
export function SiteHeader(){const path=usePathname();const [open,setOpen]=useState(false);return <header className="header"><Link className="brand" href="/"><span className="brand-icon"><Activity size={19}/></span><span>umamusume<span className="brand-light"> atlas</span><small>COMMUNITY DATABASE</small></span></Link><button className="menu-toggle" onClick={()=>setOpen(!open)} aria-label="Toggle menu">{open?<X/>:<Menu/>}</button><nav className={open?"nav nav-open":"nav"}>{links.map(([label,url])=><Link onClick={()=>setOpen(false)} className={path===url||path.startsWith(url+"/")?"nav-link active":"nav-link"} href={url} key={url}>{label}</Link>)}<Link className="nav-search" href="/characters"><Search size={16}/> Explore database</Link></nav></header>}
