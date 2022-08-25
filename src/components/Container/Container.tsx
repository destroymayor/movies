import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

import Header from './Header';

type Props = {
  children: ReactNode;
};

export default function Container(props: Props) {
  const { children } = props;
  const router = useRouter();

  return (
    <div className=" h-screen w-full flex-col">
      <Header />

      <motion.main
        key={router.route}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.2 } }}
        className="pt-16"
      >
        {children}
      </motion.main>
    </div>
  );
}
