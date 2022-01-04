import React from 'react';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
const Featuredinfo = () => {
    return (
        <div className="featured">
        <div className="featuredItem">
          <span className="featuredTitle">Revanue</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">$2,415</span>
            <span className="featuredMoneyRate">
              -11.4 <ArrowDownwardIcon  className="featuredIcon negative"/>
            </span>
          </div>
          <span className="featuredSub">Compared to last month</span>
        </div>
        <div className="featuredItem">
          <span className="featuredTitle">Sales</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">$4,415</span>
            <span className="featuredMoneyRate">
              -1.4 <ArrowDownwardIcon className="featuredIcon negative"/>
            </span>
          </div>
          <span className="featuredSub">Compared to last month</span>
        </div>
        <div className="featuredItem">
          <span className="featuredTitle">Cost</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">$2,225</span>
            <span className="featuredMoneyRate">
              +2.4 <ArrowUpwardIcon className="featuredIcon"/>
            </span>
          </div>
          <span className="featuredSub">Compared to last month</span>
        </div>
      </div>
    );
};

export default Featuredinfo;