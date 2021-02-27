import React, { Component } from 'react';
import db from "./firebase";

export default class Home extends Component {

    constructor() {
        super()
        this.state = {
            doc: []
        }
    }

    componentDidMount() {
        this.fetch();
    }

    fetch=()=>{
        db.collection("students").onSnapshot((snapshot) => {
            const array = [];
            snapshot.forEach((item) => {
                const doc = item.data()
                array.push(doc)
                return array
            });
            this.setState({
                doc:array
            })
        });
    }

    
    getSnapshotBeforeUpdate(preProps, preState) {
      console.warn("getSnapshotBeforeUpdate", preState);
      
       return null
    }



    render() {
        return (
            <div>
                <h1>{this.props.data}</h1>
                <p id="prev"></p>
                 <h1>-------------------------ComponentDidMount-----------------</h1>
                <h4>
                    {this.state.doc[0]?.marks}  "Check the value from firebase using
                    ComponentDidMount"
                </h4>
               
            </div>
        )
    }
}
