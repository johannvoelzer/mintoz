import Navigation from '../../components/Navigation'
import { useContext } from 'react'
import { Redirect, useHistory } from 'react-router-dom'
import * as ROUTES from '../../constants/Routes'
import { AuthContext } from '../../components/Authentication'
import ChampionGroups from '../../components/ChampionGroups'
import ChampionsBox from '../../styles/boxes/ChampionsBox'
import BackButton from '../../styles/buttons/BackButton'
import { BackIcon, TrophyIcon } from '../../components/Icons'

const ChampionsPage = () => {
    const history = useHistory()

    const { currentUser } = useContext(AuthContext)
        if (!currentUser) {
            return <Redirect to={ROUTES.LOGIN} />
        }
    return (
        <div style={{marginBottom: '100px'}}>
            <ChampionsBox>
                <BackButton style={{marginTop: '2px'}} onClick={() => history.goBack()}>
                    <BackIcon />
                </BackButton>
                <h2 style={{margin: '2px 0 0', width: '200px'}}><TrophyIcon /> CHAMPIONS</h2>
                <div style={{width: '22px'}} />
            </ChampionsBox>
            <ChampionGroups />
            <Navigation />
        </div>
    )
}

export default ChampionsPage