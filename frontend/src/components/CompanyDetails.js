import { useState } from 'react'
import InformationBox from '../styles/boxes/InformationBox'
import { UpIcon, DownIcon } from './Icons'
import Details from '../styles/text/Details'
import Description from '../styles/text/Description'
import ToggleButton from '../styles/buttons/ToggleButton'

export default function CompanyDetails({profile}) {
    const [companyDescription, setCompanyDescription] = useState(false)

    if (profile.description) {
        return (
            <InformationBox>
                <Details>
                    <div>
                        {profile.country ? <h4>{profile.country}</h4> : <h4>–</h4>}
                        <h5>COUNTRY</h5>
                    </div>
                    <div style={{width: '100px'}}>
                        {profile.exchangeShortName ? <h4>{profile.exchangeShortName}</h4> : <h4>–</h4>}
                        <h5>EXCHANGE</h5>
                    </div>
                </Details>
                <br />
                <Details>
                    <div>
                        {profile.sector ? <h4>{profile.sector}</h4> : <h4>–</h4>}
                        <h5>SECTOR</h5>
                    </div>
                    <div style={{width: '100px'}}>
                        {profile.fullTimeEmployees ? <h4>{profile.fullTimeEmployees}</h4> : <h4>–</h4>}
                        <h5>EMPLOYEES</h5>
                    </div>
                </Details>
                <Description active={companyDescription}>
                    <p>{profile.description}</p>
                    {!companyDescription && 
                    <ToggleButton style={{marginBottom: '0'}} onClick={() => setCompanyDescription(true)}><DownIcon /></ToggleButton>
                    }
                    {companyDescription &&
                            <ToggleButton style={{marginBottom: '0'}} onClick={() => setCompanyDescription(false)}><UpIcon /></ToggleButton>
                    }
                </Description>
            </InformationBox>
        )
    }
    return (
        <InformationBox>
                <Details>
                    <div>
                        {profile.country ? <h4>{profile.country}</h4> : <h4>–</h4>}
                        <h5>COUNTRY</h5>
                    </div>
                    <div style={{width: '100px'}}>
                        {profile.exchangeShortName ? <h4>{profile.exchangeShortName}</h4> : <h4>–</h4>}
                        <h5>EXCHANGE</h5>
                    </div>
                </Details>
                <br />
                <Details>
                    <div>
                        {profile.sector ? <h4>{profile.sector}</h4> : <h4>–</h4>}
                        <h5>SECTOR</h5>
                    </div>
                    <div style={{width: '100px'}}>
                        {profile.fullTimeEmployees ? <h4>{profile.fullTimeEmployees}</h4> : <h4>–</h4>}
                        <h5>EMPLOYEES</h5>
                    </div>
                </Details>
            </InformationBox>
    )
}
