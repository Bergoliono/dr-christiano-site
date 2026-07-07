import {
  Award,
  Bone,
  CalendarCheck,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  GraduationCap,
  HeartPulse,
  Hospital,
  MapPin,
  Menu,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  UserRound,
} from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5500000000000";

const authority = [
  "Cirurgião-dentista",
  "Cirurgia e Traumatologia Buco-Maxilo-Faciais",
  "Mestre, Doutor e Professor",
  "Atendimento em Uberaba/MG",
];

const services = [
  {
    title: "Sisos inclusos",
    description:
      "Avaliação e planejamento cirúrgico para dentes inclusos ou com indicação de remoção especializada.",
    icon: Bone,
  },
  {
    title: "Cirurgias bucais",
    description:
      "Procedimentos cirúrgicos odontológicos conduzidos com planejamento, orientação e acompanhamento.",
    icon: Stethoscope,
  },
  {
    title: "Traumas faciais",
    description:
      "Avaliação especializada de alterações e lesões relacionadas à face e estruturas bucomaxilofaciais.",
    icon: ShieldCheck,
  },
  {
    title: "Biópsias e lesões bucais",
    description:
      "Investigação de alterações na cavidade oral com abordagem cuidadosa e orientação profissional.",
    icon: HeartPulse,
  },
  {
    title: "Atuação hospitalar",
    description:
      "Integração com ambiente hospitalar e outros profissionais quando o caso exige condução ampliada.",
    icon: Hospital,
  },
  {
    title: "Avaliação facial e óssea",
    description:
      "Análise de alterações em ossos, mandíbula, maxila e estruturas relacionadas à função e saúde oral.",
    icon: UserRound,
  },
];

const differentials = [
  "Experiência técnica e acadêmica",
  "Comunicação clara sobre diagnóstico e conduta",
  "Planejamento individualizado",
  "Prática ética e humanizada",
  "Integração com outros profissionais da saúde",
  "Foco em segurança e orientação ao paciente",
];

const faq = [
  {
    question: "Quando devo procurar um cirurgião bucomaxilofacial?",
    answer:
      "Quando houver indicação para cirurgias bucais, sisos inclusos, lesões na boca, traumas faciais, alterações ósseas ou encaminhamento de outro profissional.",
  },
  {
    question: "Toda extração de siso precisa de cirurgia?",
    answer:
      "Não. A necessidade de cirurgia depende da posição do dente, sintomas, exames de imagem e avaliação individualizada.",
  },
  {
    question: "A primeira consulta é uma avaliação?",
    answer:
      "Sim. Na avaliação são analisados histórico, queixa principal, exames disponíveis e possibilidades de conduta para o caso.",
  },
  {
    question: "O atendimento é particular ou por convênio?",
    answer:
      "Informação a confirmar com o consultório. Este campo pode ser ajustado conforme a forma real de atendimento.",
  },
];

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/40 bg-[#f8f5ef]/85 backdrop-blur-xl">
      <div className="container-page flex h-20 items-center justify-between">
        <a href="#" className="group">
          <span className="block text-sm uppercase tracking-[0.28em] text-[#a77d1d]">
            Bucomaxilo
          </span>
          <span className="text-lg font-semibold text-[#0c1f2e] md:text-xl">
            Dr. Christiano Marinho Correia
          </span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-[#314556] md:flex">
          <a className="transition hover:text-[#0c1f2e]" href="#sobre">Sobre</a>
          <a className="transition hover:text-[#0c1f2e]" href="#atuacao">Atuação</a>
          <a className="transition hover:text-[#0c1f2e]" href="#faq">Dúvidas</a>
          <a className="transition hover:text-[#0c1f2e]" href="#contato">Contato</a>
        </nav>

        <a
          href={WHATSAPP_URL}
          className="hidden rounded-full bg-[#0c1f2e] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#15344d] md:inline-flex"
        >
          Agendar avaliação
        </a>

        <button className="rounded-full border border-[#d9d1c4] p-3 text-[#0c1f2e] md:hidden" aria-label="Abrir menu">
          <Menu size={20} />
        </button>
      </div>
    </header>
  );
}

function SectionTitle({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#a77d1d]">{eyebrow}</p>
      <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[#0c1f2e] md:text-5xl">{title}</h2>
      {description ? <p className="mt-5 text-lg leading-8 text-[#526675]">{description}</p> : null}
    </div>
  );
}

function Hero() {
  return (
    <section className="overflow-hidden pb-20 pt-14 md:pb-28 md:pt-24">
      <div className="container-page grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#e2d6bf] bg-white/70 px-4 py-2 text-sm font-medium text-[#314556] shadow-sm">
            <Sparkles size={16} className="text-[#a77d1d]" />
            Atendimento especializado em Uberaba/MG
          </div>

          <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-[#0c1f2e] md:text-7xl">
            Cirurgia Buco-Maxilo-Facial em Uberaba
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#526675] md:text-xl">
            Atendimento especializado em procedimentos cirúrgicos odontológicos e bucomaxilofaciais, com abordagem técnica, ética e humanizada.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={WHATSAPP_URL} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0c1f2e] px-7 py-4 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#15344d]">
              Agendar avaliação <MessageCircle size={18} />
            </a>
            <a href="#atuacao" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#d9d1c4] bg-white/70 px-7 py-4 text-base font-semibold text-[#0c1f2e] transition hover:-translate-y-0.5 hover:bg-white">
              Conhecer atuação <ChevronRight size={18} />
            </a>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {authority.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl border border-[#eadfca] bg-white/65 p-4 text-sm font-medium text-[#314556]">
                <CheckCircle2 size={18} className="text-[#a77d1d]" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="soft-card rounded-[2.2rem] border border-white/70 bg-white p-4">
          <div className="overflow-hidden rounded-[1.7rem] bg-[#0c1f2e] p-8 text-white">
            <div className="gold-gradient mb-12 flex h-20 w-20 items-center justify-center rounded-3xl text-[#0c1f2e]">
              <GraduationCap size={38} />
            </div>
            <p className="text-sm uppercase tracking-[0.25em] text-[#f2df98]">Presença institucional</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em]">
              Autoridade profissional com comunicação clara para o paciente.
            </h2>
            <p className="mt-5 leading-7 text-white/75">
              Uma página própria ajuda pacientes e familiares a entenderem a atuação, localizarem o consultório e iniciarem contato de forma mais segura e organizada.
            </p>
            <div className="mt-10 rounded-3xl border border-white/10 bg-white/10 p-5">
              <div className="flex items-center gap-3">
                <Award className="text-[#f2df98]" />
                <div>
                  <p className="font-semibold">Perfil profissional</p>
                  <p className="text-sm text-white/65">Dados reais podem ser inseridos após validação.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="py-20">
      <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] border border-[#eadfca] bg-[#0c1f2e] p-8 text-white">
          <p className="text-sm uppercase tracking-[0.28em] text-[#f2df98]">Sobre</p>
          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em]">
            Formação, experiência e cuidado na condução de cada caso.
          </h2>
          <p className="mt-6 leading-8 text-white/75">
            Espaço reservado para inserir a biografia revisada, número de CRO, principais formações, atuação acadêmica e informações validadas pelo profissional.
          </p>
        </div>

        <div className="rounded-[2rem] border border-[#eadfca] bg-white p-8 soft-card">
          <p className="text-lg leading-9 text-[#405565]">
            O Dr. Christiano Marinho Correia é cirurgião-dentista com atuação em Cirurgia e Traumatologia Buco-Maxilo-Faciais. Sua trajetória combina experiência clínica, formação acadêmica e compromisso com uma prática baseada em diagnóstico, planejamento e conduta ética.
          </p>
          <p className="mt-6 text-lg leading-9 text-[#405565]">
            O atendimento é voltado para pacientes que necessitam de avaliação especializada em cirurgias bucais, dentes inclusos, lesões na cavidade oral, traumas faciais e outras condições relacionadas à região bucomaxilofacial.
          </p>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="atuacao" className="py-20">
      <div className="container-page">
        <SectionTitle
          eyebrow="Áreas de atuação"
          title="Atendimento especializado para diferentes necessidades"
          description="As informações abaixo são institucionais e devem ser confirmadas com o profissional antes da publicação final."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, description, icon: Icon }) => (
            <article key={title} className="rounded-[1.7rem] border border-[#eadfca] bg-white p-7 transition hover:-translate-y-1 hover:shadow-2xl">
              <div className="gold-gradient flex h-14 w-14 items-center justify-center rounded-2xl text-[#0c1f2e]">
                <Icon size={25} />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-[#0c1f2e]">{title}</h3>
              <p className="mt-3 leading-7 text-[#526675]">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhenToSeek() {
  const items = [
    "Siso incluso ou com indicação de remoção",
    "Dor, inchaço ou alteração persistente na boca",
    "Lesões bucais que precisam de investigação",
    "Trauma na face, mandíbula ou maxila",
    "Encaminhamento feito por outro dentista ou médico",
  ];

  return (
    <section className="py-20">
      <div className="container-page rounded-[2.5rem] bg-[#0c1f2e] p-8 text-white md:p-12">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#f2df98]">Quando procurar</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
              Alguns sinais indicam a necessidade de avaliação especializada.
            </h2>
          </div>
          <div className="grid gap-4">
            {items.map((item) => (
              <div key={item} className="flex gap-4 rounded-2xl border border-white/10 bg-white/10 p-5">
                <CircleHelp className="mt-1 shrink-0 text-[#f2df98]" size={22} />
                <p className="text-lg text-white/82">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Differentials() {
  return (
    <section className="py-20">
      <div className="container-page">
        <SectionTitle eyebrow="Diferenciais" title="Uma presença digital pensada para transmitir confiança" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {differentials.map((item) => (
            <div key={item} className="flex items-start gap-4 rounded-3xl border border-[#eadfca] bg-white p-6">
              <CheckCircle2 className="mt-1 shrink-0 text-[#a77d1d]" size={22} />
              <p className="text-lg font-medium leading-7 text-[#314556]">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="py-20">
      <div className="container-page">
        <SectionTitle eyebrow="Dúvidas frequentes" title="Informação clara antes da consulta" />
        <div className="mx-auto grid max-w-4xl gap-4">
          {faq.map((item) => (
            <details key={item.question} className="group rounded-3xl border border-[#eadfca] bg-white p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-[#0c1f2e]">
                {item.question}
                <ChevronRight className="shrink-0 transition group-open:rotate-90" size={20} />
              </summary>
              <p className="mt-4 leading-8 text-[#526675]">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contato" className="py-20">
      <div className="container-page overflow-hidden rounded-[2.5rem] border border-[#eadfca] bg-white soft-card">
        <div className="grid lg:grid-cols-[1fr_0.9fr]">
          <div className="p-8 md:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#a77d1d]">Contato</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[#0c1f2e] md:text-5xl">
              Agende uma avaliação ou tire dúvidas com a equipe.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#526675]">
              Este bloco pode receber WhatsApp real, telefone, endereço completo, horários de atendimento e mapa do consultório.
            </p>

            <div className="mt-8 grid gap-4">
              <div className="flex gap-4 rounded-3xl bg-[#f7f4ee] p-5">
                <MapPin className="shrink-0 text-[#a77d1d]" />
                <div>
                  <p className="font-semibold text-[#0c1f2e]">Uberaba/MG</p>
                  <p className="text-[#526675]">Endereço do consultório a confirmar</p>
                </div>
              </div>
              <div className="flex gap-4 rounded-3xl bg-[#f7f4ee] p-5">
                <CalendarCheck className="shrink-0 text-[#a77d1d]" />
                <div>
                  <p className="font-semibold text-[#0c1f2e]">Atendimento com horário marcado</p>
                  <p className="text-[#526675]">Informações ajustáveis conforme rotina do consultório</p>
                </div>
              </div>
            </div>

            <a href={WHATSAPP_URL} className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0c1f2e] px-7 py-4 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#15344d] sm:w-auto">
              Chamar no WhatsApp <MessageCircle size={18} />
            </a>
          </div>

          <div className="min-h-[360px] bg-[#0c1f2e] p-8 text-white md:p-12">
            <div className="flex h-full flex-col justify-between rounded-[2rem] border border-white/10 bg-white/10 p-7">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-[#f2df98]">Mapa</p>
                <h3 className="mt-4 text-3xl font-semibold">Espaço para Google Maps</h3>
                <p className="mt-4 leading-7 text-white/72">
                  Após confirmar o endereço, este bloco pode receber o mapa incorporado e informações de estacionamento ou referência.
                </p>
              </div>
              <div className="mt-10 rounded-3xl bg-white/10 p-5">
                <p className="text-sm text-white/65">Placeholder</p>
                <p className="mt-1 font-semibold">CRO-MG 00000</p>
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
    <footer className="border-t border-[#eadfca] py-10">
      <div className="container-page grid gap-6 text-sm text-[#526675] md:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="font-semibold text-[#0c1f2e]">Dr. Christiano Marinho Correia</p>
          <p className="mt-1">Cirurgia Buco-Maxilo-Facial • Uberaba/MG</p>
        </div>
        <p className="leading-7 md:text-right">
          As informações deste site têm caráter informativo e não substituem avaliação profissional individualizada. Diagnóstico, indicação de tratamento e conduta clínica dependem de consulta e análise do caso.
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
      <WhenToSeek />
      <Differentials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
