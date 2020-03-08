import React, {Component} from 'react';
import './App.css';


const emailRegex = RegExp(/^[a-zA-Z0-9.#$X&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9]+)*$/);
 
const formValid = ({formErrors, ...rest }) => {
let valid = true;

Object.values(formErrors).forEach(val => {

	val.length > 0 && (valid = false);
});

Object.values(rest).forEach(val => {

	val && (valid = false);
});


return valid;

};


class App extends Component {
	constructor(props)
	{
		super(props);
		
		this.state ={
			
		firstName: null,
		lasName: null,
		email: null,
		password: null,
		formErrors: {
			firstName: "",
			lastName: "",
			email: "",
			password: null
		
		}
	};
	}
	handleSubmit = e => {
		e.preventDefault();
		
	if(formValid(this.state))
	{
		console.log(`
			-- SUBMIT --
			Name: ${this.state.name}
			Surname: ${this.state.surname}
			Country: ${this.state.country}
			City: ${this.state.city}
			Height: ${this.state.height}
			Weight: ${this.state.weight}
			Date_of_birth: ${this.state.date_of_birth}
			Hair_color: ${this.state.hair_color}
			Eyes_color: ${this.state.eyes_color}
			Telefon: ${this.state.telefon}
			Email: ${this.state.email}
			Password: ${this.state.password}
		`)
	}
	else
	{
		console.error('FORM INVALID - DISPLAY ERROR MESSAGE');
		
	}
};
	 
	
	
  render() {
	  const {formErrors} = this.state;
	  
  return <div>
  
	  <ul className="ul1">
		  <li><a className="active" href="crmodman.html">| Home |</a></li>
		  <li><a href="acces_acount.html">| Login |</a></li>
		  <li><a href="contacts.html">|Contacts |</a></li>
	</ul>

	<h2 className="center_cont" > Creative-Model </h2>

	<h2 className="center_t_con"> Management </h2>

	<p style="font-size: 30px; font-family: Colonna MT;" align="center"> Fill this registration form </p>
<div >
<form className="style_text class_bold margin_cover_1">

	
		<label className="margin_bottom_con" for="name"> name </label>
		<input size="40" maxlength="60" placeholder="include data" name="username"
		style="margin-left: 4.2em; font-size: 14px;" type="text">
		<label className="margin_bottom_con" for="surname"> surname </label>
		<input size="40" maxlength="60" placeholder="include data" name="surname"
		style="margin-left: 2em; font-size: 14px;"style="margin-left: 10em;" type="text" required />
	
		<label className="margin_bottom_con" for="country"> country </label>
		<input size="40" maxlength="60" placeholder="include data" name="country"
		style="font-size: 14px; margin-left: 2em;" type="text" required />
	
		<label className="margin_bottom_con" for="city"> city </label>
		<input size="40" maxlength="60" placeholder="include data" name="city"
		style="font-size: 14px; margin-left: 5em;" type="text" required />
	
		<label className="margin_bottom_con" for="height"> height </label>
		<input size="40" maxlength="60" placeholder="include data" name="height"
		style="margin-left: 2em; font-size: 14px; margin-left: 3.3em;" type="text" required /> 
	
		<label className="margin_bottom_con" for="weight"> weight </label>
		<input size="40" maxlength="60" placeholder="include data" name="weight"
		style="font-size: 14px; margin-left: 3.2em;" type="text" required />
	
		<label className="margin_bottom_con" for="date of birth"> date of birth </label>
		<input size="40" maxlength="60" placeholder="include data" name="birthdate"
		style="font-size: 14px; margin-left: 1.2em;" type="date" required />
	
		<label className="margin_bottom_con" for="hair color"> hair color </label>
		<input size="40" maxlength="60" placeholder="include data" name="hair_color"
		style="margin-left: 3em; font-size: 14px; margin-left: 1.4em;" type="text" required /> 
	
		<label className="margin_bottom_con" for="eyes color"> eyes color </label>
		<input size="40" maxlength="60" placeholder="include data" name="eyes_color"
		style="margin-left: 2em; font-size: 14px; margin-left: 2em;" type="text" required /> 
	
		<label className="margin_bottom_con" for="telefone"> telefon </label>
		<input size="40" maxlength="60" placeholder="include data" name="telefone"
		style="margin-left: 3em; font-size: 14px; margin-left: 3.2em;" type="text" required />
	
		<label for="emailsignup" className="youmail" data-icon="e" 
		style="font-family: Segoe UI; font-size: 14px; margin-right: 4em;"> Your email</label>
		<input name="emailsignup" required="required" type="email" 
		placeholder="mysupermail@mail.com" required  /> 
	
		<label for="passwordsignup" className="youpasswd" data-icon="p" 
		style="font-family: Segoe UI; font-size: 14px; margin-right: 2em;">Your password </label>
		<input name="passwordsignup" required="required" type="password" 
		placeholder="eg. X8df!90EO" required />
	
			<label for="passwordsignup_confirm" className="youpasswd" data-icon="p" 
			style="font-family: Segoe UI; font-size: 14px; margin-right: 1em;">Please confirm your password </label>
			<input name="passwordsignup_confirm" required="required" type="password" 
			placeholder="eg. X8df!90EO" required />
		
	<input type="submit" value="Submit" onclick="location.href='agreement.html'" />
	</form>
	</div> 
		<p style="font-size: 30px; font-family: Colonna MT;" align="center"> Go to the next step</p>

		<a href="agreement.html"> <p className="margin_top1" align="left" style="margin-top: 4em; ">
		Next step </p></a>
  
  </div>
  
  }
}

export default App;
