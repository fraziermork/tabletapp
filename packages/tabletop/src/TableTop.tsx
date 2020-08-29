import React, { HTMLAttributes } from 'react';

interface TableTopProps extends HTMLAttributes<HTMLDivElement> {
  id: string;
}

function TableTop({ id, ...rest }: TableTopProps): React.ReactElement {
  console.log(`TableTop id: "${id}"`);
  return <div {...rest}>PLACEHOLDER</div>;
}

export { TableTop };
