/* eslint-disable react/react-in-jsx-scope */
import SmallBox from '../small-box/SmallBox';

const Boxes = () => {
    return (
        <div>
            <div className="row">
                <div className="col">
                    <SmallBox
                        count="consorcio"
                        title=" "
                        type="info"
                        icon="ion-android-people"
                        navigateTo="/admin/consorcio"
                    />
                </div>
                <div className="col">
                    <SmallBox
                        count="Peajes"
                        title=" "
                        type="info"
                        icon="ion-android-people"
                        navigateTo="/admin/peajes"
                    />
                </div>
                <div className="col">
                    <SmallBox
                        count="Empleado"
                        title=" "
                        type="info"
                        icon="ion-android-people"
                        navigateTo="/admin/empleado"
                    />
                </div>
                <div className="col">
                    <SmallBox
                        count="Facturación"
                        title=" "
                        type="info"
                        icon="ion-android-people"
                        navigateTo="/admin/factura"
                    />
                </div>
            </div>
        </div>
    );
};

export default Boxes;
