import {
  Bike,
  CalendarCheck,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Hospital,
  MapPin,
  Menu,
  MessageCircle,
  ShieldCheck,
  Smile,
  Sparkles,
  Stethoscope,
  UserRound,
} from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5500000000000";

function ToothIcon({ size = 25 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M8.2 3.2c1.6 0 2.4.8 3.8.8s2.2-.8 3.8-.8c2.7 0 4.7 2.2 4.2 5.7-.4 2.8-1.8 5.1-2.5 7.5-.8 2.7-1.2 4.4-2.7 4.4-1.3 0-1.6-1.7-2.1-3.6-.2-.8-.5-1.4-.7-1.4s-.5.6-.7 1.4c-.5 1.9-.8 3.6-2.1 3.6-1.5 0-1.9-1.7-2.7-4.4-.7-2.4-2.1-4.7-2.5-7.5-.5-3.5 1.5-5.7 4.2-5.7Z" />
      <path d="M10.2 5.2c.7.4 1.1.6 1.8.6s1.1-.2 1.8-.6" />
    </svg>
  );
}

const quickFacts = [
  "Cirurgia bucomaxilofacial",
  "Atendimento em Uberaba/MG",
  "Linguagem clara para o paciente",
  "Perfil moderno, próximo e técnico",
];

const services = [
  {
    title: "Sisos e dentes inclusos",
    description:
      "Avaliação, planejamento e orientação para casos que exigem remoção cirúrgica ou acompanhamento especializado.",
    icon: ToothIcon,
  },
  {
    title: "Cirurgias bucais",
    description:
      "Procedimentos odontológicos cirúrgicos com comunicação objetiva antes, durante e depois da conduta.",
    icon: Stethoscope,
  },
  {
    title: "Traumas e alterações faciais",
    description:
      "Avaliação especializada de condições envolvendo face, mandíbula, maxila e estruturas relacionadas.",
    icon: ShieldCheck,
  },
  {
    title: "Biópsias e lesões bucais",
    description:
      "Investigação de alterações na cavidade oral com orientação cuidadosa e encaminhamento quando necessário.",
    icon: ClipboardCheck,
  },
  {
    title: "Ambiente hospitalar",
    description:
      "Integração com ambiente hospitalar e outros profissionais em casos que pedem condução ampliada.",
    icon: Hospital,
  },
  {
    title: "Avaliação bucomaxilofacial",
    description:
      "Análise de sintomas, exames e histórico para definir o melhor caminho de cuidado para cada pessoa.",
    icon: UserRound,
  },
];

const values = [
  "Consulta sem linguagem complicada",
  "Planejamento técnico e visual",
  "Cuidado ético, direto e humano",
  "Ambiente alinhado à identidade cinza do consultório",
  "Presença digital leve, sem cara de clínica antiga",
  "Contato simples por WhatsApp",
];

const faq = [
  {
    question: "Quando procurar um bucomaxilo?",
    answer:
      "Quando há indicação para cirurgia de siso, cirurgias bucais, traumas, lesões na boca, alterações ósseas ou encaminhamento de outro profissional.",
  },
  {
    question: "A avaliação já define o tratamento?",
    answer:
      "A consulta ajuda a entender o caso, avaliar exames e orientar possibilidades. A conduta depende da avaliação individual.",
  },
  {
    question: "Todo siso precisa ser removido?",
    answer:
      "Não. A indicação depende da posição, sintomas, histórico, exames de imagem e risco de complicações.",
  },
  {
    question: "O site já está com dados finais?",
    answer:
      "Não. Esta é uma prévia visual. CRO, endereço, WhatsApp e detalhes do atendimento devem ser validados antes da publicação oficial.",
  },
];

function LogoMark({ className = "" }: { className?: string }) {
  return (
    <div
      className={`logo-shadow flex items-center justify-center overflow-hidden rounded-[1.35rem] bg-[#303030] ${className}`}
    >
      <svg
        viewBox="0 0 100 100"
        aria-label="Logo do Dr. Christiano Marinho Correia"
        className="h-full w-full"
      >
        <rect width="100" height="100" rx="0" fill="#303030" />
        <path
          d="M33 18c7-7 17 6 32 1 10-3 15 2 15 13 0 24-8 43-24 55-9 7-24 7-31 1-5-5-3-14 5-16 8-2 18 1 26-7-9-4-24 1-28-5-3-5 2-9 8-8 8 1 19 5 28-1-9-8-26 0-31-6-4-5 2-9 9-9 8 0 19-3 18-12-10 5-18 3-25 3-7 0-8-4-2-9Z"
          fill="#ffffff"
        />
      </svg>
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f4f4f2]/82 backdrop-blur-2xl">
      <div className="container-page flex h-20 items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <LogoMark className="h-11 w-11 rounded-2xl" />
          <div>
            <span className="block text-[11px] font-semibold uppercase tracking-[0.28em] text-[#7b7b78]">
              Bucomaxilo Uberaba
            </span>
            <span className="text-base font-bold tracking-[-0.03em] text-[#252525] md:text-lg">
              Dr. Christiano Marinho Correia
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-7 text-sm font-medium text-[#595957] md:flex">
          <a className="transition hover:text-[#202020]" href="#sobre">Sobre</a>
          <a className="transition hover:text-[#202020]" href="#atuacao">Atuação</a>
          <a className="transition hover:text-[#202020]" href="#experiencia">Experiência</a>
          <a className="transition hover:text-[#202020]" href="#contato">Contato</a>
        </nav>

        <a
          href={WHATSAPP_URL}
          className="hidden rounded-full bg-[#2f2f2f] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#111] md:inline-flex"
        >
          Agendar avaliação
        </a>

        <button
          className="rounded-full border border-black/10 bg-white p-3 text-[#252525] md:hidden"
          aria-label="Abrir menu"
        >
          <Menu size={20} />
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="soft-grid relative overflow-hidden pb-20 pt-12 md:pb-28 md:pt-20">
      <div className="absolute left-1/2 top-4 -z-10 h-[430px] w-[430px] -translate-x-1/2 rounded-full bg-white blur-3xl" />
      <div className="container-page grid items-center gap-10 lg:grid-cols-[1.06fr_0.94fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/8 bg-white/75 px-4 py-2 text-sm font-semibold text-[#4c4c4a] shadow-sm">
            <Sparkles size={16} />
            Moderno, técnico e próximo
          </div>

          <h1 className="max-w-4xl text-5xl font-black leading-[0.94] tracking-[-0.07em] text-[#242424] md:text-7xl">
            Bucomaxilo com clareza, precisão e leveza.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5d5d5a] md:text-xl">
            Uma presença digital mais fiel ao perfil do Dr. Christiano: técnico
            quando precisa, direto na explicação e com uma comunicação moderna,
            humana e sem cara de consultório antigo.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2f2f2f] px-7 py-4 text-base font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#111]"
            >
              Agendar avaliação <MessageCircle size={18} />
            </a>
            <a
              href="#atuacao"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white/75 px-7 py-4 text-base font-bold text-[#2f2f2f] transition hover:-translate-y-0.5 hover:bg-white"
            >
              Ver atuação <ChevronRight size={18} />
            </a>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {quickFacts.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-black/6 bg-white/70 p-4 text-sm font-semibold text-[#494947]"
              >
                <CheckCircle2 size={18} className="text-[#303030]" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card relative rounded-[2.2rem] p-4">
          <div className="rounded-[1.8rem] bg-[#303030] p-7 text-white">
            <div className="flex items-start justify-between gap-5">
              <LogoMark className="h-24 w-24 rounded-[1.8rem]" />
              <div className="rounded-full border border-white/10 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                Conceito visual
              </div>
            </div>
            <h2 className="mt-10 text-4xl font-black leading-[0.98] tracking-[-0.05em]">
              Menos formalidade fria. Mais confiança real.
            </h2>
            <p className="mt-5 leading-7 text-white/72">
              A ideia é tirar a comunicação do padrão “doutor distante” e
              aproximar o paciente sem perder autoridade. Cinza, limpo, moderno,
              com identidade própria.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="rounded-3xl bg-white/9 p-5">
                <Bike className="text-white/80" />
                <p className="mt-4 font-bold">Perfil ativo</p>
                <p className="mt-1 text-sm leading-6 text-white/60">
                  Uma marca que pode conversar com energia, movimento e leveza.
                </p>
              </div>
              <div className="rounded-3xl bg-white/9 p-5">
                <Smile className="text-white/80" />
                <p className="mt-4 font-bold">Tom humano</p>
                <p className="mt-1 text-sm leading-6 text-white/60">
                  Sério no cuidado, mas sem parecer engessado ou antigo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="text-sm font-black uppercase tracking-[0.28em] text-[#777774]">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-4xl font-black tracking-[-0.055em] text-[#242424] md:text-6xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-lg leading-8 text-[#62625f]">{description}</p>
      ) : null}
    </div>
  );
}

function About() {
  return (
    <section id="sobre" className="py-20">
      <div className="container-page grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[2.2rem] bg-[#2f2f2f] p-8 text-white md:p-10">
          <LogoMark className="h-20 w-20" />
          <p className="mt-10 text-sm font-bold uppercase tracking-[0.28em] text-white/55">
            Sobre o profissional
          </p>
          <h2 className="mt-5 text-4xl font-black leading-tight tracking-[-0.05em]">
            Um site com cara de quem conversa bem com gente.
          </h2>
          <p className="mt-6 leading-8 text-white/70">
            O visual antigo colocava autoridade, mas deixava o site pesado. Esta
            versão tenta representar melhor um profissional moderno, alegre,
            ativo e seguro tecnicamente.
          </p>
        </div>

        <div className="glass-card rounded-[2.2rem] p-8 md:p-10">
          <p className="text-xl leading-9 text-[#454542]">
            O Dr. Christiano Marinho Correia atua em Cirurgia e Traumatologia
            Buco-Maxilo-Faciais, com foco em avaliação, planejamento e condução
            de casos cirúrgicos odontológicos e bucomaxilofaciais.
          </p>
          <p className="mt-6 text-xl leading-9 text-[#454542]">
            A comunicação do site deve transmitir segurança sem parecer distante:
            explicar o que o paciente precisa saber, mostrar organização e abrir
            caminho para o contato de forma simples.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {["Claro", "Moderno", "Humano"].map((item) => (
              <div key={item} className="rounded-3xl bg-white p-5 shadow-sm">
                <CheckCircle2 size={22} />
                <p className="mt-4 text-lg font-black tracking-[-0.02em] text-[#242424]">
                  {item}
                </p>
              </div>
            ))}
          </div>
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
          title="O que o paciente procura precisa aparecer rápido."
          description="Estrutura pensada para SEO local e para quem chega pelo Google querendo entender se está no lugar certo."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="group rounded-[1.8rem] border border-black/6 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#303030] text-white">
                <Icon size={25} />
              </div>
              <h3 className="mt-6 text-2xl font-black tracking-[-0.035em] text-[#242424]">
                {title}
              </h3>
              <p className="mt-3 leading-7 text-[#62625f]">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experiencia" className="py-20">
      <div className="container-page overflow-hidden rounded-[2.6rem] bg-[#303030] text-white">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
          <div className="p-8 md:p-12">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-white/55">
              Experiência do paciente
            </p>
            <h2 className="mt-5 text-4xl font-black leading-[1.02] tracking-[-0.055em] md:text-6xl">
              Visual de consultório moderno, não de cartão antigo.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/70">
              A paleta cinza pode ser elegante sem ficar triste. O segredo é usar
              contraste, respiro, bordas grandes, textos diretos e um tom mais
              vivo.
            </p>
          </div>
          <div className="grid gap-4 bg-white/5 p-8 md:p-12">
            {values.map((item) => (
              <div key={item} className="flex gap-4 rounded-3xl bg-white/9 p-5">
                <CheckCircle2 className="mt-1 shrink-0 text-white" size={22} />
                <p className="text-lg font-semibold leading-7 text-white/82">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="py-20">
      <div className="container-page">
        <SectionTitle
          eyebrow="Dúvidas frequentes"
          title="Perguntas simples. Respostas sem enrolação."
        />
        <div className="mx-auto grid max-w-4xl gap-4">
          {faq.map((item) => (
            <details
              key={item.question}
              className="group rounded-3xl border border-black/6 bg-white p-6 shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-black tracking-[-0.02em] text-[#242424]">
                {item.question}
                <ChevronRight className="shrink-0 transition group-open:rotate-90" size={20} />
              </summary>
              <p className="mt-4 leading-8 text-[#62625f]">{item.answer}</p>
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
      <div className="container-page glass-card overflow-hidden rounded-[2.6rem]">
        <div className="grid lg:grid-cols-[1fr_0.86fr]">
          <div className="p-8 md:p-12">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#777774]">
              Contato
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.055em] text-[#242424] md:text-6xl">
              Um caminho rápido para agendar.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#62625f]">
              Aqui entram WhatsApp real, endereço, mapa, horários e informações
              confirmadas pelo consultório.
            </p>

            <div className="mt-8 grid gap-4">
              <div className="flex gap-4 rounded-3xl bg-white p-5 shadow-sm">
                <MapPin className="shrink-0 text-[#303030]" />
                <div>
                  <p className="font-black text-[#242424]">Uberaba/MG</p>
                  <p className="text-[#62625f]">Endereço do consultório a confirmar</p>
                </div>
              </div>
              <div className="flex gap-4 rounded-3xl bg-white p-5 shadow-sm">
                <CalendarCheck className="shrink-0 text-[#303030]" />
                <div>
                  <p className="font-black text-[#242424]">Atendimento com horário marcado</p>
                  <p className="text-[#62625f]">Rotina e canais oficiais a validar</p>
                </div>
              </div>
            </div>

            <a
              href={WHATSAPP_URL}
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#2f2f2f] px-7 py-4 text-base font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#111] sm:w-auto"
            >
              Chamar no WhatsApp <MessageCircle size={18} />
            </a>
          </div>

          <div className="bg-[#303030] p-8 text-white md:p-12">
            <div className="flex h-full min-h-[360px] flex-col justify-between rounded-[2rem] border border-white/10 bg-white/8 p-7">
              <div>
                <LogoMark className="h-24 w-24" />
                <p className="mt-8 text-sm uppercase tracking-[0.28em] text-white/55">
                  Dados finais
                </p>
                <h3 className="mt-4 text-3xl font-black tracking-[-0.04em]">
                  CRO, mapa e WhatsApp entram depois da validação.
                </h3>
              </div>
              <p className="mt-10 leading-7 text-white/65">
                Prévia conceitual. As informações clínicas e cadastrais devem ser
                revisadas pelo profissional antes de qualquer publicação oficial.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-black/6 py-10">
      <div className="container-page grid gap-6 text-sm text-[#62625f] md:grid-cols-[1fr_1.4fr]">
        <div className="flex items-center gap-3">
          <LogoMark className="h-11 w-11 rounded-2xl" />
          <div>
            <p className="font-black text-[#242424]">Dr. Christiano Marinho Correia</p>
            <p>Cirurgia Buco-Maxilo-Facial • Uberaba/MG</p>
          </div>
        </div>
        <p className="leading-7 md:text-right">
          As informações deste site têm caráter informativo e não substituem
          avaliação profissional individualizada. Diagnóstico, indicação de
          tratamento e conduta clínica dependem de consulta e análise do caso.
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
      <Experience />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
