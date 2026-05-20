export interface Project {
  id: string;
  name: string;
  category: string;
  description: string;
  technologies: string[];
  logo?: string;
  type: 'mobile' | 'web' | 'web3';
  featured?: boolean;
  impact?: string;
}

export const projects: Project[] = [
  {
    id: 'banestes',
    name: 'Banestes',
    category: 'Banco Público',
    description:
      'Atuação no aplicativo bancário do Banestes, banco público do Espírito Santo, com foco em experiência mobile, integrações financeiras complexas, wallets digitais e publicação nas lojas. Projeto com grande escala de usuários e funcionalidades sensíveis de ambiente bancário.',
    technologies: [
      'React Native',
      'TypeScript',
      'MobX',
      'Node.js',
      'Firebase',
      'Apple Pay',
      'Google Pay',
      'Samsung Pay',
      'Garmin Pay',
      'Pagar.me',
      'App Store',
      'Google Play',
      'Integrações nativas',
      'APIs financeiras',
    ],
    logo: '/logos/banestes.png',
    type: 'mobile',
    featured: true,
    impact: '+2M downloads nas lojas',
  },
  {
    id: 'wine',
    name: 'Wine',
    category: 'E-commerce',
    description:
      'Atuação em soluções mobile e web para a Wine, uma das maiores plataformas de e-commerce de vinhos do Brasil, com foco em experiência de compra, performance, sustentação de app e processo de publicação nas lojas.',
    technologies: [
      'React Native',
      'React',
      'TypeScript',
      'Firebase',
      'Redux',
      'Styled Components',
      'App Store',
      'Google Play',
      'E-commerce',
      'Checkout',
    ],
    logo: '/logos/wine.png',
    type: 'mobile',
    featured: true,
    impact: '+2M downloads nas lojas',
  },
  {
    id: 'bankeiro',
    name: 'Bankeiro',
    category: 'Banco Privado',
    description:
      'Plataforma bancária digital privada com soluções financeiras, experiência mobile e integrações com APIs bancárias.',
    technologies: ['React Native', 'React', 'TypeScript', 'Firebase', 'Redux', 'APIs Financeiras'],
    logo: '/logos/bankeiro.png',
    type: 'mobile',
    featured: true,
  },
  {
    id: 'medsoft',
    name: 'MedSoft',
    category: 'Educação Médica',
    description:
      'Solução digital educacional para estudantes e profissionais da área médica, com foco em performance, conteúdo, usabilidade e experiência mobile.',
    technologies: ['React Native', 'React', 'TypeScript', 'Next.js', 'APIs REST', 'Design System'],
    logo: '/logos/medgrupo.png',
    type: 'mobile',
    featured: true,
    impact: '40 mil assinantes ativos',
  },
  {
    id: 'medme',
    name: 'MedMe',
    category: 'Educação Médica',
    description:
      'Aplicação educacional para jornada médica, com experiência mobile otimizada, consumo de conteúdo e funcionalidades para alunos.',
    technologies: ['React Native', 'TypeScript', 'React', 'APIs REST', 'Mobile UX'],
    logo: '/logos/medgrupo.png',
    type: 'mobile',
    featured: true,
  },
  {
    id: 'atacadao',
    name: 'Atacadão Dia a Dia',
    category: 'Varejo',
    description:
      'Interfaces e experiências digitais para varejo e atacarejo, com foco em jornada de compra, clube de vantagens e experiência mobile.',
    technologies: ['React Native', 'React', 'TypeScript', 'APIs REST', 'Programa de Fidelidade'],
    logo: '/logos/atacadao.png',
    type: 'mobile',
    featured: true,
  },
  {
    id: 'ambify',
    name: 'Ambify',
    category: 'Responsabilidade Social',
    description:
      'Solução digital ligada à Ambipar, com foco em sustentabilidade, impacto ambiental, créditos de carbono, rastreamento e experiência mobile/web.',
    technologies: [
      'React Native',
      'React',
      'Firebase',
      'TypeScript',
      'APIs REST',
      'Blockchain',
      'Web3',
      'Créditos de Carbono',
    ],
    logo: '/logos/ambify.png',
    type: 'web3',
    featured: true,
  },
  {
    id: 'petrorio',
    name: 'PetroRio',
    category: 'Petróleo e Energia',
    description:
      'Aplicações digitais para o setor de petróleo e energia, com foco em performance, eficiência operacional, dashboards e experiência web/mobile.',
    technologies: ['Next.js', 'React', 'React Native', 'TypeScript', 'APIs REST', 'Dashboards'],
    logo: '/logos/petrorio.png',
    type: 'web',
    featured: true,
  },
  {
    id: 'wine-mexico',
    name: 'Wine México',
    category: 'E-commerce',
    description:
      'Atuação em solução internacional da Wine, com foco em experiência mobile, evolução de produto e sustentação de app.',
    technologies: ['React Native', 'React', 'TypeScript', 'Firebase', 'App Store', 'Google Play'],
    type: 'mobile',
  },
  {
    id: 'shipay',
    name: 'Shipay',
    category: 'Fintechs',
    description:
      'Soluções de pagamento digital e integrações financeiras para fluxo de pagamentos e experiência transacional.',
    technologies: ['React Native', 'TypeScript', 'Node.js', 'Pagamentos', 'APIs REST'],
    type: 'web',
  },
  {
    id: 'noruh',
    name: 'Noruh',
    category: 'Startups',
    description:
      'Aplicação alimentar com evolução de arquitetura, modernização de código e experiência mobile.',
    technologies: ['React Native', 'React', 'TypeScript', 'Firebase', 'Redux'],
    type: 'mobile',
  },
  {
    id: 'zeep',
    name: 'Zeep',
    category: 'Educação',
    description:
      'Plataforma educacional com foco em aprendizado interativo e experiência mobile.',
    technologies: ['React Native', 'TypeScript', 'APIs REST'],
    type: 'mobile',
  },
  {
    id: 'alianca-students',
    name: 'Aliança Students',
    category: 'Educação',
    description:
      'Solução educacional para estudantes, com jornada mobile e recursos de aprendizado.',
    technologies: ['React Native', 'TypeScript', 'APIs REST'],
    type: 'mobile',
  },
  {
    id: 'alianca-teacher',
    name: 'Aliança Teacher',
    category: 'Educação',
    description:
      'Plataforma para professores e educadores acompanharem atividades e conteúdos.',
    technologies: ['React Native', 'TypeScript', 'APIs REST'],
    type: 'mobile',
  },
  {
    id: 'chippu',
    name: 'Chippu',
    category: 'Entretenimento',
    description:
      'Plataforma de entretenimento e conteúdo digital.',
    technologies: ['React', 'React Native', 'TypeScript', 'CSS', 'HTML'],
    type: 'web',
  },
  {
    id: 'avalia-plus',
    name: 'Avalia+',
    category: 'Varejo',
    description:
      'Aplicativo offline desenvolvido para a empresa Vix, com foco em operação, coleta de dados e uso em campo.',
    technologies: ['React Native', 'TypeScript', 'Offline First', 'AsyncStorage', 'APIs REST'],
    type: 'mobile',
  },
  {
    id: 'mercadinho-do-ze',
    name: 'Mercadinho do Zé',
    category: 'Alimentação',
    description:
      'Plataforma de compras de mercado com experiência mobile para jornada de compra.',
    technologies: ['React Native', 'TypeScript', 'React', 'APIs REST'],
    type: 'mobile',
  },
  {
    id: 'clube-dia-dia',
    name: 'Clube Dia a Dia',
    category: 'Alimentação',
    description:
      'Clube de fidelidade para o mercado Dia a Dia, com foco em benefícios, jornada mobile e relacionamento com o cliente.',
    technologies: ['React Native', 'TypeScript', 'React', 'Zustand', 'APIs REST'],
    type: 'mobile',
  },
  {
    id: 'kotai-wallet',
    name: 'Kotai Wallet',
    category: 'Web3',
    description:
      'Aplicativo mobile para transações com criptomoedas, integração com carteiras digitais, WalletConnect e autenticação Web3.',
    technologies: ['React Native', 'TypeScript', 'WalletConnect', 'Blockchain', 'Web3', 'Crypto', 'Smart Contracts'],
    type: 'web3',
  },
];

export const projectCategories = [
  'Todos',
  'Bancos',
  'Banco Privado',
  'Fintechs',
  'E-commerce',
  'Educação',
  'Startups',
  'Web3',
  'Energia',
  'Entretenimento',
  'Responsabilidade Social',
  'Varejo',
  'Alimentação',
];