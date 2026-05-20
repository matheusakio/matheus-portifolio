export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export const cardHover = {
  y: -8,
  transition: { duration: 0.25 },
};
