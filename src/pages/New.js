import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Card, ListGroup, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { observer } from "mobx-react-lite";

const New = observer(() => {

    const [users, setUsers] = useState([])

    async function fetchUsers() {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            setUsers(response.data)
        } catch (e) {
            alert(e)
        }
    }

    useEffect(() => {
        fetchUsers()
    }, [])
    const {t}  = useTranslation();

    return (
        <div>
            <Row className='d-flex justify-content-center m-auto pt-5 pb-5' style={{width: '40rem'}}>
                {users.map(user =>
                    <Card style={{width: '18rem', border: '1px solid black'}} className='p-3 m-2 '  key={user.id}>
                        <Card.Body >
                            <Card.Title>{user.name}</Card.Title>
                            <ListGroup variant="flush">
                                <ListGroup.Item><span style={{fontSize: "12px", fontWeight: "500", marginRight: "15px"}}>{t('email')}: </span>{user.email}</ListGroup.Item>
                                <ListGroup.Item><span style={{fontSize: "12px", fontWeight: "500", marginRight: "15px"}}>{t('phone')}: </span>{user.phone}</ListGroup.Item>
                                <ListGroup.Item><span style={{fontSize: "12px", fontWeight: "500", marginRight: "15px"}}>{t('website')}: </span>{user.website}</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                )}
            </Row>
        </div>
    );
});

export default New;
