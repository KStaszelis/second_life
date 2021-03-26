import React, {useState} from 'react';
const WhoHelp = () => {
    const [data, setData] = useState({
        fundacjom: {
            desc: 'djfsdfjkdjskjfksd',
            items: [
                {
                    header: 'fdfd',
                    subHeader: 'fdffd',
                    other: 'dsf'
                }
            ]
        },
        organizacjom: {
            desc: 'djfsdfjkdjskjfksd',
            items: [
                {
                    header: '22222222',
                    subHeader: 'fdffd',
                    other: 'dsf'
                }
            ]
        }
    })
    const [current, setCurrent] = useState('fundacjom')
    const clickFund = () => {
        setCurrent('fundacjom');
    }
    const clickOrg = () => {
        setCurrent('organizacjom');
    }
    const clickCollections = () => {
        setCurrent(true);
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
                {data[current].items.map(el => (
                    <li>{el.header}</li>
                ))}
            </div>

        </div>
    )
}
export default WhoHelp;