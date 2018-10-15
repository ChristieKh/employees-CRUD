import React from 'react';

export default class Form extends React.Component {
    constructor() {
        super();
        this.state = {
                person: null,
                work: null,
                birthday: null,
                gender: null,
                employ: null
        };
    }

    onBtnClickAddHandler = e => {
        e.preventDefault();
        const { person, work, birthday, gender, employ } = this.state;
        this.props.onAddItem({ person, work, birthday, gender, employ });

    };

    onChangeItem = e => {
        e.preventDefault();
        const { person, work, birthday, gender, employ } = this.state;
        this.props.onChangeItem({ person, work, birthday, gender, employ });

    };

    handlePersonChange = e => {
        this.setState({ person: e.currentTarget.value });
    };

    handleWorkChange = e => {
        this.setState({ work: e.currentTarget.value });
    };

    handleBirthdayChange = e => {
        this.setState({ birthday: e.currentTarget.value });
    };

    handleGenderChange = e => {
        this.setState({ gender: e.currentTarget.checked});
        console.log(e.currentTarget.checked);
    };

    handleEmployChange = e => {
        this.setState({ employ: e.currentTarget.checked });
    };

    render() {
        return (
            <div className="form__box">
                <form className="form" method="" action="">
                    <div className="buttons">
                        <button
                            type="submit"
                            className="btn btn-add"
                            value="submit"
                            onClick={this.onBtnClickAddHandler}
                        >
                            Добавить сотрудника
                        </button>
                        <button
                            type="submit"
                            className="btn btn-del"
                            value="submit"
                            onClick={() => this.props.onDeleteItem(this.props.activeItem)}
                        >
                            Удалить сотрудника
                        </button>
                    </div>
                    <label>ФИО </label>
                    <input
                        id="fio"
                        type="text"
                        required={true}
                        defaultValue={
                            this.props.data ? this.props.data.person : this.state.person
                        }
                        onChange={this.handlePersonChange}
                    />
                    <label>Должность</label>
                    <select onChange={this.handleWorkChange} name="option" id="work">
                        <option selected disabled hidden>
                            {this.props.data ? this.props.data.work : null}
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
                        defaultValue={this.props.data ? this.props.data.birthday : null}
                    />

                    <label className="gender">Пол </label>
                    <div className="radio">
                        <label>
                            <input
                                type="radio"
                                className="radio"
                                name="gender"
                                value="m"
                                defaultChecked={
                                    this.props.data ? this.props.data.gender === "m" : null
                                }
                                onChange={this.handleGenderChange}
                            />м
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input
                                type="radio"
                                className="radio"
                                name="gender"
                                value="w"
                                defaultChecked={
                                    this.props.data ? this.props.data.gender === "w" : null
                                }
                                onChange={this.handleGenderChange}
                            />ж
                        </label>
                    </div>
                    <label>
                        Уволен
                        <input
                            type="checkbox"
                            id="employ"
                            defaultChecked={this.props.data ? this.props.data.employ : this.state.employ}
                            onChange={this.handleEmployChange}
                        />
                    </label>
                    <button className="btn" type="submit" value="submit" onClick={this.onChangeItem}>
                        Изменить
                    </button>
                </form>
            </div>
        );
    }
}