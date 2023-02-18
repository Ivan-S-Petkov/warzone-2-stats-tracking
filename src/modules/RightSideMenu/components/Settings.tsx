import { stringify } from 'querystring';
import React, { useContext, useState } from 'react'
import { readUserData, updateUserData } from 'src/modules/User/api/firestore';
import { AppContext } from 'src/Providers/global';
import { UserContext } from 'src/Providers/user';
import { Button, ContentForm, Header, Wrapper } from './common.styled';

function Settings() {
    const { user, setUserData } = useContext(UserContext);
    const { setMenuError } = useContext(AppContext);

    const [name, setName] = useState(user!.name || '');
    const [accountType, setAccountType] = useState(user!.accountType || 'PSN');
    const [accountName, setAccountName] = useState(user!.accountName || '');

    function onChange(action: string, e: any): void {
        e.preventDefault();

        switch (action) {
            case 'name':
                setName(e.target.value);
                break;
            case 'accountType':
                setAccountType(e.target.value);
                break;
            case 'accountName':
                setAccountName(e.target.value);
                break;
            default:
                console.log('No action triggered.');
                break;
        }
    }


    const saveAccountHandler = (e: any) => {
        e.preventDefault();
        let data: any = {
            name,
            accountType,
            accountName,
        };

        updateUserData(user!.id, data)
            .then((res) => {
                readUserData(user!.id)
                    .then((res: any) => {
                        setUserData(res);
                        setMenuError({ name: 'Notification', message: 'Account details updated successful.' })
                    })
            })
            .catch((err) => {
                console.log(err);
            })
    }


    return (
        <Wrapper>
            <Header>Settings</Header>
            <ContentForm onSubmit={saveAccountHandler}>
                <p>Name</p>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => onChange('name', e)}
                />
                <p>Gaming Account</p>
                <span>Platform</span>
                <select value={accountType} onChange={(e) => onChange('accountType', e)}>
                    <option value="PSN">PSN</option>
                    <option value="XBOX">XBOX</option>
                    <option value="Activision">Activision</option>
                    <option value="Uno">Uno</option>
                </select>
                <span>Nickname</span>
                <input
                    type="text"
                    value={accountName}
                    onChange={(e) => onChange('accountName', e)}
                />
                <Button type='submit' >Save Account</Button>
            </ContentForm>
        </Wrapper>
    )
}



export default Settings