import React, {Component} from "react";
import MyForm from "./MyForm";
import axios from "axios";
import CustomerList from "./CustomerList";
import Loader from "./Loader";
import "./app.css";
import Header from "../common/Header";

export default class App extends Component{
    state ={
        customers: [],
        customer:{},
        loader: true,
        url: "http://127.0.0.1:8000/api/customers"
    };
    
    getCustomer = async () => {
        const customers = await axios.get(this.state.url);
        this.setState({
            loader: true,
        });
        this.setState({
            customers: customers.data,  loader: false,
        });

    };
    deleteCustomer = async(id)=>{
        this.setState({ loader: true });
        await axios.delete(`${this.state.url}/${id}`).catch(e => {
        // console.log(e.message);
        alert(e.response.status === 404 ? "Customer not found" : "");
        });

      this.getCustomer();

    }
    editCustomer = (data)=>{
        this.setState({
            customer: data,
        });
        console.log('customer data on app',data);

    };
    createCustomer= async data=>{
        this.setState({
            loader: true
        });
        await axios.post(this.state.url, {
            first_name:data.first_name,
            last_name:data.last_name,
            email: data.email

        });
        this.getCustomer();

    }
    customerEdit = async data =>{
        this.setState({ customer:{}, loader:true });
        console.log(data.id);
        await axios.put(`${this.state.url}/${data.id}`, {
            first_name:data.first_name,
            last_name:data.last_name,
            email: data.email

        });

        this.getCustomer();
        

    }
    
    
    onFormSubmit = (data) =>{
        console.log('Form input data is', data)
        if(data.isEdit){
            //edit
            this.customerEdit(data);

        }
        else{
            //create
            this.createCustomer(data);

        }

    };
    
    
    componentDidMount(){
        this.getCustomer();
    }
    
    render(){
        return (
            <div>
                <Header />
                <div className="ui main container">
                    <MyForm customer={this.state.customer} onFormSubmit={this.onFormSubmit} />
                    {this.state.loader ? <Loader /> : " "}
                    
                    <CustomerList customers= {this.state.customers}  deleteCustomer={this.deleteCustomer} editCustomer={this.editCustomer}/>

                </div>
            </div>
        
    );
    }

}