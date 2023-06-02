import React from 'react';
import styles from './Table.modue.scss'

import EmailForm from 'components/InputForm/EmailForm';
import InsertTextForm from 'components/InputForm/InsertTextForm';
import Button from 'components/Button';
import AddressForm from 'components/InputForm/AddressForm';
import TableList from './TableList';

const TableSheet = ({tableData}) => {
  console.log(tableData);
  const { name, email, userPhone, address, userMessage } = tableData;
  console.log(address);
  return (
    <table className={styles.tbSheet}>
      <tbody>
        <tr>
          <td>배송지 선택</td>
          <td>
            <label htmlFor="basic">
              <input type="radio" id="basic" name="drone" value="basic" checked />
              기본 배송지
            </label>
            <label htmlFor="new">
              <input type="radio" id="new" name="drone" value="new" checked />
              신규 배송지
            </label>
            <label htmlFor="recently">
              <input type="radio" id="recently" name="drone" value="recently" checked />
              최근 배송지
            </label>
            <Button type={'button'} text={'배송지 목록'} size={'btnM'} state={'white'} />
          </td>
        </tr>
        { name && 
          <TableList data={name} />
        }
        { email && 
          <TableList data={email} />
        }
        {
          userPhone && 
          <TableList data={userPhone} />
        }
        { address && 
          <TableList data={address} />
        }
        { userMessage && 
          <tr>
            <td>배송메세지</td>
            <td>
              <InsertTextForm />
            </td>
          </tr>
        }
      </tbody>
    </table>
  )
};

export default TableSheet;