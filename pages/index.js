import sfx from "../components/utils/sfx";
import { Btn } from "../components/ui";
import { useEffect } from "react";

export default function Home() {
  const { tap } = sfx;
  useEffect(() => {
    tap;
  }, []);
  return (
    <>
      <Btn hov={tap} sub={"blue"}>
        Home
      </Btn>
      <Btn hov={tap} sub={"green"}>
        Store
      </Btn>
      <Btn hov={tap} sub={"purple"}>
        About
      </Btn>
    </>
  );
}
