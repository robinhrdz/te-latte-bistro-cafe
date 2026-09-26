import { useState } from "react";
import { DecorativeLine } from "../app/components/common/DecorativeLine";
import { Wave } from "../app/components/common/Wave";
import { Btn } from "../app/components/common/Btn";
import { MapPinIcon, ClockIcon, PhoneIcon, InstagramIcon, FacebookIcon } from "../app/components/icons";

export function ContactoPage() {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const fields = [
    { id: "nombre" as const, label: "Tu nombre", type: "text" },
    { id: "email" as const, label: "Correo electrónico", type: "email" },
  ];

  const infoItems = [
    {
      icon: <MapPinIcon />,
      label: "Dirección",
      value: "Calle Café 123, Col. Centro\nCiudad de México, CDMX",
    },
    {
      icon: <ClockIcon />,
      label: "Horario",
      value: "Lun – Vie: 7:00am – 9:00pm\nSáb – Dom: 8:00am – 10:00pm",
    },
    {
      icon: <PhoneIcon />,
      label: "Teléfono",
      value: "+52 (55) 1234-5678",
    },
  ];

  return (
    <div className="min-h-screen pt-20 bg-background">
      {/* Header */}
      <div className="bg-card py-16 px-6 text-center">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-accent font-semibold mb-3">
          — Estamos aquí para ti —
        </p>
        <h1 className="font-display text-5xl md:text-6xl text-foreground font-bold mb-4">Contacto</h1>
        <DecorativeLine className="max-w-xs mx-auto" />
      </div>

      <Wave containerClass="bg-card" fillClass="text-background" />

      <div className="max-w-5xl mx-auto px-6 py-16 pb-0">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <div className="flex flex-col gap-10">
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">Encuéntranos</h2>
              <div className="flex flex-col gap-6">
                {infoItems.map(({ icon, label, value }) => (
                  <div key={label} className="flex gap-4 items-start">
                    <div className="text-primary mt-0.5 shrink-0">{icon}</div>
                    <div>
                      <p className="font-body font-semibold text-foreground text-sm mb-1">{label}</p>
                      <p className="font-body text-muted-foreground text-sm whitespace-pre-line leading-relaxed">
                        {value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-display font-bold text-foreground mb-4">Síguenos en redes</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { Icon: <InstagramIcon />, handle: "@telattecafe" },
                  { Icon: <FacebookIcon />, handle: "Te Latte Bistro" },
                ].map(({ Icon, handle }) => (
                  <div
                    key={handle}
                    className="flex items-center gap-2.5 bg-card px-4 py-3 rounded-xl border border-border/50 hover:bg-muted transition-colors cursor-pointer"
                  >
                    <span className="text-primary">{Icon}</span>
                    <span className="font-body text-sm font-medium text-foreground">{handle}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-card rounded-3xl p-8 shadow-sm border border-border/40">
            {sent ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-5">☕</div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                  ¡Mensaje enviado!
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed max-w-xs mx-auto">
                  Gracias por escribirnos. Nos pondremos en contacto contigo muy pronto con una taza bien caliente lista.
                </p>
                <Btn onClick={() => setSent(false)} variant="outline" className="mt-8">
                  Enviar otro mensaje
                </Btn>
              </div>
            ) : (
              <>
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">Escríbenos</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {fields.map(({ id, label, type }) => (
                    <div key={id}>
                      <label
                        htmlFor={id}
                        className="font-body text-sm font-semibold text-foreground block mb-1.5"
                      >
                        {label}
                      </label>
                      <input
                        id={id}
                        type={type}
                        value={form[id]}
                        onChange={(e) => setForm({ ...form, [id]: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background font-body text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                        required
                      />
                    </div>
                  ))}
                  <div>
                    <label
                      htmlFor="mensaje"
                      className="font-body text-sm font-semibold text-foreground block mb-1.5"
                    >
                      Mensaje
                    </label>
                    <textarea
                      id="mensaje"
                      rows={4}
                      value={form.mensaje}
                      onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background font-body text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none"
                      required
                    />
                  </div>
                  <Btn type="submit" className="w-full py-4 text-base mt-1">
                    Enviar Mensaje
                  </Btn>
                </form>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="mt-20">
        <Wave containerClass="bg-background" fillClass="text-foreground" />
      </div>
    </div>
  );
}
