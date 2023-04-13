import React, { useEffect, useMemo, useRef } from 'react';
import donate from '../../../images/Paypal.png'
import styled from 'styled-components';


const DonateButton = () => {

    const width = window.innerWidth;
    const height = window.innerHeight;

    const windowFeatures: string = "left=" + (width / 2 - 330).toString() + ",top=" + (height / 2 - 400).toString() + ',width=660,height=800';

    const DonateHandler = () => {
        window.open(
            "https://www.paypal.com/donate/?hosted_button_id=W5UDQTBHPALBG",
            "_blank",
            windowFeatures
        );
    }

    return (
        <Wrapper>
            <img src={donate} alt="Paypal Donation" onClick={DonateHandler} />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    
    img{
        width: 35%;
        }
    `

export default DonateButton;