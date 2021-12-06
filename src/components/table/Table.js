/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-restricted-syntax */
import React from 'react';
import PropTypes from 'prop-types';
import './Table.scss';

const Table = ({tableData, headingColumns, title, breakOn = 'medium'}) => {
    let tableClass = 'table-container__table';

    if (breakOn === 'small') {
        tableClass += ' table-container__table--break-sm';
    } else if (breakOn === 'medium') {
        tableClass += ' table-container__table--break-md';
    } else if (breakOn === 'large') {
        tableClass += ' table-container__table--break-lg';
    }

    const data = tableData.map((row, index) => {
        const rowData = [];
        let i = 0;

        // eslint-disable-next-line guard-for-in
        for (const key in row) {
            rowData.push({
                key: headingColumns[i],
                val: row[key]
            });
            // eslint-disable-next-line no-plusplus
            i++;
        }

        return (
            <tr key={index}>
                {rowData.map((data, index) => (
                    <td key={index} data-heading={data.key}>
                        {data.val}
                    </td>
                ))}
            </tr>
        );
    });

    return (
        <div className="table-container">
            <div className="table-container__title">
                <h2>{title}</h2>
            </div>
            <table className={tableClass}>
                <thead>
                    <tr>
                        {headingColumns.map((col, index) => (
                            <th key={index}>{col}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>{data}</tbody>
            </table>
        </div>
    );
};

Table.propTypes = {
    tableData: PropTypes.arrayOf(PropTypes.object).isRequired,
    headingColumns: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
    breakOn: PropTypes.oneOf(['small', 'medium', 'large'])
};

Table.defaultProps = {
    breakOn: 'small'
};
export default Table;
