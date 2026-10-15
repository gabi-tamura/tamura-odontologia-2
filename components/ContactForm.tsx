"use client";
import { useState, type FormEvent } from "react";
import { ArrowUpRight, Send, MessageCircle } from "lucide-react";
import { whatsappLink } from "@/data/business";
export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("Agendar uma avaliação");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const msg = `Olá! Vim através do site da Tamura Odontologia.\n\nNome: ${name.trim()}\nTelefone: ${phone.trim()}\nAssunto: ${subject}\n\nMensagem:\n${message.trim()}`;
    const url = whatsappLink(msg);
    if (!url) {
      setStatus(
        "WhatsApp ainda não configurado. Por favor, entre em contato pelo telefone informado.",
      );
      return;
    }
    setStatus(
      "Seu WhatsApp será aberto com a mensagem preenchida. Confira e envie a mensagem no aplicativo.",
    );
    window.open(url, "_blank", "noopener,noreferrer");
  }
  return (
    <form onSubmit={submit} className="contactForm">
      <div className="formTwo">
        <label>
          Seu nome *
          <input
            required
            autoComplete="name"
            maxLength={100}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Como podemos chamar você?"
          />
        </label>
        <label>
          Telefone *
          <input
            type="tel"
            required
            autoComplete="tel"
            maxLength={22}
            minLength={8}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="(11) 99999-9999"
          />
        </label>
      </div>
      <label>
        Assunto
        <select value={subject} onChange={(e) => setSubject(e.target.value)}>
          <option>Agendar uma avaliação</option>
          <option>Informações sobre tratamentos</option>
          <option>Horários e localização</option>
          <option>Outro assunto</option>
        </select>
      </label>
      <label>
        Sua mensagem *
        <textarea
          required
          minLength={4}
          maxLength={1200}
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Conte brevemente como podemos ajudar..."
        />
      </label>
      <button className="button buttonDark formSubmit" type="submit">
        <MessageCircle size={19} /> Enviar pelo WhatsApp{" "}
        <ArrowUpRight size={18} />
      </button>
      <p className="formNote">
        Ao clicar, você será direcionado ao WhatsApp. Nenhuma mensagem é enviada
        automaticamente. Não inclua dados sensíveis de saúde neste formulário.
      </p>
      {status && (
        <p className="formStatus" role="status">
          <Send size={16} />
          {status}
        </p>
      )}
    </form>
  );
}
