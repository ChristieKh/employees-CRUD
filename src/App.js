import React, {Component, Fragment} from "react";
import Cards from "./Cards";
import Form from "./Form";
import {data} from "./Employees";

export default class App extends Component {
    state = {
        data: data,
        activeItem: -1
    };

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
        } else {
            elementNew.classList.remove("colorAdd");
            this.setState({
                ...this.state,
                activeItem: -1
            });
        }
    };

    handleAddItem = data => {
        const nextItem = [...this.state.data, data];
        this.setState({data: nextItem});
    };

    handleRemoveItem = activeItem => {
        data.splice(activeItem, 1);
        this.setState({data});
    };

    handleChangeItem = dataItem => {
        const {data, activeItem} = this.state;
        let newData = data;
        const newDataItem = newData[activeItem];
        dataItem ? newDataItem.person = data.person : newDataItem.person = data[activeItem].person;
        dataItem ? newDataItem.work = data.work : newDataItem.work = data[activeItem].work;
        dataItem ? newDataItem.birthday = data.birthday : newDataItem.birthday = data[activeItem].birthday;
        dataItem ? newDataItem.gender = data.gender : newDataItem.gender = data[activeItem].gender;
        dataItem ? newDataItem.employ = data.employ : newDataItem.employ = data[activeItem].employ;

        this.setState({
            ...this.state,
            data: newData
        });
    };

    render() {
        const {data, activeItem} = this.state;
        return (
            <Fragment>
                <nav>
                    <div className="nav-wrapper blue">
                        <div className="container">
                            <h1 className="brand-logo center">Список сотрудников</h1>
                        </div>
                    </div>
                </nav>
                <div className="container grid-container-main">
                    <Cards className="grid-container-left"
                           data={data}
                           selectItem={this.selectItem}/>
                    <Form className="grid-container-right"
                          data={activeItem > -1 && data[activeItem]}
                          onAddItem={this.handleAddItem}
                          onDeleteItem={this.handleRemoveItem}
                          onChangeItem={this.handleChangeItem}/>
                </div>
            </Fragment>
        )
    }
}
