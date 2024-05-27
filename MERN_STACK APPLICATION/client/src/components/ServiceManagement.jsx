import React, { useState, useEffect } from "react";
import axios from "axios";

const ServiceManagement = () => {
  const [services, setServices] = useState([]);
  const [service, setService] = useState({
    id: "",
    name: "",
    description: "",
    price: "",
    category: "",
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await axios.get("http://localhost:5000/readAllservices");
      setServices(response.data);
    } catch (error) {
      console.error("Error fetching services:", error);
      setError("Failed to fetch services. Please try again later.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setService({ ...service, [name]: value });
  };

  const handleSubmit = async (action) => {
    try {
      switch (action) {
        case "add":
          await axios.post("http://localhost:5000/addservice", service);
          console.log("Service added successfully.");
          break;
        case "update":
          await axios.put(
            `http://localhost:5000/update/${service.id}`,
            service
          );
          console.log("Service updated successfully.");
          break;
        case "delete":
          await axios.delete(`http://localhost:5000/delete/${service.id}`);
          console.log("Service deleted successfully.");
          break;
        default:
          break;
      }
      setService({
        id: "",
        name: "",
        description: "",
        price: "",
        category: "",
      });
      fetchServices(); // Refresh service list after add/update/delete
    } catch (error) {
      console.error("Error performing operation:", error);
      setError("Failed to perform the operation. Please try again later.");
    }
  };

  return (
    <div>
      {error && <p>{error}</p>}
      <h2 className="text-center">Service Management</h2>
      <form>
        <h3>Add/Update/Delete Service</h3>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="id"
            value={service.id}
            onChange={handleChange}
            placeholder="Enter Service ID (required for update/delete)"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="name"
            value={service.name}
            onChange={handleChange}
            placeholder="Enter Service Name"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="description"
            value={service.description}
            onChange={handleChange}
            placeholder="Enter Service Description"
          />
        </div>
        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            name="price"
            value={service.price}
            onChange={handleChange}
            placeholder="Enter Service Price"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="category"
            value={service.category}
            onChange={handleChange}
            placeholder="Enter Service Category"
          />
        </div>
        <div className="text-center">
          <button
            className="btn btn-success mx-2"
            style={{ width: "200px" }}
            onClick={() => handleSubmit("add")}
            type="button"
          >
            Add Service
          </button>
          <button
            className="btn btn-primary mx-2"
            style={{ width: "200px" }}
            onClick={() => handleSubmit("update")}
            type="button"
          >
            Update Service
          </button>
          <button
            className="btn btn-danger mx-2"
            style={{ width: "200px" }}
            onClick={() => handleSubmit("delete")}
            type="button"
          >
            Delete Service
          </button>
        </div>
      </form>
      <h2 className="text-center mt-5">Service List</h2>
      <table className="table table-bordered mt-4">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr key={service._id}>
              <td>{service._id}</td>
              <td>{service.name}</td>
              <td>{service.description}</td>
              <td>{service.price}</td>
              <td>{service.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServiceManagement;
