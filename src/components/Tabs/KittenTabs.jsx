import React from 'react';
import styles from './KittenTabs.module.css';

const KittenTabs = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className={styles.tabsHeaders}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`${styles.tabButton} ${activeTab === tab.id ? styles.activeTab : ''}`}
          onClick={() => onTabChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default KittenTabs;