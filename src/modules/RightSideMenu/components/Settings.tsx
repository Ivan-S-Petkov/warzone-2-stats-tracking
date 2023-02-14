import React, { useContext, useState } from 'react'
import { AppContext } from 'src/Providers/global';
import { UserContext } from 'src/Providers/user';
import { Button, ContentForm, Header, Wrapper } from './common.styled';

function Settings() {
    const { user } = useContext(UserContext);
    const { setMenuError } = useContext(AppContext);

    const [email, setEmail] = useState(user.email || '');
    const [name, setName] = useState(user.displayName || '');
    const [accountType, setAccountType] = useState(user.AccountType || 'PSN');
    const [accountName, setAccountName] = useState(user.AccountName || '');

    function onChange(action: string, e: any): void {
        e.preventDefault();

        switch (action) {
            case "email":
                console.log("Email");
                setEmail(e.target.value);
                break;
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

    const saveGamingAccountHandler = (e: any) => {
        e.preventDefault();

        if (accountType && accountName) {
            //Write to the User DB
        }
        else {
            setMenuError({ name: 'Error', message: 'Platform and Nickname are required' });
        }

    }

    const saveEmailName = (e: any) => {
        e.preventDefault();


    }

    return (
        <Wrapper>
            <Header>Settings</Header>
            <ContentForm>
                <p>Email Address</p>
                <input
                    type="text"
                    value={email}
                    onChange={(e) => onChange('email', e)}
                />
                <p>Name</p>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => onChange('name', e)}
                />
                <Button type='button' onClick={saveEmailName}>Save Profile</Button>
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
                <Button type='button' onClick={saveGamingAccountHandler}>Save Gaming Account</Button>
            </ContentForm>
        </Wrapper>
    )
}



export default Settings