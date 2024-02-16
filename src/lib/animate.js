const pageTransitionSpeed = 300;

const pageTransitionAnim = {
  show: {
    opacity: 1,
    transition: {
      duration: pageTransitionSpeed / 1000,
      delay: 0.2,
      ease: "linear",
      when: "beforeChildren",
    },
  },
  hide: {
    opacity: 0,
    transition: {
      duration: pageTransitionSpeed / 1000,
      ease: "linear",
      when: "beforeChildren",
    },
  },
};

export { pageTransitionSpeed, pageTransitionAnim };
