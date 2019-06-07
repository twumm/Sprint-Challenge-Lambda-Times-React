import React from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';
import '../../CSS/index.css';

const Tabs = ({ tabs, selectTabHandler, selectedTab }) => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/

          tabs
            .map((tab, index) => (
              <Tab
                key={index}
                tab={tab}
                selectTabHandler={selectTabHandler}
                selectedTab={selectedTab}
              />
            )
          )
        }
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
Tabs.propTypes = {
  tabs: PropTypes.array,
  selectTabHandler: PropTypes.func.isRequired,
  selectedTab: PropTypes.string.isRequired
}

export default Tabs;
