import { AnimatePresence, motion, useInView } from 'framer-motion';
import { ReactNode, useRef } from 'react';

export function WordsPullUp({ text }: { text: string }) {
  const splittedText = text.split(' ');

  const pullupVariant = {
    initial: { y: 20, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
      },
    }),
  };
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <>
      {splittedText.map((current, i) => (
        <motion.div
          key={i}
          ref={ref}
          variants={pullupVariant}
          initial='initial'
          animate={isInView ? 'animate' : ''}
          custom={i}
        >
          {current === '' ? <span>&nbsp;</span> : current}
          {i !== splittedText.length - 1 && <span>&nbsp;</span>}
        </motion.div>
      ))}
    </>
  );
}

export function TypingEffect({ text }: { text: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <span ref={ref} style={{ display: 'inline-block' }}>
      {text.split('').map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.2, delay: index * 0.05 }}
        >
          {letter === ' ' ? <span>&nbsp;</span> : letter}
        </motion.span>
      ))}
    </span>
  );
}

export function GradualSpacing({ text }: { text: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <>
      <AnimatePresence>
        {text.split('').map((char, i) => (
          <motion.p
            ref={ref}
            key={i}
            initial={{ opacity: 0, x: -18 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            exit='hidden'
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            {char === ' ' ? <span>&nbsp;</span> : char}
          </motion.p>
        ))}
      </AnimatePresence>
    </>
  );
}

export function BlurIn({ children }: { children: ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ filter: 'blur(20px)', opacity: 0 }}
      animate={isInView ? { filter: 'blur(0px)', opacity: 1 } : {}}
      transition={{ duration: 1.2 }}
      style={{ display: 'flex', flexGrow: 1 }}
    >
      {children}
    </motion.div>
  );
}
