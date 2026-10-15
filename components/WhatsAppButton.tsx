"use client";
import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/data/business";
export default function WhatsAppButton(){const link=whatsappLink("Olá! Encontrei vocês pelo site e gostaria de mais informações.");if(!link)return null;return <a className="floatingWhats" href={link} target="_blank" rel="noopener noreferrer" aria-label="Conversar pelo WhatsApp"><MessageCircle size={25}/></a>}
