import { useState } from "react";

export default function Form() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    textArea: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(form); // save the form data on submit
    setForm({
      name: "",
      email: "",
      phone: "",
      textArea: "",
    }); // optionally clear the form after submit
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        gap: "20px",
        fontSize: "40px",
      }}
    >
      This is Form Page: <br />
      <input
        name="name"
        placeholder="Enter Full Name..."
        type="text"
        value={form.name}
        onChange={handleChange}
      />
      <input
        name="phone"
        placeholder="Enter Phone Number..."
        type="tel"
        value={form.phone}
        onChange={handleChange}
      />
      <input
        name="email"
        placeholder="Enter Email..."
        type="email"
        value={form.email}
        onChange={handleChange}
      />
      <textarea
        name="textArea"
        placeholder="Enter your message..."
        value={form.textArea}
        onChange={handleChange}
      ></textarea>
      <button type="submit">SUBMIT</button>
      {submittedData && (
        <div
          style={{
            marginTop: "20px",
            padding: "10px",
            border: "1px solid black",
            width: "80%",
            fontSize: "20px",
          }}
        >
          <h3>Submitted Data:</h3>
          <p>Name: {submittedData.name}</p>
          <p>Phone: {submittedData.phone}</p>
          <p>Email: {submittedData.email}</p>
          <p>Message: {submittedData.textArea}</p>
        </div>
      )}
    </form>
  );
}
