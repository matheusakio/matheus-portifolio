export interface Experience {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: 'sonda',
    company: 'Sonda',
    role: 'Engenheiro de Software',
    startDate: 'set/2022',
    endDate: 'presente',
    description: 'Sonda é a MAIOR empresa de tecnologia da América Latina, com mais de 40 anos de história e presença em 20 países, empregando mais de 10.000 profissionais. Atuei no desenvolvimento do aplicativo móvel do Banestes (Banco Público do Espírito Santo), implementando funcionalidades críticas como integrações financeiras complexas, carteira digital, pagamentos mobile e experiências bancárias modernas. O projeto impactou milhões de usuários com transações financeiras seguras e escaláveis.',
    technologies: ['React Native', 'TypeScript', 'MobX', 'Node.js', 'Integrações Financeiras', 'Apple Pay', 'Samsung Pay', 'Google Pay', 'Garmin Pay', 'Pagar.me'],
  },
  {
    id: 'globalsys',
    company: 'Globalsys Soluções em TI',
    role: 'Engenheiro de Software',
    startDate: 'jun/2021',
    endDate: 'jan/2024',
    description: 'Globalsys é líder em soluções de tecnologia para varejo e e-commerce. Desenvolvi soluções mobile e web para Wine.com.br (maior clube de vinho do mundo) e AvaliaGab. Implementei features de checkout, gestão de pedidos, integrações de pagamento e experiências omnichannel. As soluções desenvolvidas contribuíram para o crescimento significativo das plataformas de e-commerce.',
    technologies: ['React Native', 'React', 'TypeScript', 'Firebase', 'Integrações de Pagamento', 'Checkout Digital'],
  },
  {
    id: 'pd7tech',
    company: 'Pd7 Tech',
    role: 'Engenheiro de Software',
    startDate: 'mar/2022',
    endDate: 'dez/2022',
    description: 'Pd7 Tech é especializada em soluções tecnológicas para setores de petróleo, energia e indústria. Desenvolvi aplicações mobile e web para gestão operacional, monitoramento de ativos e soluções industriais. Os sistemas desenvolvidos permitiram maior eficiência operacional e controle em tempo real para empresas do setor energético.',
    technologies: ['Next.js', 'React Native', 'TypeScript', 'Node.js', 'IoT', 'Monitoramento Industrial'],
  },
  {
    id: 'mblabs',
    company: 'MB Labs',
    role: 'Engenheiro de Software',
    startDate: 'nov/2021',
    endDate: 'mar/2022',
    description: 'MB Labs é focada em desenvolvimento de produtos digitais inovadores e startups tecnológicas. Atuei na criação de aplicações mobile e web com foco em UX/UI e performance. Desenvolvi produtos para diversos setores, implementando arquiteturas escaláveis e integrando APIs modernas.',
    technologies: ['React Native', 'React', 'Firebase', 'TypeScript', 'UX/UI Design', 'API Integration'],
  },
  {
    id: 'noruh',
    company: 'Happe',
    role: 'Engenheiro de Software',
    startDate: 'fev/2020',
    endDate: 'set/2021',
    description: 'Happe é especializada em soluções digitais para startups e empresas em crescimento. Desenvolvi o aplicativo Noruh e outras aplicações mobile e web desde o MVP até produtos escaláveis. Trabalhei com metodologias ágeis e desenvolvimento rápido de produtos, entregando soluções que ajudaram startups a escalar suas operações digitais.',
    technologies: ['React Native', 'React', 'TypeScript', 'Node.js', 'Agile Development', 'MVP Development'],
  },
];
