import Image from "next/image";
import Link from "next/link";
import {
  Award,
  CalendarCheck,
  ChevronRight,
  ExternalLink,
  HeartHandshake,
  Hospital,
  MapPin,
  MessageCircle,
  Quote,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  UserRound,
} from "lucide-react";
import { photoHighlights } from "./site-content";

const WHATSAPP_URL = "https://wa.me/5534991054002";
const MAPS_URL =
  "https://www.google.com/maps/place/Dr.+Christiano+Marinho/data=!4m2!3m1!1s0x0:0xfb8df0e0b83065fe?sa=X&ved=1t:2428&ictx=111";
const MAPS_EMBED_URL = "https://www.google.com/maps?q=Dr.%20Christiano%20Marinho%20Uberaba&output=embed";
const INSTAGRAM_URL = "https://www.instagram.com/marinhoctbmf/";
const FACEBOOK_URL = "https://www.facebook.com/christiano.m.correia?locale=pt_BR";
const YOUTUBE_URL = "https://www.youtube.com/@marinhoctbmf";
const X_URL = "https://x.com/marinhoctbmf?s=20";

const navItems = [
  { href: "#sobre", label: "Sobre" },
  { href: "#atuacao", label: "Atuação" },
  { href: "/galeria", label: "Galeria" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
];

const stats = [
  { value: "1990", label: "formação em Odontologia pela UNIUBE" },
  { value: "1995", label: "início como professor do curso de Odontologia" },
  { value: "CTBMF", label: "especialista pelo Colégio Brasileiro" },
];

const services = [
  {
    title: "Cirurgia oral",
    description:
      "Avaliação e condução de procedimentos cirúrgicos odontológicos com planejamento, técnica e orientação clara.",
    icon: ShieldCheck,
  },
  {
    title: "Dentes inclusos",
    description:
      "Avaliação de terceiros molares e outros dentes inclusos, considerando exames, riscos, indicações e recuperação.",
    icon: UserRound,
  },
  {
    title: "Infecções odontogênicas",
    description:
      "Atendimento de quadros infecciosos de origem odontológica, com atenção à gravidade, conduta clínica e necessidade de intervenção.",
    icon: Hospital,
  },
  {
    title: "Patologia bucal",
    description:
      "Investigação de alterações, lesões e sinais na cavidade oral, com olhar especializado em estomatologia.",
    icon: Stethoscope,
  },
  {
    title: "Cirurgia ortognática",
    description:
      "Avaliação de casos que envolvem harmonia facial, função mastigatória, mordida e planejamento cirúrgico integrado.",
    icon: ShieldCheck,
  },
  {
    title: "Implantes dentários",
    description:
      "Planejamento cirúrgico para reabilitação com implantes, considerando estrutura óssea, segurança e previsibilidade.",
    icon: UserRound,
  },
  {
    title: "ATM",
    description:
      "Avaliação de alterações relacionadas à articulação temporomandibular e orientação de conduta adequada para cada caso.",
    icon: Stethoscope,
  },
  {
    title: "Trauma de face",
    description:
      "Atuação em casos que envolvem traumatismos faciais, com experiência clínica, acadêmica e hospitalar.",
    icon: Hospital,
  },
];

const officeHours = [
  "Segunda a sexta: 08h às 18h",
  "Sábados: geralmente reservados para procedimentos cirúrgicos",
  "Feriados e fins de semana: fechado, com atenção a emergências",
];

const socialLinks = [
  { label: "Instagram", href: INSTAGRAM_URL },
  { label: "Facebook", href: FACEBOOK_URL },
  { label: "YouTube", href: YOUTUBE_URL },
  { label: "Twitter/X", href: X_URL },
];

const credentials = [
  "Cirurgião-dentista formado pela UNIUBE em 1990.",
  "Ex-residente da Santa Casa de Misericórdia de São Paulo.",
  "Especialista em CTBMF pelo Colégio Brasileiro de CTBMF.",
  "Mestre em Cirurgia pelo Hospital Heliópolis/SP.",
  "Doutor em Estomatologia pela UNESP/Araçatuba.",
  "Professor do curso de Odontologia da UNIUBE desde 1995.",
  "Cirurgião-dentista do HC/UFTM/Ebserh.",
];

const testimonialPlaceholders = [
  "Atendimento com acolhimento",
  "Orientação clara ao paciente",
  "Cuidado antes, durante e após o procedimento",
];

function SocialIcon({ label }: { label: string }) {
  if (label === "Instagram") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="none">
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
        <circle cx="17" cy="7" r="1.2" fill="currentColor" />
      </svg>
    );
  }

  if (label === "YouTube") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="none">
        <rect x="2.8" y="6.5" width="18.4" height="11" rx="3.2" stroke="currentColor" strokeWidth="2" />
        <path d="M10.5 9.4 15.2 12l-4.7 2.6V9.4Z" fill="currentColor" />
      </svg>
    );
  }

  if (label === "Facebook") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="none">
        <path
          d="M14.2 8.2h2.3V4.5h-2.9c-3.1 0-4.8 1.9-4.8 4.9v2.1H6v3.8h2.8V21h4.1v-5.7h3.1l.6-3.8h-3.7V9.7c0-1 .4-1.5 1.3-1.5Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="none">
      <path d="M5 4h4.2l10 16H15L5 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M19 4 5 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/8 bg-[#f7f6f2]/92 backdrop-blur-xl">
      <div className="container-page flex min-h-20 items-center justify-between gap-4 py-3">
        <a href="#" className="flex min-w-0 items-center gap-3">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-[#303030]">
            <Image src="/images/brand/iso-branco.png" alt="" width={56} height={56} className="h-full w-full object-cover" />
          </span>
          <span className="min-w-0">
            <span className="block truncate text-base font-black tracking-[-0.03em] text-[#242424] sm:text-lg">
              Dr. Christiano Marinho
            </span>
            <span className="block truncate text-xs font-semibold uppercase tracking-[0.18em] text-[#6a6861]">
              Buco-Maxilo-Facial
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 text-sm font-semibold text-[#5d5a54] lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-[#242424]">
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={WHATSAPP_URL}
          data-analytics-event="click_whatsapp"
          data-analytics-label="header"
          className="hidden shrink-0 items-center gap-2 rounded-full bg-[#303030] px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-black md:inline-flex"
        >
          Agendar <MessageCircle size={17} />
        </a>
      </div>
      <div className="container-page flex gap-2 overflow-x-auto pb-3 lg:hidden">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} className="shrink-0 rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-bold text-[#4d4a45]">
            {item.label}
          </a>
        ))}
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero-surface">
      <div className="container-page grid items-center gap-8 py-8 sm:py-10 lg:min-h-[calc(100vh-8rem)] lg:grid-cols-[1.02fr_0.98fr] lg:py-14">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#5f5a52]">
            <Sparkles size={15} /> Uberaba/MG
          </div>
          <h1 className="mobile-safe-text text-[2.55rem] font-black leading-[0.98] tracking-[-0.035em] text-[#242424] sm:text-6xl sm:tracking-[-0.055em] lg:text-7xl">
            Cirurgia buco-maxilo-facial com experiência, clareza e cuidado humano.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5b5750] sm:text-xl sm:leading-9">
            O Dr. Christiano Marinho Correia une trajetória clínica, atuação acadêmica e experiência hospitalar para conduzir avaliações e procedimentos com segurança e explicação direta ao paciente.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={WHATSAPP_URL} data-analytics-event="click_whatsapp" data-analytics-label="hero" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#303030] px-6 py-4 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-black sm:text-base">
              Agendar avaliação <MessageCircle size={18} />
            </a>
            <a href="#sobre" className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-6 py-4 text-sm font-black text-[#303030] transition hover:-translate-y-0.5 sm:text-base">
              Conhecer trajetória <ChevronRight size={18} />
            </a>
          </div>
          <div className="mt-9 grid gap-3 sm:grid-cols-3">
            {stats.map((item) => (
              <div key={item.value} className="rounded-2xl border border-black/7 bg-white/76 p-4 shadow-sm">
                <p className="text-2xl font-black tracking-[-0.04em] text-[#242424]">{item.value}</p>
                <p className="mt-1 text-sm leading-5 text-[#67635d]">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-[1.5rem] border border-white/70 bg-white p-2 shadow-xl sm:rounded-[2rem]">
            <Image
              src="/images/marinho/hero-christiano.webp"
              alt="Dr. Christiano Marinho Correia no consultório"
              width={1200}
              height={1600}
              priority
              className="h-[410px] w-full rounded-[1.15rem] object-cover object-[center_32%] sm:h-[500px] sm:rounded-[1.55rem] lg:h-[560px]"
            />
          </div>
          <div className="relative mx-auto mt-3 w-[calc(100%-1rem)] rounded-2xl bg-[#303030] p-4 text-center text-white shadow-2xl sm:ml-auto sm:mr-0 sm:w-[360px] sm:p-5 sm:text-left">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/55">Atendimento especializado</p>
            <p className="mobile-safe-text mt-2 text-lg font-black leading-tight tracking-[-0.025em] sm:text-xl sm:tracking-[-0.035em]">Experiência clínica, acadêmica e hospitalar.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionTitle({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="mb-10 max-w-3xl md:mb-14">
      <p className="text-xs font-black uppercase tracking-[0.2em] text-[#77736b]">{eyebrow}</p>
      <h2 className="mobile-safe-text mt-3 text-3xl font-black leading-[1.06] tracking-[-0.025em] text-[#242424] sm:text-4xl sm:tracking-[-0.05em] md:text-6xl">{title}</h2>
      {description ? <p className="mt-5 text-lg leading-8 text-[#625e57]">{description}</p> : null}
    </div>
  );
}

function About() {
  return (
    <section id="sobre" className="section-pad surface-grid">
      <div className="container-page grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] bg-[#303030] p-7 text-white md:p-10">
          <Image src="/images/brand/logo-original.png" alt="Dr. Christiano Marinho" width={430} height={120} className="max-w-[280px] rounded-xl bg-white p-3" />
          <h2 className="mobile-safe-text mt-10 text-3xl font-black leading-tight tracking-[-0.025em] md:text-5xl md:tracking-[-0.045em]">
            Uma trajetória construída entre consultório, hospital e sala de aula.
          </h2>
          <p className="mt-6 text-base leading-8 text-white/72">
            Uma atuação construída com formação sólida, experiência hospitalar e comunicação acessível para orientar cada paciente com clareza.
          </p>
        </div>
        <div className="rounded-[2rem] border border-black/7 bg-white p-7 shadow-sm md:p-10">
          <p className="text-lg leading-9 text-[#3f3d38] md:text-xl">
            O Dr. Christiano Marinho Correia é cirurgião-dentista formado pela UNIUBE em 1990, especialista em Cirurgia e Traumatologia Buco-Maxilo-Facial e com atuação também em Estomatologia.
          </p>
          <p className="mt-6 text-lg leading-9 text-[#3f3d38] md:text-xl">
            É ex-residente da Santa Casa de Misericórdia de São Paulo, mestre em Cirurgia pelo Hospital Heliópolis/SP e doutor em Estomatologia pela UNESP/Araçatuba.
          </p>
          <p className="mt-6 text-lg leading-9 text-[#3f3d38] md:text-xl">
            Além da atuação clínica, é professor do curso de Odontologia da UNIUBE desde 1995 e cirurgião-dentista do HC/UFTM/Ebserh, unindo experiência, formação acadêmica e cuidado humano no atendimento aos pacientes.
          </p>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="atuacao" className="section-pad surface-grid bg-[#efeee9]">
      <div className="container-page">
        <SectionTitle
          eyebrow="Áreas de atuação"
          title="Atuação especializada em cirurgia e diagnóstico oral."
          description="Avaliação cuidadosa, planejamento individualizado e condução técnica para diferentes necessidades cirúrgicas e odontológicas."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {services.map(({ title, description, icon: Icon }) => (
            <article key={title} className="rounded-[1.5rem] border border-black/7 bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#303030] text-white">
                <Icon size={23} />
              </div>
              <h3 className="mt-5 text-xl font-black leading-tight tracking-[-0.035em] text-[#242424]">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-[#625e57]">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Credentials() {
  return (
    <section className="section-pad surface-grid">
      <div className="container-page grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <SectionTitle
            eyebrow="Formação e experiência"
            title="Formação sólida e experiência clínica."
            description="Uma trajetória construída entre consultório, hospital, docência e pesquisa acadêmica."
          />
        </div>
        <div className="grid gap-3">
          {credentials.map((item, index) => (
            <div key={item} className="flex gap-4 rounded-2xl border border-black/7 bg-white p-5 shadow-sm">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#303030] text-sm font-black text-white">{index + 1}</span>
              <p className="text-base font-semibold leading-7 text-[#3f3d38]">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="galeria" className="section-pad bg-[#303030] text-white">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/8">
          <Image
            src="/images/marinho/gallery/marinho-58.webp"
            alt="Identidade visual do consultorio do Dr. Christiano Marinho"
            fill
            sizes="100vw"
            className="object-cover opacity-54"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#303030] via-[#303030]/82 to-[#303030]/24" />
          <div className="relative grid gap-8 p-7 md:p-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="w-fit rounded-full bg-white px-3 py-1.5 text-xs font-black uppercase tracking-[0.14em] text-[#303030]">
                Acervo autorizado
              </p>
              <h2 className="mobile-safe-text mt-5 max-w-2xl text-3xl font-black leading-[1.06] tracking-[-0.025em] sm:text-4xl sm:tracking-[-0.05em] md:text-6xl">
                Galeria com registros reais do consultório.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-white/76 md:text-lg">
                Uma área própria para fotos de atendimento, bastidores, procedimentos e histórias de pacientes com autorização.
              </p>
              <Link href="/galeria" data-analytics-event="click_galeria" data-analytics-label="home_cta" className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-black text-[#303030] transition hover:-translate-y-0.5 sm:text-base">
                Abrir galeria completa <ChevronRight size={18} />
              </Link>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {photoHighlights.map((item) => (
                <div key={item} className="rounded-2xl border border-white/12 bg-black/24 p-4 backdrop-blur-sm">
                  <p className="text-sm font-semibold leading-6 text-white/78">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="depoimentos" className="section-pad surface-grid">
      <div className="container-page grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="rounded-[2rem] border border-black/7 bg-white p-7 shadow-sm md:p-10">
          <Quote size={34} className="text-[#303030]" />
          <h2 className="mobile-safe-text mt-6 text-3xl font-black leading-[1.06] tracking-[-0.025em] text-[#242424] sm:text-4xl sm:tracking-[-0.05em] md:text-5xl">
            Experiências conduzidas com cuidado e responsabilidade.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#625e57]">
            A relação com o paciente envolve escuta, explicação clara e acompanhamento responsável em cada etapa do tratamento.
          </p>
        </div>
        <div className="grid gap-3">
          {testimonialPlaceholders.map((item) => (
            <div key={item} className="flex min-w-0 gap-4 rounded-2xl bg-[#efeee9] p-5">
              <HeartHandshake className="mt-1 shrink-0 text-[#303030]" size={23} />
              <div className="min-w-0">
                <p className="mobile-safe-text font-black text-[#242424]">{item}</p>
                <p className="mt-1 text-sm leading-6 text-[#625e57]">
                  Comunicação cuidadosa, respeitando a privacidade e a individualidade de cada caso.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contato" className="section-pad surface-grid">
      <div className="container-page overflow-hidden rounded-[2rem] bg-[#303030] text-white">
        <div className="grid lg:grid-cols-[1fr_0.9fr]">
          <div className="p-7 md:p-12">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-white/50">Contato</p>
            <h2 className="mobile-safe-text mt-4 text-3xl font-black leading-[1.06] tracking-[-0.025em] md:text-6xl md:tracking-[-0.05em]">
              Contato direto, localização e canais oficiais.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68">
              Agendamentos, localização, horários e dados profissionais em um único lugar para facilitar o contato do paciente.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={WHATSAPP_URL} data-analytics-event="click_whatsapp" data-analytics-label="contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-black text-[#303030] transition hover:-translate-y-0.5 sm:text-base">
                Chamar no WhatsApp <MessageCircle size={18} />
              </a>
              <a href={MAPS_URL} data-analytics-event="click_maps" data-analytics-label="contact_button" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/18 px-6 py-4 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-white/10 sm:text-base">
                Ver no Google Maps <ExternalLink size={18} />
              </a>
            </div>
            <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-white/12 bg-white/8 shadow-2xl">
              <iframe
                title="Localização do consultório do Dr. Christiano Marinho no Google Maps"
                src={MAPS_EMBED_URL}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-72 w-full border-0 grayscale md:h-80"
              />
            </div>
          </div>
          <div className="grid gap-3 bg-white/7 p-7 md:p-12">
            <div className="rounded-2xl bg-white/10 p-5">
              <MapPin size={23} />
              <p className="mt-4 font-black">Localização</p>
              <p className="mt-1 text-sm text-white/62">Dr. Christiano Marinho no Google Maps.</p>
              <a href={MAPS_URL} data-analytics-event="click_maps" data-analytics-label="route_link" target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-black text-white underline-offset-4 hover:underline">
                Abrir rota <ExternalLink size={15} />
              </a>
            </div>
            <div className="rounded-2xl bg-white/10 p-5">
              <CalendarCheck size={23} />
              <p className="mt-4 font-black">Horários de atendimento</p>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-white/62">
                {officeHours.map((hour) => (
                  <li key={hour}>{hour}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-white/10 p-5">
              <Award size={23} />
              <p className="mt-4 font-black">CRO e dados cadastrais</p>
              <p className="mt-1 text-sm text-white/62">CROMG 20957</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-5">
              <HeartHandshake size={23} />
              <p className="mt-4 font-black">Redes sociais</p>
              <p className="mt-1 text-sm text-white/62">Canais para acompanhar conteúdos, orientações e novidades do consultório.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {socialLinks.map(({ label, href }) => {
                  const content = (
                    <>
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/12">
                        <SocialIcon label={label} />
                      </span>
                      {label}
                    </>
                  );

                  return href ? (
                    <a
                      key={label}
                      href={href}
                      data-analytics-event="click_social"
                      data-analytics-label={label}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/14 px-3 py-2 text-xs font-black text-white/82 transition hover:-translate-y-0.5 hover:bg-white/10"
                    >
                      {content}
                    </a>
                  ) : (
                    <span key={label} className="inline-flex items-center gap-2 rounded-full border border-white/14 px-3 py-2 text-xs font-black text-white/50">
                      {content}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-black/7 py-8">
      <div className="container-page grid gap-5 text-sm text-[#625e57] md:grid-cols-[1fr_1.2fr]">
        <div className="flex min-w-0 items-center gap-3">
          <span className="flex h-11 w-11 shrink-0 overflow-hidden rounded-xl bg-[#303030]">
            <Image src="/images/brand/iso-branco.png" alt="" width={52} height={52} className="h-full w-full object-cover" />
          </span>
          <div className="min-w-0">
            <p className="truncate font-black text-[#242424]">Dr. Christiano Marinho Correia</p>
            <p>Cirurgia e Traumatologia Buco-Maxilo-Facial</p>
          </div>
        </div>
        <p className="leading-7 md:text-right">
          As informações deste site têm caráter informativo e não substituem avaliação profissional individualizada. Diagnóstico, indicação de tratamento e conduta clínica dependem de consulta.
        </p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Services />
      <Credentials />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
