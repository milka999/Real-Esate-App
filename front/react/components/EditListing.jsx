import { useState } from 'react';

const EditListing = () => {
  const [formData, setFormData] = useState({
    name: '',
    type: 'house',
    city: '',
    district: '',
    numberOfRooms: 0,
    numberOfBathrooms: 0,
    parking: false,
    size: 0,
    description: '',
    yearBuilt: 0,
    floor: 0,
    pictures: []
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked });
    } else if (name === 'pictures') {
      setFormData({ ...formData, pictures: Array.from(files) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted: ', formData);
    // Perform form submission logic (e.g., send data to an API)
  };

  return (
    <form onSubmit={handleSubmit} className='listing-form'>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div>
        <label>Type:</label>
        <select name="type" value={formData.type} onChange={handleChange}>
          <option value="house">House</option>
          <option value="apartment">Apartment</option>
        </select>
      </div>
      <div>
        <label>City:</label>
        <input type="text" name="city" value={formData.city} onChange={handleChange} required />
      </div>
      <div>
        <label>District:</label>
        <input type="text" name="district" value={formData.district} onChange={handleChange} required />
      </div>
      <div>
        <label>Number of Rooms:</label>
        <input type="number" name="numberOfRooms" value={formData.numberOfRooms} onChange={handleChange} required />
      </div>
      <div>
        <label>Number of Bathrooms:</label>
        <input type="number" name="numberOfBathrooms" value={formData.numberOfBathrooms} onChange={handleChange} required />
      </div>
      <div>
        <label>Parking:</label>
        <input type="checkbox" name="parking" checked={formData.parking} onChange={handleChange} />
      </div>
      <div>
        <label>Size (in square meters):</label>
        <input type="number" name="size" value={formData.size} onChange={handleChange} required />
      </div>
      <div>
        <label>Description:</label>
        <textarea name="description" value={formData.description} onChange={handleChange} required />
      </div>
      <div>
        <label>Year Built:</label>
        <input type="number" name="yearBuilt" value={formData.yearBuilt} onChange={handleChange} required />
      </div>
      {formData.type === 'apartment' && (
        <div>
          <label>Floor:</label>
          <input type="number" name="floor" value={formData.floor} onChange={handleChange} required />
        </div>
      )}
      <div>
        <label>Pictures:</label>
        <input type="file" name="pictures" onChange={handleChange} multiple />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default EditListing;
