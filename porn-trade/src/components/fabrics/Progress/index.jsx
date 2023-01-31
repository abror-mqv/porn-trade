import { useScroll, motion, useTransform } from "framer-motion";

export default function Progress() {
  const { scrollY } = useScroll();
  const background = useTransform(
    scrollY,
    [0, 1000],
    ["#222c40", "#222c40"]
  );
  return (
    <motion.div style={{ background }} className="EX">
      <motion.div></motion.div>
    </motion.div>
  );
}
