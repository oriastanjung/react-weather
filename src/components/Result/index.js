import React, { useState } from "react";
import styles from "./index.module.css";
import winterIMG from '../../assets/winter.png';
import sunnyIMG from '../../assets/sunny.png';
function Result(props) {
  // const [stats, setStats] = useState("Sunny")
  const city = props.data.city;
  const temp = props.data.temperature;
  return (
    <div className={styles.result}>
      <h1>Your City Temperature : </h1>
      <div className={styles.card}>
        <h3>{city}</h3>
        <h4>{temp} °C</h4>
        {temp > 0 && temp < 35 ? 
        (<div>
          <img src={winterIMG} alt="winter" width={"50px"} />
          <p>
            Cold
          </p>
          </div>) : 
          (<div>
            <img src={sunnyIMG} alt="winter" width={"50px"} />
            <p>
              Sunny
            </p>
            </div>)}
      </div>
    </div>
  );
}

export default Result;
