import React from 'react';

const TableList = ({data}) => {
  const { type, value, zonecode, address1, address2  } = data
  return (
    <>
    { value && 
      <tr>
        <td>{type}</td>
        <td>{value}</td>
    </tr>
    }
    { type === '주소' && 
      <tr>
        <td>{type}</td>
        <td>
          [ {zonecode} ]<br />
        {address1} {address2}
        </td>
      </tr>
    }
    </>
  )
};

export default TableList;