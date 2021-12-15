/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {Table} from '@components';

const tracksData = [
    {
        Peaje: ' ',
        Fecha: ' ',
        Recarga: ' ',
        Pagado: ' ',
        Saldo: ' '
    }
];
const Movimientos = () => {
    return (
        <div>
            <section className="content">
                <div className="container-fluid">
                    <div className="card">
                        <div className="card-body">
                            <div>
                                <Table
                                    tableData={tracksData}
                                    headingColumns={[
                                        'Peaje',
                                        'Fecha',
                                        'Recarga',
                                        'Pagado',
                                        'Saldo'
                                    ]}
                                    title="Movimientos"
                                    breakOn="small"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Movimientos;
