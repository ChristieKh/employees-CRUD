import React, {Component, Fragment} from "react";
import Cards from "./containers/Cards";
import Form from "./containers/Form";
import {data} from "./containers/Employees";

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
        dataItem.person ? newDataItem.person = dataItem.person : newDataItem.person = data[activeItem].person;
        dataItem.work ? newDataItem.work = dataItem.work : newDataItem.work = data[activeItem].work;
        dataItem.birthday ? newDataItem.birthday = dataItem.birthday : newDataItem.birthday = data[activeItem].birthday;
        dataItem.gender ? newDataItem.gender = dataItem.gender : newDataItem.gender = data[activeItem].gender;
        dataItem.employ ? newDataItem.employ = dataItem.employ : newDataItem.employ = data[activeItem].employ;
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
