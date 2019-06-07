import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Tab from './Tab';
import '../../CSS/index.css';

const TabsDiv = styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 47px;
  background-color: #fff;
  @media (min-width: 1280px) {
    width: 1280px;
  }
`;

const TabsTopicsDiv = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
`;

const TabsTitleSpan = styled.span`
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
`;

const Tabs = ({ tabs, selectTabHandler, selectedTab }) => {
  return (
    <TabsDiv>
      <TabsTopicsDiv>
        <TabsTitleSpan>TRENDING TOPICS:</TabsTitleSpan>
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
      </TabsTopicsDiv>
    </TabsDiv>
  );
};

// Make sure to use PropTypes to validate your types!
Tabs.propTypes = {
  tabs: PropTypes.array,
  selectTabHandler: PropTypes.func.isRequired,
  selectedTab: PropTypes.string.isRequired
}

export default Tabs;
