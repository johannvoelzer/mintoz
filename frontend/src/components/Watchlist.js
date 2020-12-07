import { useContext, useState } from 'react';
import { AuthContext } from './Authentication';
import firebaseConfig from "../firebaseConfig.js";
import { NavLink } from 'react-router-dom';

export default function Watchlist() {
    const { currentUser } = useContext(AuthContext);
    console.log(currentUser.uid)

    const watchResults = firebaseConfig.database().ref('Watchlist/' + currentUser.uid).on('value', (snapshot) => {
        snapshot.forEach((childSnapshot) => {
            childSnapshot.forEach((grandchildSnapshot) => {
                grandchildSnapshot.forEach((superGrandchildSnapshot) => {
                    var childKey = superGrandchildSnapshot.name
                    console.log(childKey.name)
                })
            });
          });
    })

    return (
        <ul>{watchResults}</ul>
    )
}