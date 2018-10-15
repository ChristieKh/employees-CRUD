import React, { Component } from "react";
import Cards from "./Cards";
import Form from "./Form";
import { data } from "./Employees";

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            data: data,
            activeItem: -1
        };
    }

    selectItem = index => {
        const elementNew = document.getElementById(index).firstChild;
        const elementOld = this.state.activeItem > -1 ? document.getElementById(this.state.activeItem).firstChild : null;

        if (elementOld !== elementNew) {
            if (elementOld !== null) {
                elementOld.classList.remove("colorAdd");
                elementNew.classList.add("colorAdd");

            } else {
                elementNew.classList.add("colorAdd");
            }
            this.setState({
                ...this.state,
                activeItem: index
            });
            console.log("добавили цвет")
        } else {
            elementNew.classList.remove("colorAdd");
            this.setState({
                ...this.state,
                activeItem: -1
            });
            console.log("убрали цвет")
        }
    };

    handleAddItem = data => {
        const nextItem = [...this.state.data, data];
        this.setState({ data: nextItem });
    };

    handleRemoveItem = activeItem => {
        data.splice(activeItem, 1);
        this.setState({ data: data });
    };

    handleChangeItem = data => {
        let newData = this.state.data;
        const activeItem = this.state.activeItem;
        data.person  ? newData[activeItem].person = data.person : newData[activeItem].person = this.state.data[activeItem].person;
        data.work  ? newData[activeItem].work = data.work : newData[activeItem].work = this.state.data[activeItem].work;
        data.birthday  ? newData[activeItem].birthday = data.birthday : newData[activeItem].birthday = this.state.data[activeItem].birthday;
        data.gender  ? newData[activeItem].gender = data.gender : newData[activeItem].gender = this.state.data[activeItem].gender;
        data.employ  ? newData[activeItem].employ = data.employ : newData[activeItem].employ = this.state.data[activeItem].employ;

        this.setState({
            ...this.state,
            data: newData
        });
    };
    render() {
        return (
            <div>
                <h1>Список сотрудников</h1>
                <div className="grid-container-main">
                    <Cards
                        className="grid-container-left"
                        data={this.state.data}
                        selectItem={this.selectItem}
                    />
                    <Form
                        className="grid-container-right"
                        data={this.state.activeItem > -1 ? this.state.data[this.state.activeItem] : null}
                        onAddItem={this.handleAddItem}
                        onDeleteItem={this.handleRemoveItem}
                        onChangeItem={this.handleChangeItem}
                    />
                </div>
            </div>
        );
    }
}
