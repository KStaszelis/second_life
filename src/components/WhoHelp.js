import React, {useState, useEffect, useContext} from 'react';
import {FirebaseContext} from "./Firebase";

const WhoHelp = (props) => {
    const firebase = useContext(FirebaseContext);
    const fundRef = firebase.db.collection('second_life').doc('fundacje');
    const [datas, setDatas] = useState(
        ["gówno "]
    );
    const [current, setCurrent] = useState("pusty")

    useEffect(() => {

        fundRef.get().then(snapshot => console.log(snapshot))

    }, [setDatas]);

    const clickFund = (props) => {
        fundRef.get().then(function(doc) {
            if (doc.exists) {
                const setDataUpload = [doc.data()];
                console.log("Document data:", doc.data());
                console.log(setDataUpload);
                setDatas(setDataUpload);
                console.log(datas)
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });

    }
    //  const documentsCollection = (doc) => {
    //      return {id: doc.id, ...doc.data()};
    //  };
    const fundElements = datas.map((fundElem, i) =>
        <li key={i}>{fundElem.name}</li>);
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
                <div>{fundElements}</div>
            </div>

        </div>
    )
}
export default WhoHelp;export default WhoHelp;