import styles from "./style.module.css";
import { useParams } from "react-router-dom";

function Producto() {
  const { id } = useParams();

  return (
    <>
      <h1>{id}</h1>
    </>
  );
}

export default Producto;
