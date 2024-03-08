import React, { useState } from 'react';
import Consulting from '../Components/Consulting';
import IdeaSharing from '../Components/IdeaSharing';
import ToolsLan from '../Components/ToolsLan';
import Experience from '../Components/Experience';
import HowItWorks from '../Components/HowItWorks';
import Benefits from '../Components/Benefits';
import Management from '../Components/Management';
import Solution from '../Components/Solution';
import Strategies from '../Components/Strategies';

const Menu = () => {
  const [activeTab, setActiveTab] = useState('Consulting');

  const handleTabClick = (tabName) => {
    setActiveTab(activeTab === tabName ? null : tabName); 
  };

  const tabStyle = {
    cursor: 'pointer',
    borderBottom: '2px solid black',
    padding: '10px 20px',
    fontSize: '16px',
    color: 'black',
    position: 'relative', 
  };

  const activeTabStyle = {
    ...tabStyle,
    fontSize: '20px',
    color: 'orange',
  };

  const lineStyle = {
    position: 'absolute',
    left: '-20px', 
    top: '50%',
    height: '100%',
    width: '2px', 
    backgroundColor: 'black', 
    transform: 'translateY(-50%)', 
  };

  const getContent = () => {
    switch (activeTab) {
      case 'Consulting':
        return (
          <div>
            <Consulting></Consulting>
          </div>
        );
      case 'Idea Sharing':
        return (
          <div>
          <IdeaSharing></IdeaSharing>
          </div>
        );
      case 'Strategies':
        return (
          <div>
            <Strategies></Strategies>
          </div>
        );
      case 'Solution':
        return (
          <div>
            <Solution></Solution>
          </div>
        );
      case 'Management':
        return (
          <div>
           <Management></Management>
          </div>
        );
      case 'Benefits':
        return (
          <div>
           <Benefits></Benefits>
          </div>
        );
      case 'How it Works':
        return (
          <div>
            <HowItWorks></HowItWorks>
          </div>
        );
      case 'Experience':
        return (
          <div>
            <Experience></Experience>
          </div>
        );
      case 'Tools & Language':
        return (
          <div>
             <ToolsLan></ToolsLan>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: '1', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
        <h3 onClick={() => handleTabClick('Consulting')} style={activeTab === 'Consulting' ? activeTabStyle : tabStyle}>
          Consulting
          {activeTab === 'Consulting' ? <span>&#8595;</span> : null} 
        </h3>
        <div style={lineStyle}></div> 
        <h3 onClick={() => handleTabClick('Idea Sharing')} style={activeTab === 'Idea Sharing' ? activeTabStyle : tabStyle}>
          Idea Sharing
          {activeTab === 'Idea Sharing' ? <span>&#8595;</span> : null}
        </h3>
        <div style={lineStyle}></div> 
        <h3 onClick={() => handleTabClick('Strategies')} style={activeTab === 'Strategies' ? activeTabStyle : tabStyle}>
          Strategies
          {activeTab === 'Strategies' ? <span>&#8595;</span> : null}
        </h3>
        <div style={lineStyle}></div>
        <h3 onClick={() => handleTabClick('Solution')} style={activeTab === 'Solution' ? activeTabStyle : tabStyle}>
          Solution
          {activeTab === 'Solution' ? <span>&#8595;</span> : null}
        </h3>
        <div style={lineStyle}></div> 
        <h3 onClick={() => handleTabClick('Management')} style={activeTab === 'Management' ? activeTabStyle : tabStyle}>
          Management
          {activeTab === 'Management' ? <span>&#8595;</span> : null}
        </h3>
        <div style={lineStyle}></div> 
        <h3 onClick={() => handleTabClick('Benefits')} style={activeTab === 'Benefits' ? activeTabStyle : tabStyle}>
          Benefits
          {activeTab === 'Benefits' ? <span>&#8595;</span> : null}
        </h3>
        <div style={lineStyle}></div>
        <h3 onClick={() => handleTabClick('How it Works')} style={activeTab === 'How it Works' ? activeTabStyle : tabStyle}>
          How it Works
          {activeTab === 'How it Works' ? <span>&#8595;</span> : null}
        </h3>
        <div style={lineStyle}></div>
        <h3 onClick={() => handleTabClick('Experience')} style={activeTab === 'Experience' ? activeTabStyle : tabStyle}>
          Experience
          {activeTab === 'Experience' ? <span>&#8595;</span> : null}
        </h3>
        <div style={lineStyle}></div> 
        <h3 onClick={() => handleTabClick('Tools & Language')} style={activeTab === 'Tools & Language' ? activeTabStyle : tabStyle}>
          Tools & Language
          {activeTab === 'Tools & Language' ? <span>&#8595;</span> : null}
        </h3>
      </div>
      <div style={{ flex: '3', padding: '20px' }}>
        {getContent()}
      </div>
    </div>
  );
}

export default Menu;
