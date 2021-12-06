/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {Table, SmallBox} from '@components';

const tracksData = [
    {
        name: 'Spa-Francorchamps',
        country: 'Belgium',
        length: 7.004,
        numberOfLaps: 44
    },
    {
        name: 'Circuit de Monaco',
        country: 'Monaco',
        length: 3.337,
        numberOfLaps: 78
    },
    {
        name: 'Silverstone',
        country: 'England',
        length: 5.891,
        numberOfLaps: 52
    },
    {
        name: 'Suzuka',
        country: 'Japan',
        length: 5.807,
        numberOfLaps: 53
    },
    {
        name: 'Hockenheimring',
        country: 'Germany',
        length: 4.574,
        numberOfLaps: 47
    }
];

const Admin = () => {
    return (
        <div>
            <section className="content">
                <div className="container-fluid">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col col">
                                    <SmallBox
                                        count={150}
                                        title="New Orders"
                                        type="info"
                                        icon="ion-android-people"
                                        navigateTo="/"
                                    />
                                </div>
                                <div className="col-sm-3 col-4">
                                    <SmallBox
                                        count={150}
                                        title="New Orders"
                                        type="info"
                                        icon="ion-android-people"
                                        navigateTo="/"
                                    />
                                </div>
                                <div className="col-sm-3 col-4">
                                    <SmallBox
                                        count={150}
                                        title="New Orders"
                                        type="info"
                                        icon="ion-android-people"
                                        navigateTo="/"
                                    />
                                </div>
                                <div className="col-sm-3 col-4">
                                    <SmallBox
                                        count={150}
                                        title="New Orders"
                                        type="info"
                                        icon="ion-android-people"
                                        navigateTo="/"
                                    />
                                </div>
                                <div className="col-sm-3 col-4">
                                    <SmallBox
                                        count={150}
                                        title="New Orders"
                                        type="info"
                                        icon="ion-android-people"
                                        navigateTo="/"
                                    />
                                </div>
                            </div>
                            <div>
                                <Table
                                    tableData={tracksData}
                                    headingColumns={[
                                        'Name',
                                        'Country',
                                        'Length(km)',
                                        'Number of laps'
                                    ]}
                                    title="Top F1 tracks"
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

export default Admin;
