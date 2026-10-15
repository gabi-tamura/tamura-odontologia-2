"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="mobileMenu">
      <button
        className="menuToggle"
        type="button"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>
      {open && (
        <nav aria-label="Menu mobile" className="mobileLinks">
          {[
            ["Sobre", "#sobre"],
            ["Atendimento", "#atendimento"],
            ["Espaço", "#espaco"],
            ["Localização", "#localizacao"],
            ["Contato", "#contato"],
          ].map(([t, l]) => (
            <a href={l} key={l} onClick={() => setOpen(false)}>
              {t}
            </a>
          ))}
        </nav>
      )}
    </div>
  );
}
