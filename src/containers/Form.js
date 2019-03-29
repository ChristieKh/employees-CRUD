import React from 'react';
import ButtonsForChangeItem from "../components/ButtonsForChangeItem";

export default class Form extends React.Component {
    state = {
        person: null,
        work: null,
        birthday: null,
        gender: null,
        employ: null,
        validationError: false
    };

    personRef = React.createRef();
    workRef = React.createRef();
    birthdayRef = React.createRef();
    genderRef = React.createRef();
    employRef = React.createRef();

    onBtnClickAddHandler = e => {
        const {person, work, birthday, gender, employ} = this.state;
        if (person === null || work === null || birthday === null || gender === null || employ === null) {
            this.setState({validationError: true})
        } else {
            this.props.onAddItem({person, work, birthday, gender, employ});
            this.setState({validationError: false})
        }
        e.preventDefault();
    };

    onChangeItem = e => {
        e.preventDefault();
        const {person, work, birthday, gender, employ} = this.state;
        this.props.onChangeItem({person, work, birthday, gender, employ});
    };

    handleInputValueChange = () => {
        this.setState({
            person: this.personRef.current.value,
            work: this.workRef.current.value,
            birthday: this.birthdayRef.current.value,
        })
    };

    handleInputCheckChange = () => {
        this.setState({
            gender: this.genderRef.current.checked,
            employ: this.employRef.current.checked
        })
    };

    render() {
        const {data, onDeleteItem} = this.props;
        return (
            <div className="form__box">
                <form className="form card-content">
                    {this.state.validationError &&
                    <div className="card-panel red darken-1 center">Заполните все поля!</div>}
                    <ButtonsForChangeItem addItem={this.onBtnClickAddHandler}
                                          deleteItem={(event) => onDeleteItem(this.props.activeItem, event)}/>
                    <label>ФИО</label>
                    <input ref={this.personRef}
                           type="text"
                           defaultValue={data ? data.person : this.state.person}
                           onChange={this.handleInputValueChange}/>
                    <label>Должность</label>
                    <select className="browser-default" onChange={this.handleInputValueChange} name="option"
                            ref={this.workRef}>
                        <option selected disabled hidden>
                            {data && data.work}
                        </option>
                        <option value="Разработчик">Разработчик</option>
                        <option value="Дизайнер">Дизайнер</option>
                        <option value="Аналитик">Аналитик</option>
                        <option value="Тестировщик">Тестировщик</option>
                    </select>
                    <label>День рождения</label>
                    <input type="date"
                           ref={this.birthdayRef}
                           onChange={this.handleInputValueChange}
                           defaultValue={data && data.birthday}/>
                    <label className="gender">Пол
                        <p>
                            <label>
                                <input type="radio"
                                       ref={this.genderRef}
                                       className="with-gap"
                                       name="gender"
                                       value="m"
                                       defaultChecked={data && data.gender === "m"}
                                       onChange={this.handleInputCheckChange}/>
                                <span>м</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input type="radio"
                                       ref={this.genderRef}
                                       className="with-gap"
                                       name="gender"
                                       value="w"
                                       defaultChecked={data && data.gender === "w"}
                                       onChange={this.handleInputCheckChange}/>
                                <span>ж</span>
                            </label>
                        </p>
                    </label>
                    <p className="employ">
                        <label>
                            <input type="checkbox"
                                   ref={this.employRef}
                                   defaultChecked={data ? data.employ : this.state.employ}
                                   onChange={this.handleInputCheckChange}/>
                            <span>Сотрудник уволен</span>
                        </label>
                    </p>
                    <button className="btn blue btn-change" onClick={this.onChangeItem}>
                        <span><i className="fa fa-pencil-square-o"/>Изменить</span>
                    </button>
                </form>
            </div>
        );
    }
}