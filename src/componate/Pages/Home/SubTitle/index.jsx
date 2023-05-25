import React from 'react'
import './styles.css';
import Cube from '../../../RTL/3DText/Cube';
function SubTite() {
  return (
    <div>
        <div className="rotatingText">
  <div className="rotatingText-content">
    <p className="rotatingText-description">
      I'll make your website&hellip;
    </p>

    <h2 className="rotatingText-adjective">beautiful</h2>
    <h2 className="rotatingText-adjective">maintainable</h2>
    <h2 className="rotatingText-adjective">perfect <Cube/></h2>
  </div>
</div>
    </div>
  )
}

export default SubTite