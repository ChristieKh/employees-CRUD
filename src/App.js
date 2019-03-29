import React, {Component, Fragment} from "react";
import Cards from "./containers/Cards";
import Form from "./containers/Form";
import {data} from "./containers/Employees";

export default class App extends Component {
    state = {
        data: data,
        activeItem: null
    };

    selectItem = index => {
        this.setState({
            activeItem: index === this.state.activeItem ? null : index
        })
    };

    handleAddItem = data => {
        const nextItem = [...this.state.data, data];
        this.setState({data: nextItem});
    };

    handleRemoveItem = (activeItem, e) => {
        data.splice(activeItem, 1);
        this.setState({data});
        e.preventDefault();
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
                           selectItem={this.selectItem}
                           activeItem={activeItem}/>
                    <Form className="grid-container-right"
                          data={data[activeItem - 1]}
                          onAddItem={this.handleAddItem}
                          onDeleteItem={this.handleRemoveItem}
                          onChangeItem={this.handleChangeItem}/>
                </div>
            </Fragment>
        )
    }
}
