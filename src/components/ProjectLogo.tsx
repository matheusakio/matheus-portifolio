'use client';

import Image from 'next/image';

interface ProjectLogoProps {
  src?: string;
  name: string;
}

type LogoConfig = {
  width: number;
  height: number;
  boxHeight?: string;
  className?: string;
};

const logoStyles: Record<string, LogoConfig> = {
  Banestes: {
    width: 120,
    height: 36,
  },
  Wine: {
    width: 48,
    height: 48,
    className: 'rounded-xl',
  },
  Bankeiro: {
    width: 130,
    height: 38,
  },
  MedSoft: {
    width: 130,
    height: 38,
  },
  MedMe: {
    width: 130,
    height: 38,
  },
  'Atacadão Dia a Dia': {
    width: 125,
    height: 42,
  },
  Ambify: {
    width: 125,
    height: 38,
  },
  PetroRio: {
    width: 125,
    height: 38,
  },
  default: {
    width: 125,
    height: 38,
  },
};

export const ProjectLogo = ({ src, name }: ProjectLogoProps) => {
  const config = logoStyles[name] ?? logoStyles.default;

  if (!src) {
    return (
      <div className="flex h-[70px] w-[180px] items-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 to-violet-500 text-sm font-black text-white">
          {name.slice(0, 2)}
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-[60px] w-full max-w-[160px] sm:h-[70px] sm:max-w-[190px] items-center">
      <div
        className="relative"
        style={{
          width: `${config.width * 0.85}px`,
          height: `${config.height * 0.85}px`,
        }}
      >
        <Image
          src={src}
          alt={name}
          fill
          priority
          sizes={`${config.width}px`}
          className={`object-contain object-left ${config.className ?? ''}`}
        />
      </div>
    </div>
  );
};