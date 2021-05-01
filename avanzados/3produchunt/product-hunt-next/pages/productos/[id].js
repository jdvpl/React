import React, { useEffect } from "react";
import { useRouter } from "next/router";

const Producto = () => {
  // roter para obtener el id actual
  const router = useRouter();
  const {
    query: { id },
  } = router;

  useEffect(() => {
    if (id) {
      console.log("ya hay un id");
    }
  }, [id]);
  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
};

export default Producto;
