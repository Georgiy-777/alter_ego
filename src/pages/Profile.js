import React from 'react';
import { Figure, ListGroup} from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { observer } from "mobx-react-lite";

const Profile = observer(() => {

    const {t}  = useTranslation();

    return (

        <div style={{padding: "35px"}}>
                <h2 className='d-flex justify-content-center m-3 '
                        style={{fontWeight: '600', fontSize: "45px", fontFamily: "Arial"}}>{t('prof-inform')}</h2>
                <div style={{ display: 'flex', flexDirection: "row", alignItems: "center" }}>

                    <Figure >
                        <Figure.Image
                            width={271}
                            height={280}
                            alt="Avatar foto"
                            src="https://www.meme-arsenal.com/memes/3fbc577bba972a33aed3262196e3608b.jpg"
                            style={{borderRadius: "15px"}}
                        />
                    </Figure>

                    <ListGroup variant="flush" className='ml-4'>
                        <ListGroup.Item><span style={{fontSize: "18px", fontWeight: "500", marginRight: "15px"}}>{t('email')}: </span>enot23@gmail.com</ListGroup.Item>
                        <ListGroup.Item><span style={{fontSize: "18px", fontWeight: "500", marginRight: "15px"}}>{t('phone')}: </span>+7682359473</ListGroup.Item>
                        <ListGroup.Item><span style={{fontSize: "18px", fontWeight: "500", marginRight: "15px"}}>{t('website')}: </span>yhscj78ybcds.com</ListGroup.Item>
                    </ListGroup>
                </div>

                <h3>{t('prof-head-interest')}</h3>
                <p className='m-3 ' style={{fontSize: "18px", fontWeight: "300", marginRight: "15px"}}>{t('prof-interest')}</p>


        </div>
    );
});

export default Profile;
