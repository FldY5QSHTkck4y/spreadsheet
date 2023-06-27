import React from 'react';
import { Spreadsheet } from './lib/components/Spreadsheet';

function App() {
  return (
    <div>
      <div>Yes</div>
      <Spreadsheet
        sheetData={[
          { name: 'lele', age: 1, },
          { name: 'yeye', age: 2, },
          { name: 'hehe', age: 3, },
        ]}
        sheetOption={{
          includes: ['name', 'age'],
        }}
      />
    </div>
  );
}

export default App;
