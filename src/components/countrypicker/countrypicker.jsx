import React, { useEffect, useState } from "react";
import { FormControl, NativeSelect } from "@material-ui/core";
import { fetchCountries } from "../../api";
import styles from "./countrypicker.module.css";
export default function CountryPicker({handleCountryChange}) {
  const [option, setOption] = useState("Global");
  const [options, setOptions] = useState([]);
  useEffect(() => {
    const getCountries = async function () {
      setOptions(await fetchCountries());
    };

    getCountries();
    console.log(options);
  }, []);
  return (
    <div className={styles.container}>
      <FormControl className={styles.formControl}>
        <NativeSelect defaultValue = {option} onChange = {(e)=> handleCountryChange(e.target.value)}>
          <option value={option}> {option}</option>
          {options.map((country, index) => {
            return (
              <option value={country} key={index}>
                {country}
              </option>
            );
          })}
        </NativeSelect>
      </FormControl>
    </div>
  );
}
