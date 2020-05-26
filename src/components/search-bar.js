import React from 'react';

const inputStyles = {
  height: '100%',
  minWidth: '100%',
  border: 'none',
  outline: 'none',
  backgroundColor: '#f9fafc',
};

const SearchBar = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        overflow: 'hidden',
      }}
    >
      <div style={{ margin: '10px' }}>
        <i class="fas fa-search"></i>
      </div>
      <input style={inputStyles} type="text" placeholder="Search" />
    </div>
  );
};

export default SearchBar;
