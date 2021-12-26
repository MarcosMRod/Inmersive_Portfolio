import { Btn } from "../components/ui";
import Sfx from "../components/utils/sfx";

export default function Home() {
  // fuente de sonidos
  const source = ["sfx/1.ogg"];
  // chops de sonidos
  const library = {
    tap: [41900, 2],
    tap1: [42160, 2],
    tap2: [41645, 2],
    tap3: [42620, 2],
  };
  const sfx = new Sfx(source, library);

  const { tap } = sfx;

  return (
    <>
      <Btn>Home</Btn>
      <Btn>Store</Btn>
      <Btn>About</Btn>
    </>
  );
}
