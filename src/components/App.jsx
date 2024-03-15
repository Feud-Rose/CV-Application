import React, {useState} from 'react';
import '/src/styles/App.css'



function App() {
 const [formData, setFormData] = useState({
 name: '',
 email: '',
 phoneNumber: '',
 education: '',
 experience: '',
 });

const handleInputChange = (e) => {
 const { name, value } = e.target;
 setFormData({...formData, [name]: value});
 };

const handleSubmit = (e) => {
    e.preventDefault(); 
    // Add submission function
  };

return (
 <form onSubmit={handleSubmit}>
  <h3>Contact Info</h3>
   <label>Full Name:</label><input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} />
   <label>Email:</label><input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} />
   <label>Phone Number:</label><input type="tel" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleInputChange} />
    <h3>Education</h3>
    <p>Let us know your educational experience. Include name of school, title of study, and date of study. </p>
    <label>Education:</label><textarea name="education" rows="4" cols="45" placeholder="" value={formData.education} onChange={handleInputChange} />
    <h3>Experience</h3>
    <p>Let us know your practical  experience. Be sure too include Company, position held, primary responsibilities, and time you were at the company.</p>
    <label>Experience:</label><textarea name="experience" rows="4" cols="45" placeholder="" value={formData.experience} onChange={handleInputChange} />
   <button type="submit">Submit</button>
 </form>
 );
}

export default App
