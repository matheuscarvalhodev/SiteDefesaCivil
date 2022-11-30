import styles from "./Inicio.module.css";
import Select from 'react-select'

export function Selection(props) {
  function handleChange(e) {
    props.setFilters((prevValues) => ({
      ...prevValues,
      [props.name]: e.value,
    }));
  }

  return (
    <section class={styles.sect_item}>
      <label>
        {props.label}
        <Select options={props.select} onChange={handleChange} placeholder={"Selecione"} />
      </label>
    </section>
  );
}