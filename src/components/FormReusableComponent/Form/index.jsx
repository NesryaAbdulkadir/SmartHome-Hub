import React from "react";
import Input from "../Input";
import TextArea from "../TextArea";
import Select from "../Select";
import Button from "../Button";

const formTypes = {
  INPUT: "input",
  TEXTAREA: "textarea",
  SELECT: "select",
};
export default function Form({
  formControl,
  formData,
  btnText,
  handleSubmit,
  setFormData,
}) {
  function renderFormElement(getCurrentElement) {
    let content = null;
    switch (getCurrentElement?.componentType) {
      case formTypes.INPUT:
        content = (
          <Input
            label={getCurrentElement?.label}
            name={getCurrentElement?.name}
            id={getCurrentElement?.id}
            type={getCurrentElement?.type}
            placeholder={getCurrentElement?.placeholder}
            value={formData[getCurrentElement?.name]}
            onChange={(event) =>
              setFormData({
                ...formData,
                [event.target.name]: event.target.value,
              })
            }
          />
        );
        break;
      case formTypes.TEXTAREA:
        content = (
          <TextArea
            label={getCurrentElement?.label}
            name={getCurrentElement?.name}
            id={getCurrentElement?.id}
            type={getCurrentElement?.type}
            placeholder={getCurrentElement?.placeholder}
            value={formData[getCurrentElement?.name]}
            onChange={(event) =>
              setFormData({
                ...formData,
                [event.target.name]: event.target.value,
              })
            }
          />
        );
        break;
      case formTypes.SELECT:
        content = (
          <Select
            label={getCurrentElement?.label}
            name={getCurrentElement?.name}
            id={getCurrentElement?.id}
            options={getCurrentElement?.options}
            value={formData[getCurrentElement?.name]}
            onChange={(event) =>
              setFormData({
                ...formData,
                [event.target.name]: event.target.value,
              })
            }
          />
        );
        break;

      default:
        content = (
          <Input
            label={getCurrentElement?.label}
            name={getCurrentElement?.name}
            id={getCurrentElement?.id}
            type={getCurrentElement?.type}
            placeholder={getCurrentElement?.placeholder}
            value={formData[getCurrentElement?.name]}
            onChange={(event) =>
              setFormData({
                ...formData,
                [event.target.name]: event.target.value,
              })
            }
          />
        );
        break;
    }
    return content;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-8/12">
      {formControl?.length
        ? formControl.map((singleFormControl) => (
            <div key={singleFormControl?.name}>
              {renderFormElement(singleFormControl)}
            </div>
          ))
        : null}
      <Button btnText={btnText} />
    </form>
  );
}
