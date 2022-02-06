import React, {Component} from "react";

export default class Customer extends Component{
    
    
    onDelete = () => {
        const new_id = this.props.customer.id;
        this.props.deleteCustomer(new_id);
    }
    onEdit = () =>{
        const data = this.props.customer;
        console.log('Customer on Edit from customer', data);
        this.props.editCustomer(data);

        
    }
        render(){
        const {id, first_name,last_name, email} = this.props.customer;
        return(
            
                <tr>
                    <td style={{ textAlign: "center", width: "50px"}}>{id}</td>
                    <td>{`${first_name} ${last_name}`}</td>
                    <td>{email}</td>
                    <td style={{ width: "148px"}}>
                        <button className="mini ui blue button" onClick={this.onEdit}>Edit</button>
                        <button className="mini ui red button" onClick={this.onDelete}>Delete</button>

                    </td>
                </tr>
            
        );
    }
}