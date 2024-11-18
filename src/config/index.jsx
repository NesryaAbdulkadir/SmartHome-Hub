export const contactUsElement = [
  {
    label: "Name",
    name: "name",
    id: "name",
    type: "text",
    placeholder: "Name",
    componentType: "input",
  },
  {
    label: "Email",
    name: "email",
    id: "email",
    type: "text",
    placeholder: "Email",
    componentType: "input",
  },
  {
    label: "Subject",
    name: "subject",
    id: "subject",
    type: "text",
    placeholder: "Subject",
    componentType: "input",
  },
  {
    label: "Purpose",
    name: "purpose",
    id: "purpose",
    componentType: "select",
    options: [
      {
        id: "buy",
        label: "To Buy",
        value: "buy",
      },
      {
        id: "general",
        label: "General",
        value: "general",
      },
      {
        id: "support",
        label: "Support",
        value: "support",
      },
    ],
  },
  {
    label: "Message",
    name: "message",
    id: "message",
    type: "text",
    placeholder: "Message",
    componentType: "textarea",
  },
];
