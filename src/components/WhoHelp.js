import React, {useState, useEffect, useContext} from 'react';
import {FirebaseContext} from "./Firebase";

const WhoHelp = () => {
    const firebase = useContext(FirebaseContext);
    const fundRef = firebase.db.collection('fundacje').doc('1');
    const [current, setCurrent] = useState(null)
    const documentsCollection = (doc) => {
        return {id: doc.id, ...doc.data()};
    };
    useEffect(() => {
       fundRef.get().then(snapshot => console.log(snapshot))

    }, []);

    const clickFund = () => {
   //     setCurrent(fundRef);
    }
    const clickOrg = () => {
     //   setCurrent(createOrgs);
    }
    const clickCollections = () => {
       // setCurrent(createLocalCollections);
    }
    return (
        <div id={"whoHelp"} className="who-help-main-container">
            <h2 className="who-help-title">Komu pomagamy?</h2>
            <div className="interline-img"> </div>
            <div className="who-help-buttons-container">
                <button className="who-help-button" onClick={clickFund}>Fundacjom</button>
                <button className="who-help-button" onClick={clickOrg}>Organizacjom<br/>pozarządowym</button>
                <button className="who-help-button" onClick={clickCollections}>Lokalnym<br/>zbiórkom</button>
            </div>
            <p className="who-help-description">W naszej bazie znajdziesz listę zweryfikowanych Fundacji,<br/>
            z którymi współpracujemy. Możesz sprawdzić czym się zajmują,<br/>
            komu pomagają i czego potrzebują.</p>

            <div className="foundations-list">
                lista fundacji
               {/*{data[current].items.map(el => (*/}
               {/*     <li>{el.header}</li>*/}
               {/* ))}*/}
            </div>

        </div>
    )
}
export default WhoHelp;