import React, { useState } from 'react';
import Table from './table';

interface Data {
  id: number;
  name: string;
  email: string;
}

const App: React.FC = () => {
  const [data, setData] = useState<Data[]>([
    { id: 1, name: 'John', email: 'john@example.com' },
    { id: 2, name: 'Jane', email: 'jane@example.com' },
    { id: 3, name: 'Bob', email: 'bob@example.com' },
  ]);

  return (
    <div>
      <h1>Table Example</h1>
      <Table headers={['ID', 'Name', 'Email']} data={data} />
    </div>
  );
};

export default App;
