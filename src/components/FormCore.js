import React, {useState} from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export const FormOne = ({formData, setForm, navigation}) => {

    const {checkbox1, checkbox2, checkbox3, checkbox4, checkbox5}=formData;
    console.log(checkbox1);
    console.log(checkbox2);


    return (
        <form>
            <div className="header-home grey-background">
                <div>
                    <div>Krok 1/4</div>
                    <h3>Zaznacz co chcesz oddać</h3>
                    <div>
                        <div>
                            <label>
                                <input type="checkbox" name="checkbox1"
                                       onChange={setForm}
                                       value={checkbox1}/>
                                ubrania, które nadają się do ponownego użycia
                            </label>
                        </div>
                        <div>

                            <label>
                                <input type="checkbox" name="checkbox2" onChange={setForm} value={checkbox2}/>
                                ubrania do wyrzucenia
                            </label>
                        </div>
                        <div>

                            <label>
                                <input type="checkbox" name="checkbox3" onChange={setForm} value={checkbox3}/>
                                zabawki</label>
                        </div>
                        <div>

                            <label>
                                <input type="checkbox" name="checkbox4" onChange={setForm} value={checkbox4}/>
                                książki</label>
                        </div>
                        <div>

                            <label>
                                <input type="checkbox" name="checkbox5" onChange={setForm} value={checkbox5}/>
                                inne</label>
                        </div>
                        <button className="button home-buttons form-btn" onClick={()=>navigation.next()}>Dalej</button>
                    </div>
                </div>
                <div>right</div>
            </div>
        </form>
    );
};
export const FormTwo = ({formData, setForm, navigation}) => {

    const {amount}=formData;
    console.log(amount);
    return (
        <form>

            <div className="header-home grey-background">
                <div>
                    <div>Krok 2/4</div>
                    <h3>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy</h3>
                    <div>

                        <div className="control-group">
                            <label className="control control-checkbox">
                                Liczba 60l worków
                                <select name="amount" onChange={setForm} value={amount}>
                                    <option value="" selected>--Wybierz--</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </label>
                            <button className="button home-buttons form-btn" onClick={()=>navigation.previous()}>Wstecz</button>
                            <button className="button home-buttons form-btn" onClick={()=>navigation.next()}>Dalej</button>
                        </div>
                    </div>
                </div>
                <div>right</div>
            </div>
        </form>
    );
};
export const FormThree = ({formData, setForm, navigation}) => {
    const {selectCity, dzieciom, komu, matkom, bezdomnym, niepełnosprawnym}=formData;
    const chosen = ["dzieciom", "matkom", "bezdomnym", "niepełnosprawnym"];
    const [checked, setChecked]=useState([]);
    const handleChecked=(e)=>{
        const who= chosen[e.target.dataset.id];
        let newTab=checked.filter(item=>item !==who);
        if(e.target.checked) newTab.push(who);
        setChecked(newTab);

        // console.log(who);
        console.log(newTab);

    }

    return (
        <form>

            <div className="header-home grey-background">
                <div>
                    <div>Krok 3/4</div>
                    <h3>Lokalizacja</h3>
                    <select name="selectCity" onChange={setForm} value={selectCity}>
                        <option value="" selected>--Wybierz--</option>
                        <option value="Poznań">Poznań</option>
                        <option value="Warszawa">Warszawa</option>
                        <option value="Kraków">Kraków</option>
                        <option value="Wrocław">Wrocław</option>
                        <option value="Gdańsk">Gdańsk</option>
                    </select>
                    <h3>Komu chcesz pomóc?</h3>

                    <div>{chosen.map((who, id)=>(<label key={id}>
                        <input type="checkbox"
                               name="komu"
                               value={komu}
                               data-id={id}
                               onChange={setForm}
                               onClick={handleChecked}/>{who}
                    </label>))}</div>
                    <span>Wybrałeś:</span>
                    <div value={komu} name="komu" id="checkbox1Results" onChange={setForm}>{checked.map((item, id)=><li key={id}>{item}</li>)}</div>
                    {/*<div>{checked.map((item, id)=><span key={id}>{item}</span>)}</div>*/}
                    {/*<label><input type="checkbox"*/}
                    {/*              name="dzieciom"*/}
                    {/*              onChange={setForm}*/}
                    {/*              value={dzieciom}*/}
                    {/*/>*/}
                    {/*dzieciom</label>*/}

                    {/*<label> <input*/}
                    {/*    type="checkbox"*/}
                    {/*    name="komu"*/}
                    {/*    onChange={setForm}*/}
                    {/*    value={komu}*/}
                    {/*    />samotnym matkom</label>*/}
                    {/*<label><input*/}
                    {/*    type="checkbox"*/}
                    {/*    name="komu"*/}
                    {/*    onChange={setForm}*/}
                    {/*    value={komu}*/}
                    {/*/>bezdomnym</label>*/}
                    {/*<label> <input*/}
                    {/*    type="checkbox"*/}
                    {/*    name="komu"*/}
                    {/*    onChange={setForm}*/}
                    {/*    value={komu}*/}
                    {/*/>niepełnosprawnym</label>*/}
                    <h3>Wpisz nazwę konkretnej organizacji (opcjonalnie)</h3>
                    <input className="input-step3" type="text"/>
                    <div>

                        <div className="control-group">

                            <button className="button home-buttons form-btn" onClick={()=>navigation.previous()}>Wstecz</button>
                            <button className="button home-buttons form-btn" onClick={()=>navigation.next()}>Dalej</button>
                        </div>
                    </div>
                </div>
                <div>right</div>
            </div>

        </form>
    );
};
export const FormFour = ({formData, setForm, navigation}) => {
    const {street, city, postalCode, mobile, date, time, remarks}=formData
    console.log(street);
    return (
        <form>
            <div className="header-home grey-background">
                <div>
                    <div>Krok 4/4</div>
                    <h3>Podaj adres i termin odbioru rzeczy przez kuriera</h3>
                    <div className="internal-form">
                        <div className="form">
                            <h4>Podaj adres odbioru</h4>
                            <label>Ulica
                                <input
                                    name="street"
                                    type="text"
                                    onChange={setForm}
                                    value={street}/>
                            </label>
                            <label>Miasto <input name="city" onChange={setForm} value={city} type="text"/></label>
                            <label>Kod pocztowy <input name="postalCode" onChange={setForm} value={postalCode} type="text"/></label>
                            <label>Numer telefonu <input name="mobile" onChange={setForm} value={mobile} type="text"/></label>
                        </div>
                        <div className="form">
                            <h4>Termin odbioru</h4>
                            <label>Data <input name="date" onChange={setForm} value={date} type="date"/></label>
                            <label>Godzina <input name="time" onChange={setForm} value={time} type="time"/></label>
                            <label>Uwagi dla kuriera <textarea name="remarks" onChange={setForm} value={remarks}/></label>

                        </div>


                    </div>


                    <div className="control-group">

                        <button className="button home-buttons form-btn" onClick={()=>navigation.previous()}>Wstecz</button>
                        <button className="button home-buttons form-btn" onClick={()=>navigation.next()}>Dalej</button>
                    </div>
                </div>
                <div>right</div>
            </div>
        </form>
    );
};
export const FormReview =({formData, navigation})=>{

    const {go}=navigation;
    const {checkbox1,
        checkbox2,
        checkbox3,
        checkbox4,
        checkbox5,
        amount,
        selectCity,
        komu,
        dzieciom,
        matkom,
        bezdomnym,
        niepełnosprawnym,
        street,
        city,
        postalCode,
        mobile,
        date,
        time,
        remarks
    }=formData;

    console.log(formData);
    return (<>
        <div className="header-home grey-background">
            <div>

                <h3>Podsumowanie Twojej darowizny</h3>
                <h4>Oddajesz: </h4>
                <Summary summary="co" go={go} details={[
                    {'Ubrania do ponownego użytku ':checkbox1},
                    {'Ubrania do wyrzucenia':checkbox2},
                    {'Zabawki':checkbox3},
                    {'Książki':checkbox4},
                    {'Inne':checkbox5}

                ]}/>
                <h4>Ilość worków: </h4>
                <Summary summary="ile" go={go} details={[
                    {'Ilość worków':amount},
                ]}/>
                <h4>Komu i w jakim mieście pomagasz: </h4>
                <Summary  summary="gdzie" go={go} details={[
                    {'Miasto':selectCity},
                    {'Komu':komu},

                    // {'Dzieciom':dzieciom},
                    // {'Samotnym matkom': matkom},
                    // {'bezdomnym': bezdomnym},
                    // {'niepełnosprawnym':niepełnosprawnym},
                ]}/>

                {/*<span>{komu.map(item=><span>{item}</span>)}</span>*/}
                {/*<p>{checked.join(", ")}</p>*/}
                {/*<p>{newTab.map(item=>( <span>{item}</span>))}</p>*/}
                {/*<div>{checked.map((item, id)=><span key={id}>{item}</span>)}</div>*/}
                <div className="address-form">
                    <div className="form">
                        <h4>Adres odbioru</h4>
                        <Summary summary="adres" go={go} details={[
                            {'Ulica':street},
                            {'Miasto':city},
                            {'Kod':postalCode},
                            {"Numer tel": mobile}

                        ]}/>
                    </div>
                    <div className="form">
                        <h4>Termin odbioru</h4>
                        <Summary  summary="adres" go={go} details={[
                            {'Data':date},
                            {'Godzina':time},
                            {'Uwagi dla kuriera':remarks}

                        ]}/>
                    </div>
                </div>
                <div className="control-group">
                    <button className="button home-buttons form-btn" onClick={()=>navigation.previous()}>Wstecz</button>
                    <button className="button home-buttons form-btn" onClick={()=>go('submit')}>Potwierdzam</button>
                </div>
            </div>
            <div>right</div>
        </div>
    </>)
}

export const Summary=({summary, details, go})=>{

    return (<>

        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
            >{summary}</AccordionSummary>
            <AccordionDetails>
                <div>
                    {details.map((data,index)=>{
                        const objKey=Object.keys(data)[0];
                        const objVal=data[objKey];
                        return (<ListItemText key={index}>{`${objKey}: ${objVal}`}</ListItemText>)
                    })}
                    <IconButton onClick={()=>go(`${summary.toLowerCase()}`)}><EditIcon/></IconButton>
                </div>

            </AccordionDetails>
        </Accordion>
    </>)
}