import React, { useState } from "react";
import Form from "../../components/FormReusableComponent/Form";
import { contactUsElement } from "../../config";

const initialFormData = {
  name: "",
  email: "",
  subject: "",
  purpose: "",
  message: "",
};

export default function ContactUs() {
  const [contactFormData, setContactFormData] = useState(initialFormData);

  function handleSubmit(event) {
    event.preventDefault();

    console.log(contactFormData);

    setContactFormData(initialFormData);
  }
  return (
    <div className="md:w-8/12 my-20 flex flex-col gap-4 justify-center items-center mx-auto">
      <h1 className="text-4xl sm:text-5xl font-bold text-center m-10">
        Contact Us
      </h1>
      <Form
        formControl={contactUsElement}
        formData={contactFormData}
        btnText={"Submit"}
        handleSubmit={handleSubmit}
        setFormData={setContactFormData}
      />
    </div>
  );
}
