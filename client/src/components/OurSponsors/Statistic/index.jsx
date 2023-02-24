import React from 'react';
import styles from '../OurSponsors.module.sass'
const Statistic = () => {
// const mapStats=()=>{
//   data.map()
// }
    return (
        <div className={styles.stats}>


        <div>
          <p>119,525</p>
          <span>Creatives</span>
        </div>
        <div>
          <p>21,875</p>
          <span>Customers</span>
        </div>
        <div>
          <p>85</p>
          <span>Industries</span>
        </div>
      </div>
    );
}

export default Statistic;
