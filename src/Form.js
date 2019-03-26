import React from 'react';

export default class Form extends React.Component {
    state = {
        person: null,
        work: null,
        birthday: null,
        gender: null,
        employ: null,
        validationError: false
    };

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
        const {person, work, birthday, gender, employ} = this.state;
        this.props.onChangeItem({person, work, birthday, gender, employ});
        e.preventDefault();
    };

    handlePersonChange = e => {
        this.setState({person: e.target.value});
    };

    handleWorkChange = e => {
        this.setState({work: e.target.value});
    };

    handleBirthdayChange = e => {
        this.setState({birthday: e.target.value});
    };

    handleGenderChange = e => {
        this.setState({gender: e.target.checked});
    };

    handleEmployChange = e => {
        this.setState({employ: e.target.checked});
    };

    render() {
        const {data, onDeleteItem} = this.props;
        return (
            <div className="form__box card">
                <form className="form card-content">
                    {this.state.validationError && <p className="validation-error">Заполните все поля!</p>}
                    <div className="buttons ">
                        <button className="btn btn-add blue"
                                onClick={this.onBtnClickAddHandler} >
                            Добавить сотрудника
                        </button>
                        <button className="btn btn-del blue"
                                onClick={() => onDeleteItem(this.props.activeItem)}>
                            Удалить сотрудника
                        </button>
                    </div>
                    <label>ФИО </label>
                    <input id="fio"
                           type="text"
                           required={true}
                           defaultValue={data ? data.person : this.state.person}
                           onChange={this.handlePersonChange}
                    />
                    <label>Должность</label>
                    <select onChange={this.handleWorkChange} name="option" id="work">
                        <option selected disabled hidden>
                            {data && data.work}
                        </option>
                        <option value="Разработчик">Разработчик</option>
                        <option value="Дизайнер">Дизайнер</option>
                        <option value="Аналитик">Аналитик</option>
                        <option value="Тестировщик">Тестировщик</option>
                    </select>
                    <label>День рождения</label>
                    <input
                        type="date"
                        id="bday"
                        onChange={this.handleBirthdayChange}
                        defaultValue={data && data.birthday}
                    />
                    <label className="gender">Пол </label>
                    <div className="radio">
                        <label>
                            <input type="radio"
                                   className="radio"
                                   name="gender"
                                   value="m"
                                   defaultChecked={data && data.gender === "m"}
                                   onChange={this.handleGenderChange}/>м
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio"
                                   className="radio"
                                   name="gender"
                                   value="w"
                                   defaultChecked={data && data.gender === "w"}
                                   onChange={this.handleGenderChange}/>ж
                        </label>
                    </div>
                    <label className="employ">
                        <input type="checkbox"
                               id="employ"
                               defaultChecked={data ? data.employ : this.state.employ}
                               onChange={this.handleEmployChange}/>
                        Сотрудник уволен
                    </label>
                    <button className="btn blue" onClick={this.onChangeItem}>Изменить</button>
                </form>
            </div>
        );
    }
}