import React, { Component } from "react";
import Customer from "./Customer";

export default class CustomerList extends Component{
    
    render(){
        const customers = this.props.customers;
        const deleteCustomer = this.props.deleteCustomer;
        const editCustomer = this.props.editCustomer;
        return(
            <div className="data">
                <table className="ui called table">
                    <thead>
                        <tr>
                            <th style={{ width: "50px"}}>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th style={{ width: "148px"}}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            customers.map((customer) =>{
                                return(
                                    <Customer customer = {customer} key={customer.id} deleteCustomer={deleteCustomer} editCustomer={editCustomer} />

                                );

                            })
                        }
                    
                    </tbody>
                </table>
            </div>
        );
    }
}