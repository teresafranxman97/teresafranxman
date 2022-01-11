import React from 'react';
import { Icon } from '@iconify/react';
import Styled from './styles';

const Repairs = () => {
    return (
        <Styled>
            <h2>Under maintenance <Icon icon="grommet-icons:vm-maintenance" /> </h2>
            <h2>Come back soon <Icon icon="carbon:face-cool" /> </h2>
        </Styled>
    )
};

export default Repairs;
