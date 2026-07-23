export type GalleryItem = {
  type?: "image";
  src: string;
  alt: string;
  title?: string;
  description?: string;
} | {
  type: "video";
  src: string;
  poster: string;
  alt: string;
  title?: string;
  description?: string;
};

export type GalleryCategory = {
  id: string;
  label: string;
  title: string;
  eyebrow: string;
  description: string;
  items: GalleryItem[];
};

function marinhoImage(index: number, alt: string, title?: string, description?: string): GalleryItem {
  return {
    src: `/images/marinho/gallery/marinho-${String(index).padStart(2, "0")}.webp`,
    alt,
    title,
    description,
  };
}

function marinhoVideo(src: string, poster: string, alt: string, title?: string, description?: string): GalleryItem {
  return {
    type: "video",
    src,
    poster,
    alt,
    title,
    description,
  };
}

export const galleryCategories: GalleryCategory[] = [
  {
    id: "consultorio",
    label: "Consultório",
    eyebrow: "Ambiente",
    title: "Ambientes, identidade e estrutura do consultório.",
    description:
      "Registros da clínica, da marca e dos espaços de atendimento para mostrar organização, cuidado visual e estrutura ao paciente.",
    items: [33, 36, 38, 39, 40, 42, 44, 45, 46, 50, 51, 52, 53, 56, 58, 59, 62, 63, 64, 66, 84].map((index) =>
      marinhoImage(index, "Ambiente do consultório do Dr. Christiano Marinho Correia"),
    ),
  },
  {
    id: "perfil",
    label: "Perfil profissional",
    eyebrow: "Apresentação",
    title: "Retratos profissionais do Dr. Christiano.",
    description:
      "Imagens institucionais para apresentar o profissional com clareza, proximidade e identidade visual consistente.",
    items: [
      marinhoImage(
        83,
        "Retrato profissional do Dr. Christiano Marinho Correia",
        "Dr. Christiano Marinho Correia",
        "Retrato profissional para apresentação institucional.",
      ),
    ],
  },
  {
    id: "pacientes",
    label: "Pacientes",
    eyebrow: "Acolhimento",
    title: "Convivência, acolhimento e registros autorizados.",
    description:
      "Fotos com pacientes e visitantes que reforçam proximidade, confiança e a relação humana construída no consultório.",
    items: [5, 7, 8, 9, 10, 11, 12, 13, 14, 16, 18, 19, 20, 21, 22, 24, 25, 26, 27, 28, 29, 30, 31, 32, 34, 65, 67, 68, 69, 70, 71, 72, 73].map((index) =>
      marinhoImage(index, "Registro autorizado com paciente no consultório"),
    ),
  },
  {
    id: "bastidores",
    label: "Bastidores",
    eyebrow: "Rotina",
    title: "Equipe, preparo e rotina técnica.",
    description:
      "Bastidores de atendimento, preparo de ambiente, equipe e materiais que mostram a rotina de trabalho com responsabilidade.",
    items: [6, 15, 17, 23, 43, 47, 48, 57, 60].map((index) =>
      marinhoImage(index, "Bastidor de atendimento e rotina clínica"),
    ),
  },
  {
    id: "procedimentos",
    label: "Procedimentos",
    eyebrow: "Técnica",
    title: "Registros técnicos e documentação clínica.",
    description:
      "Imagens de procedimentos e registros intraorais, organizadas separadamente para consulta técnica e demonstração do acervo clínico autorizado.",
    items: [1, 2, 3, 4, 35, 37, 41, 49, 54, 55, 61].map((index) =>
      marinhoImage(index, "Registro técnico de procedimento odontológico"),
    ),
  },
  {
    id: "dentes-inclusos",
    label: "Dentes inclusos",
    eyebrow: "Técnica",
    title: "Dentes inclusos, risco neurológico e odontossecção.",
    description:
      "Registros técnicos sobre avaliação de dentes inclusos, relação com estruturas nervosas e condução cirúrgica por odontossecção quando indicada.",
    items: [
      marinhoImage(
        80,
        "Radiografia panorâmica para avaliação de dente incluso",
        "Avaliação radiográfica",
        "Avaliação da relação entre dente incluso e estruturas nervosas.",
      ),
      marinhoVideo(
        "/videos/marinho/gallery/dentes-inclusos-parestesia.mp4",
        "/images/marinho/gallery/dentes-inclusos-parestesia-poster.webp",
        "Vídeo clínico sobre dente incluso próximo ao nervo",
        "Risco de parestesia",
        "O dente está passando perto do nervo, com risco de parestesia?",
      ),
      marinhoImage(
        81,
        "Fragmentos dentários após odontossecção",
        "Odontossecção",
        "Basta partir para a odontossecção.",
      ),
      marinhoImage(
        82,
        "Registro intraoperatório de procedimento de dente incluso",
        "Procedimento de dente incluso",
        "Registro clínico de procedimento de dente incluso com técnica de odontossecção.",
      ),
    ],
  },
  {
    id: "ortognatica",
    label: "Ortognática",
    eyebrow: "Casos clínicos",
    title: "Casos de cirurgia ortognática.",
    description:
      "Registros clínicos autorizados de casos de cirurgia ortognática, organizados em uma categoria própria para consulta visual.",
    items: [74, 75, 76, 77].map((index, itemIndex) =>
      marinhoImage(
        index,
        "Caso de cirurgia ortognática acompanhado pelo Dr. Christiano Marinho Correia",
        `Caso de cirurgia ortognática ${itemIndex + 1}`,
        "Registro clínico autorizado de caso de cirurgia ortognática.",
      ),
    ),
  },
  {
    id: "planejamento-virtual",
    label: "Planejamento virtual",
    eyebrow: "Tecnologia",
    title: "Planejamento cirúrgico virtual.",
    description:
      "Utilização de planejamento cirúrgico virtual para maior precisão dos movimentos esqueléticos e previsibilidade dos resultados.",
    items: [
      marinhoImage(
        79,
        "Planejamento cirúrgico virtual para cirurgia ortognática",
        "Planejamento cirúrgico virtual",
        "Utilização de planejamento cirúrgico virtual que permite maior precisão dos movimentos esqueléticos e previsibilidade dos resultados.",
      ),
    ],
  },
];

export const gallery = galleryCategories.flatMap((category) => category.items);

export const photoHighlights = [
  "Acervo próprio organizado por ambientes, pacientes, bastidores, procedimentos, dentes inclusos e casos clínicos",
  "Galeria estruturada para crescer sem transformar a página em uma sequência confusa",
  "Fotos reais do consultório e da rotina clínica com autorização de uso",
  "Registros selecionados para aproximar, orientar e reforçar confiança técnica",
];
