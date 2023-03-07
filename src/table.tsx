import React, { FC, TableHTMLAttributes } from 'react';

interface Props {
  headers: string[];
  data: {
    id: number;
    name: string;
    email: string;
  }[];
  variant?: 'default'|'primary' | 'secondary' |'light'|'dark';
}

export type TableProps = Props & TableHTMLAttributes<HTMLElement>;

const Table: FC<TableProps> = ( {
  headers,
  data,
  className = '',
  children = '',
  variant = 'default',
  ...props
}) => {
  let classes = 'table';

  classes += className ? ` ${className}` : '';
  classes += variant === 'default' ? ' table--default' : '';
  classes += variant === 'primary' ? ' table--primary' : '';
  classes += variant === 'secondary' ? ' table--secondary' : '';
  classes += variant === 'light' ? ' table-light' : '';
  classes += variant === 'dark' ? ' table-dark' : '';

    return (
      <table className={`${classes}`} {...props}>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
};

export default Table;