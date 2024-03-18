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
 const [activeIndex, setActiveIndex] = useState(1);

 const[activeEdit,setActiveEdit] = useState({
  name: 0,
  email: 0,
  phoneNumber: 0,
  education: 0,
  experience: 0,
 });

const handleInputChange = (e) => {
 const { name, value } = e.target;
 setFormData({...formData, [name]: value});
 };

const handleSubmit = (e) => {
    e.preventDefault(); 
    setActiveIndex(0)
    
  };

const handleEdit = (e) => {
  e.preventDefault(); 
  const {className} = e.target;
  const { name, value } = e.target;
  setActiveEdit({...activeEdit,[className]:1})
}  
const handleChange = (e) => {
  const {className} = e.target;
  setActiveEdit({...activeEdit,[className]:0})

}

const confirmData = (e) => {
  const formDataString = JSON.stringify(formData)
  console.log(formDataString)
}

return (
 <section className="formHandler">
  { activeIndex ? (<form onSubmit={handleSubmit}>
    <h3>Contact Info</h3>
     <label>Full Name:</label><input type="text" name="name" placeholder="Name" value={formData.name} required onChange={handleInputChange} />
     <label>Email:</label><input type="email" name="email" placeholder="Email" value={formData.email} required onChange={handleInputChange} />
     <label>Phone Number:</label><input type="tel" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleInputChange} />
      <h3>Education</h3>
      <p>Let us know your educational experience. Include name of school, title of study, and date of study. </p>
      <label>Education:</label><textarea name="education" rows="4" cols="45" placeholder="" value={formData.education} onChange={handleInputChange} />
      <h3>Experience</h3>
      <p>Let us know your practical  experience. Be sure too include Company, position held, primary responsibilities, and time you were at the company.</p>
      <label>Experience:</label><textarea name="experience" rows="4" cols="45" placeholder="" value={formData.experience} onChange={handleInputChange} />
     <button type="submit">Submit</button>
   </form>):
   //// display after submit pressed
    <div>
     
      {activeEdit.name ?(
      <form onSubmit={handleEdit}>
        <input type="text" name="name" placeholder="formData.name" value={formData.name} onChange={handleInputChange}/>
        <button className='name' onClick={handleChange}>Change</button>
      </form>
      ):
      (
      <p>Name: {formData.name} <button className='name' onClick={handleEdit}>Edit</button></p>
      )}

     {activeEdit.email ?(  
       <form onSubmit={handleEdit}>
        <input type="text" name="email" placeholder="formData.email" value={formData.email} onChange={handleInputChange}/>
        <button className='email' onClick={handleChange}>Change</button>
      </form>)
      :(
        <p >Email: {formData.email} <button className='email' onClick={handleEdit}>Edit</button></p>
      )}

      {activeEdit.phoneNumber ?(   
      <form onSubmit={handleEdit}>
        <input type="text" name="phoneNumber" placeholder="formData.phoneNumber" value={formData.phoneNumber} onChange={handleInputChange}/>
        <button className='phoneNumber' onClick={handleChange}>Change</button>
      </form>
      ):
      (
        <p>Phone Number: {formData.phoneNumber} <button className='phoneNumber' onClick={handleEdit}>Edit</button></p>
      )}


      {activeEdit.education ?(
        <form onSubmit={handleEdit}>
        <input type="text" name="education" placeholder="formData.education" value={formData.education} onChange={handleInputChange}/>
        <button className='education' onClick={handleChange}>Change</button>
      </form>
      ):
      (
        <p>Education: {formData.education} <button className='education' onClick={handleEdit}>Edit</button></p>
      )}

       {activeEdit.experience ?(
        <form onSubmit={handleEdit}>
        <input type="text" name="experience" placeholder="formData.experience" value={formData.experience} onChange={handleInputChange}/>
        <button className='experience' onClick={handleChange}>Change</button>
      </form>):
      (
        <p>Experience: {formData.experience} <button className='experience' onClick={handleEdit}>Edit</button></p>
      )}

      <button onClick={confirmData}>Confirm</button>
    </div>

   }
  
 </section>
 
 );
}

export default App
