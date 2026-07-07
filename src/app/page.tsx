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
const LOGO_SRC = "data:image/png;base64,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";

function ToothIcon({ size = 25 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M8.2 3.2c1.6 0 2.4.8 3.8.8s2.2-.8 3.8-.8c2.7 0 4.7 2.2 4.2 5.7-.4 2.8-1.8 5.1-2.5 7.5-.8 2.7-1.2 4.4-2.7 4.4-1.3 0-1.6-1.7-2.1-3.6-.2-.8-.5-1.4-.7-1.4s-.5.6-.7 1.4c-.5 1.9-.8 3.6-2.1 3.6-1.5 0-1.9-1.7-2.7-4.4-.7-2.4-2.1-4.7-2.5-7.5-.5-3.5 1.5-5.7 4.2-5.7Z" />
      <path d="M10.2 5.2c.7.4 1.1.6 1.8.6s1.1-.2 1.8-.6" />
    </svg>
  );
}

const quickFacts = ["Cirurgia bucomaxilofacial", "Atendimento em Uberaba/MG", "Linguagem clara para o paciente", "Perfil moderno, próximo e técnico"];

const services = [
  { title: "Sisos e dentes inclusos", description: "Avaliação, planejamento e orientação para casos que exigem remoção cirúrgica ou acompanhamento especializado.", icon: ToothIcon },
  { title: "Cirurgias bucais", description: "Procedimentos odontológicos cirúrgicos com comunicação objetiva antes, durante e depois da conduta.", icon: Stethoscope },
  { title: "Traumas e alterações faciais", description: "Avaliação especializada de condições envolvendo face, mandíbula, maxila e estruturas relacionadas.", icon: ShieldCheck },
  { title: "Biópsias e lesões bucais", description: "Investigação de alterações na cavidade oral com orientação cuidadosa e encaminhamento quando necessário.", icon: ClipboardCheck },
  { title: "Ambiente hospitalar", description: "Integração com ambiente hospitalar e outros profissionais em casos que pedem condução ampliada.", icon: Hospital },
  { title: "Avaliação bucomaxilofacial", description: "Análise de sintomas, exames e histórico para definir o melhor caminho de cuidado para cada pessoa.", icon: UserRound },
];

const values = ["Consulta sem linguagem complicada", "Planejamento técnico e visual", "Cuidado ético, direto e humano", "Ambiente alinhado à identidade cinza do consultório", "Presença digital leve, sem cara de clínica antiga", "Contato simples por WhatsApp"];

const faq = [
  { question: "Quando procurar um bucomaxilo?", answer: "Quando há indicação para cirurgia de siso, cirurgias bucais, traumas, lesões na boca, alterações ósseas ou encaminhamento de outro profissional." },
  { question: "A avaliação já define o tratamento?", answer: "A consulta ajuda a entender o caso, avaliar exames e orientar possibilidades. A conduta depende da avaliação individual." },
  { question: "Todo siso precisa ser removido?", answer: "Não. A indicação depende da posição, sintomas, histórico, exames de imagem e risco de complicações." },
  { question: "O site já está com dados finais?", answer: "Não. Esta é uma prévia visual. CRO, endereço, WhatsApp e detalhes do atendimento devem ser validados antes da publicação oficial." },
];

function LogoMark({ className = "" }: { className?: string }) {
  return <div className={`logo-shadow flex shrink-0 items-center justify-center overflow-hidden rounded-[1.35rem] bg-[#303030] ${className}`}><img src={LOGO_SRC} alt="Logo do Dr. Christiano Marinho Correia" className="h-full w-full object-cover" /></div>;
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f4f4f2]/82 backdrop-blur-2xl">
      <div className="container-page flex h-16 min-w-0 items-center justify-between gap-3 md:h-20">
        <a href="#" className="flex min-w-0 flex-1 items-center gap-2 md:gap-3">
          <LogoMark className="h-9 w-9 rounded-2xl md:h-11 md:w-11" />
          <div className="min-w-0">
            <span className="block truncate text-[9px] font-semibold uppercase tracking-[0.16em] text-[#7b7b78] sm:text-[11px] sm:tracking-[0.28em]">Bucomaxilo Uberaba</span>
            <span className="block truncate text-sm font-bold tracking-[-0.03em] text-[#252525] sm:text-base md:text-lg">Dr. Christiano Marinho Correia</span>
          </div>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium text-[#595957] md:flex">
          <a className="transition hover:text-[#202020]" href="#sobre">Sobre</a>
          <a className="transition hover:text-[#202020]" href="#atuacao">Atuação</a>
          <a className="transition hover:text-[#202020]" href="#experiencia">Experiência</a>
          <a className="transition hover:text-[#202020]" href="#contato">Contato</a>
        </nav>
        <a href={WHATSAPP_URL} className="hidden rounded-full bg-[#2f2f2f] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#111] md:inline-flex">Agendar avaliação</a>
        <button className="shrink-0 rounded-full border border-black/10 bg-white p-2.5 text-[#252525] md:hidden" aria-label="Abrir menu"><Menu size={19} /></button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="soft-grid relative overflow-hidden pb-16 pt-10 md:pb-28 md:pt-20">
      <div className="pointer-events-none absolute left-1/2 top-4 -z-10 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-white blur-3xl md:h-[430px] md:w-[430px]" />
      <div className="container-page grid min-w-0 items-center gap-8 lg:grid-cols-[1.06fr_0.94fr] lg:gap-10">
        <div className="min-w-0">
          <div className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-black/8 bg-white/75 px-3 py-2 text-xs font-semibold text-[#4c4c4a] shadow-sm sm:px-4 sm:text-sm"><Sparkles size={16} className="shrink-0" /><span className="truncate">Moderno, técnico e próximo</span></div>
          <h1 className="max-w-4xl text-[2.65rem] font-black leading-[0.96] tracking-[-0.055em] text-[#242424] sm:text-5xl md:text-7xl">Bucomaxilo com clareza, precisão e leveza.</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[#5d5d5a] md:mt-6 md:text-xl md:leading-8">Uma presença digital mais fiel ao perfil do Dr. Christiano: técnico quando precisa, direto na explicação e com uma comunicação moderna, humana e sem cara de consultório antigo.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row md:mt-9">
            <a href={WHATSAPP_URL} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2f2f2f] px-5 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#111] sm:px-7 sm:py-4 sm:text-base">Agendar avaliação <MessageCircle size={18} /></a>
            <a href="#atuacao" className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white/75 px-5 py-3.5 text-sm font-bold text-[#2f2f2f] transition hover:-translate-y-0.5 hover:bg-white sm:px-7 sm:py-4 sm:text-base">Ver atuação <ChevronRight size={18} /></a>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 md:mt-10">
            {quickFacts.map((item) => <div key={item} className="flex min-w-0 items-center gap-3 rounded-2xl border border-black/6 bg-white/70 p-3.5 text-sm font-semibold text-[#494947] sm:p-4"><CheckCircle2 size={18} className="shrink-0 text-[#303030]" /><span className="min-w-0">{item}</span></div>)}
          </div>
        </div>
        <div className="glass-card relative min-w-0 rounded-[1.7rem] p-3 sm:rounded-[2.2rem] sm:p-4">
          <div className="rounded-[1.45rem] bg-[#303030] p-5 text-white sm:rounded-[1.8rem] sm:p-7">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-5"><LogoMark className="h-20 w-20 rounded-[1.55rem] sm:h-24 sm:w-24 sm:rounded-[1.8rem]" /><div className="w-fit rounded-full border border-white/10 bg-white/8 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/70 sm:px-4 sm:text-xs">Conceito visual</div></div>
            <h2 className="mt-8 text-3xl font-black leading-[1.02] tracking-[-0.045em] sm:mt-10 sm:text-4xl">Menos formalidade fria. Mais confiança real.</h2>
            <p className="mt-5 text-sm leading-7 text-white/72 sm:text-base">A ideia é tirar a comunicação do padrão “doutor distante” e aproximar o paciente sem perder autoridade. Cinza, limpo, moderno, com identidade própria.</p>
            <div className="mt-7 grid gap-3 sm:mt-8 sm:grid-cols-2">
              <div className="rounded-3xl bg-white/9 p-5"><Bike className="text-white/80" /><p className="mt-4 font-bold">Perfil ativo</p><p className="mt-1 text-sm leading-6 text-white/60">Uma marca que pode conversar com energia, movimento e leveza.</p></div>
              <div className="rounded-3xl bg-white/9 p-5"><Smile className="text-white/80" /><p className="mt-4 font-bold">Tom humano</p><p className="mt-1 text-sm leading-6 text-white/60">Sério no cuidado, mas sem parecer engessado ou antigo.</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionTitle({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return <div className="mx-auto mb-10 max-w-3xl text-center md:mb-12"><p className="text-xs font-black uppercase tracking-[0.22em] text-[#777774] sm:text-sm sm:tracking-[0.28em]">{eyebrow}</p><h2 className="mt-4 text-[2.15rem] font-black leading-[1.02] tracking-[-0.05em] text-[#242424] sm:text-4xl md:text-6xl">{title}</h2>{description ? <p className="mt-5 text-base leading-7 text-[#62625f] md:text-lg md:leading-8">{description}</p> : null}</div>;
}

function About() {
  return <section id="sobre" className="py-14 md:py-20"><div className="container-page grid gap-5 lg:grid-cols-[0.95fr_1.05fr] lg:gap-6"><div className="rounded-[1.8rem] bg-[#2f2f2f] p-6 text-white sm:rounded-[2.2rem] sm:p-8 md:p-10"><LogoMark className="h-16 w-16 sm:h-20 sm:w-20" /><p className="mt-8 text-xs font-bold uppercase tracking-[0.22em] text-white/55 sm:mt-10 sm:text-sm sm:tracking-[0.28em]">Sobre o profissional</p><h2 className="mt-5 text-3xl font-black leading-tight tracking-[-0.045em] sm:text-4xl sm:tracking-[-0.05em]">Um site com cara de quem conversa bem com gente.</h2><p className="mt-5 leading-7 text-white/70 sm:mt-6 sm:leading-8">O visual antigo colocava autoridade, mas deixava o site pesado. Esta versão tenta representar melhor um profissional moderno, alegre, ativo e seguro tecnicamente.</p></div><div className="glass-card rounded-[1.8rem] p-6 sm:rounded-[2.2rem] sm:p-8 md:p-10"><p className="text-base leading-8 text-[#454542] sm:text-xl sm:leading-9">O Dr. Christiano Marinho Correia atua em Cirurgia e Traumatologia Buco-Maxilo-Faciais, com foco em avaliação, planejamento e condução de casos cirúrgicos odontológicos e bucomaxilofaciais.</p><p className="mt-5 text-base leading-8 text-[#454542] sm:mt-6 sm:text-xl sm:leading-9">A comunicação do site deve transmitir segurança sem parecer distante: explicar o que o paciente precisa saber, mostrar organização e abrir caminho para o contato de forma simples.</p><div className="mt-7 grid gap-3 sm:mt-8 sm:grid-cols-3 sm:gap-4">{["Claro", "Moderno", "Humano"].map((item) => <div key={item} className="rounded-3xl bg-white p-5 shadow-sm"><CheckCircle2 size={22} /><p className="mt-4 text-lg font-black tracking-[-0.02em] text-[#242424]">{item}</p></div>)}</div></div></div></section>;
}

function Services() {
  return <section id="atuacao" className="py-14 md:py-20"><div className="container-page"><SectionTitle eyebrow="Áreas de atuação" title="O que o paciente procura precisa aparecer rápido." description="Estrutura pensada para SEO local e para quem chega pelo Google querendo entender se está no lugar certo." /><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">{services.map(({ title, description, icon: Icon }) => <article key={title} className="group rounded-[1.6rem] border border-black/6 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-2xl sm:rounded-[1.8rem] sm:p-7"><div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-[#303030] text-white sm:h-14 sm:w-14"><Icon size={25} /></div><h3 className="mt-5 text-xl font-black tracking-[-0.03em] text-[#242424] sm:mt-6 sm:text-2xl sm:tracking-[-0.035em]">{title}</h3><p className="mt-3 text-sm leading-7 text-[#62625f] sm:text-base">{description}</p></article>)}</div></div></section>;
}

function Experience() {
  return <section id="experiencia" className="py-14 md:py-20"><div className="container-page overflow-hidden rounded-[1.8rem] bg-[#303030] text-white sm:rounded-[2.6rem]"><div className="grid lg:grid-cols-[0.95fr_1.05fr]"><div className="p-6 sm:p-8 md:p-12"><p className="text-xs font-bold uppercase tracking-[0.22em] text-white/55 sm:text-sm sm:tracking-[0.28em]">Experiência do paciente</p><h2 className="mt-5 text-[2.05rem] font-black leading-[1.04] tracking-[-0.05em] sm:text-4xl md:text-6xl">Visual de consultório moderno, não de cartão antigo.</h2><p className="mt-5 text-base leading-7 text-white/70 md:mt-6 md:text-lg md:leading-8">A paleta cinza pode ser elegante sem ficar triste. O segredo é usar contraste, respiro, bordas grandes, textos diretos e um tom mais vivo.</p></div><div className="grid gap-3 bg-white/5 p-6 sm:gap-4 sm:p-8 md:p-12">{values.map((item) => <div key={item} className="flex gap-3 rounded-3xl bg-white/9 p-4 sm:gap-4 sm:p-5"><CheckCircle2 className="mt-1 shrink-0 text-white" size={21} /><p className="text-base font-semibold leading-7 text-white/82 sm:text-lg">{item}</p></div>)}</div></div></div></section>;
}

function FAQ() {
  return <section id="faq" className="py-14 md:py-20"><div className="container-page"><SectionTitle eyebrow="Dúvidas frequentes" title="Perguntas simples. Respostas sem enrolação." /><div className="mx-auto grid max-w-4xl gap-3 sm:gap-4">{faq.map((item) => <details key={item.question} className="group rounded-3xl border border-black/6 bg-white p-5 shadow-sm sm:p-6"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-black tracking-[-0.02em] text-[#242424] sm:text-lg">{item.question}<ChevronRight className="shrink-0 transition group-open:rotate-90" size={20} /></summary><p className="mt-4 text-sm leading-7 text-[#62625f] sm:text-base sm:leading-8">{item.answer}</p></details>)}</div></div></section>;
}

function Contact() {
  return <section id="contato" className="py-14 md:py-20"><div className="container-page glass-card overflow-hidden rounded-[1.8rem] sm:rounded-[2.6rem]"><div className="grid lg:grid-cols-[1fr_0.86fr]"><div className="p-6 sm:p-8 md:p-12"><p className="text-xs font-black uppercase tracking-[0.22em] text-[#777774] sm:text-sm sm:tracking-[0.28em]">Contato</p><h2 className="mt-4 text-[2.15rem] font-black leading-[1.02] tracking-[-0.05em] text-[#242424] sm:text-4xl md:text-6xl">Um caminho rápido para agendar.</h2><p className="mt-5 text-base leading-7 text-[#62625f] md:text-lg md:leading-8">Aqui entram WhatsApp real, endereço, mapa, horários e informações confirmadas pelo consultório.</p><div className="mt-7 grid gap-3 sm:mt-8 sm:gap-4"><div className="flex gap-3 rounded-3xl bg-white p-4 shadow-sm sm:gap-4 sm:p-5"><MapPin className="shrink-0 text-[#303030]" /><div className="min-w-0"><p className="font-black text-[#242424]">Uberaba/MG</p><p className="text-sm text-[#62625f] sm:text-base">Endereço do consultório a confirmar</p></div></div><div className="flex gap-3 rounded-3xl bg-white p-4 shadow-sm sm:gap-4 sm:p-5"><CalendarCheck className="shrink-0 text-[#303030]" /><div className="min-w-0"><p className="font-black text-[#242424]">Atendimento com horário marcado</p><p className="text-sm text-[#62625f] sm:text-base">Rotina e canais oficiais a validar</p></div></div></div><a href={WHATSAPP_URL} className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#2f2f2f] px-5 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#111] sm:mt-8 sm:w-auto sm:px-7 sm:py-4 sm:text-base">Chamar no WhatsApp <MessageCircle size={18} /></a></div><div className="bg-[#303030] p-6 text-white sm:p-8 md:p-12"><div className="flex h-full min-h-[300px] flex-col justify-between rounded-[1.7rem] border border-white/10 bg-white/8 p-5 sm:min-h-[360px] sm:rounded-[2rem] sm:p-7"><div><LogoMark className="h-20 w-20 sm:h-24 sm:w-24" /><p className="mt-7 text-xs uppercase tracking-[0.22em] text-white/55 sm:mt-8 sm:text-sm sm:tracking-[0.28em]">Dados finais</p><h3 className="mt-4 text-2xl font-black tracking-[-0.04em] sm:text-3xl">CRO, mapa e WhatsApp entram depois da validação.</h3></div><p className="mt-8 text-sm leading-7 text-white/65 sm:mt-10 sm:text-base">Prévia conceitual. As informações clínicas e cadastrais devem ser revisadas pelo profissional antes de qualquer publicação oficial.</p></div></div></div></div></section>;
}

function Footer() {
  return <footer className="border-t border-black/6 py-8 sm:py-10"><div className="container-page grid gap-5 text-sm text-[#62625f] md:grid-cols-[1fr_1.4fr] md:gap-6"><div className="flex min-w-0 items-center gap-3"><LogoMark className="h-10 w-10 rounded-2xl sm:h-11 sm:w-11" /><div className="min-w-0"><p className="truncate font-black text-[#242424]">Dr. Christiano Marinho Correia</p><p>Cirurgia Buco-Maxilo-Facial • Uberaba/MG</p></div></div><p className="leading-7 md:text-right">As informações deste site têm caráter informativo e não substituem avaliação profissional individualizada. Diagnóstico, indicação de tratamento e conduta clínica dependem de consulta e análise do caso.</p></div></footer>;
}

export default function Home() {
  return <main><Header /><Hero /><About /><Services /><Experience /><FAQ /><Contact /><Footer /></main>;
}
