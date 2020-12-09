import { useState } from 'react'
import InformationBox from '../styles/boxes/InformationBox';
import { UpIcon, DownIcon } from './Icons';
import Details from '../styles/text/Details';
import Description from '../styles/text/Description';
import ToggleButton from '../styles/buttons/ToggleButton';

export default function CompanyDetails({result}) {
    const [companyDescription, setCompanyDescription] = useState(false)

    return (
        <InformationBox>
            <Details>
                <div>
                    <h4>{result.Country}</h4>
                    <h5>COUNTRY</h5>
                </div>
                <div style={{width: '100px'}}>
                    <h4>{result.Exchange}</h4>
                    <h5>EXCHANGE</h5>
                </div>
            </Details>
            <br />
            <Details>
                <div>
                    <h4>{result.Sector}</h4>
                    <h5>SECTOR</h5>
                </div>
                <div style={{width: '100px'}}>
                    <h4>{result.FullTimeEmployees}</h4>
                    <h5>EMPLOYEES</h5>
                </div>
            </Details>
            <Description active={companyDescription}>
                <p>{result.Description}</p>
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
