import { useState } from 'react'
import DescriptionBox from '../styles/boxes/DescriptionBox'
import { UpIcon, DownIcon } from './Icons'
import ToggleButton from '../styles/buttons/ToggleButton'

export default function Description({profile}) {
    const [companyDescription, setCompanyDescription] = useState(false)

    if (profile.description) {
        return (
            <DescriptionBox>
                {!companyDescription &&
                    <div>
                        <p>{profile.description.substr(0, 280) + "\u2026"}</p>
                        <ToggleButton style={{marginBottom: '0'}} onClick={() => setCompanyDescription(true)}><DownIcon /></ToggleButton>
                    </div>
                }
                {companyDescription &&
                    <div>
                        <p>{profile.description}</p>
                        <ToggleButton style={{marginBottom: '0'}} onClick={() => setCompanyDescription(false)}><UpIcon /></ToggleButton>
                    </div>
                }
            </DescriptionBox>
        )
    }
    return (
        <div/>
    )
}