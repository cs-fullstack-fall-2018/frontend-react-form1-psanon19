import React, {Component} from "react";




class PersonStats extends Component {

    constructor(props){
        super(props);
        this.state = {PatientName: "",
            PatientAge: 0,
            PatientFeelings: ""}
    }

    nameTitleChange = (event) => {
        this.setState({PatientName: event.target.value})
    };

    ageChange = (event) => {
        this.setState({PatientAge: event.target.value})
    };

    feelingChange = (event) => {
        this.setState({PatientFeelings: event.target.value})
    };

    submitFunction = (event) =>{
        console.log("Submitted Form.");
        document.getElementById("PatientWriteDown").innerHTML=
        // console.log
            ("Hello "+this.state.PatientName+". Your age is "+this.state.PatientAge+" and you're feeling "+this.state.PatientFeelings);
        //This prevent the form from reloading
        event.preventDefault();
        event.stopPropagation();
    };

    render() {


                return(
                    <div className="DocRef" >
                        <form onSubmit={this.submitFunction}>
                            <h1>Docters Guide</h1>
                            <label htmlFor="gameTitle">Patient Form: </label>
                            <input name="Patient_Title_Information" title="Input your Name" type="Text" id="yourName" placeholder="Your Name" value={this.state.PatientName} onChange={this.nameTitleChange}/>
                            <input name="Patient_Age_Rating" title="Input a Age" type="number" id="age" placeholder="Your Age" value={this.state.PatientAge} onChange={this.ageChange}/>
                            <input name="Patient_Age_Rating" title="Input a Feelings" type="Text" id="Emotions" placeholder="Your Feelings" value={this.state.PatientFeelings} onChange={this.feelingChange}/>
                            <button name="Patient_Button" title="Submit Button">Submit</button>
                        </form>
                        <hr/>
                    </div>
                );
            }
}

export default PersonStats;