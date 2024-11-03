import CytoscapeDemo from './components/CytoscapeDemo';
import G6Demo from './components/G6Demo/indes';
import React from 'react';
import styles from './index.less'

const CytoscapeJs:React.FC = () => {
  return (
    <div className={styles.box}>
      <div className={styles.canvasBox}>
        <h1>cytoscape</h1>
        <CytoscapeDemo />
      </div>
      <div  className={styles.canvasBox}>
        <h1>G6</h1>
        <G6Demo />
      </div>
    </div>
  );
};
export default CytoscapeJs;
