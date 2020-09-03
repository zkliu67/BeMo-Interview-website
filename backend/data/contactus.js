module.exports = [
  { "type": "imageView",
    "key": "mainImage",
    "imageType": "imageLocal",
    "imageName": "contact-us",
    "style": {
      "width": "fullWidth"
    }
  },
  { "type": "textView",
    "key": "interviewGuid",
    "content": "BeMo Academic Consulting Inc.",
    "textTag": "span",
    "style": {
      fontSize: "17px",
      fontWeight: "bold"
    }
  },
  {
    "type":"emptySpace"
  },
  { "type": "textView",
    "key": "interviewGuid",
    "content": "Toll Free",
    "decoration": "underline",
    "style": {
      color: "#000000",
      fontSize: "13px",
      fontStyle: "bold",
      textDecoration: "underline"
    }
  },
  { "type": "textView",
    "key": "interviewGuid",
    "content": ": ",
    "style": {
      color: "#000000",
      fontSize: "13px",
      fontStyle: "bold"
    }
  },
  { "type": "textView",
    "key": "interviewGuid",
    "content": "1-855-900-BeMo (2366)",
    "style": {
      color: "#000000",
      fontSize: "14px",
      fontStyle: "bold"
    }
  },
  {
    "type":"emptySpace"
  },
  { "type": "textView",
    "key": "interviewGuid",
    "content": "Email",
    "style": {
      color: "#000000",
      fontSize: "13px",
      fontStyle: "bold",
      textDecoration: "underline"
    }
  },
  { "type": "textView",
    "key": "interviewGuid",
    "content": ": ",
    "style": {
      color: "#000000",
      fontSize: "13px",
      fontStyle: "bold"
    }
  },
  { "type": "textView",
    "key": "interviewGuid",
    "content": "info@bemoacademicconsulting.com",
    "style": {
      color: "#000000",
      fontSize: "14px",
      fontStyle: "bold"
    }
  },
  { "type": "form",
    "style": {
      textAlign: "center",
      width: "100%"
    },
    "key": "contactform",
    "inputs": {
      "fields": [
      { "label": "NAME",
        "required": true,
        "type": "input",
        "size": 40 },
      { "label": "EMAIL ADDRESS",
        "required": true,
        "type": "input",
        "size": 40 },
      { "label": "HOW CAN I HELP YOU?",
        "required": true,
        "type": "textarea",
        "rows": 8,
        "cols": 38 },
      ],
      "style": {
        "label": {
          color: "#373737",
          textTransform: "uppercase",
          fontSize: "0.9em",
          letterSpacing: "1px"  
        },
        "input": {
          color: "#333333",
          background: "#cccccc",
          width: "85%",
          marginTop: "7px",
          padding: "9px",
          outline: "none",
          border: "none"
        }
      }
    },
    "button": [
      { "text": "RESET",
        "link": "#",
        "type": "reset",
        "name": "resetButton",
        "style": {
          background: "#999999",
          padding: "7px 28px",
          margin: "10px 10px 0px 0px",
          textTransform: "uppercase",
          fontSize: "0.75em",
          border: "none",
          cursor: "pointer",
          transition: "all 450ms"
        }},
      { "text": "SUBMIT",
        "link": "#",
        "type": "submit",
        "name": "submitButton",
        "style": {
          background: "#999999",
          padding: "7px 28px",
          margin: "10px 10px 0px 0px",
          textTransform: "uppercase",
          fontSize: "0.75em",
          border: "none",
          cursor: "pointer",
          transition: "all 450ms"
        }},
    ]
  },
  {
    "type":"emptySpace"
  },
  {
    "type": "list",
    "style": {
      textAlign: "center"
    },
    "content": [
      { "type": "textView",
        "key": "interviewGuid",
        "decoration": "underline",
        "content": "Note",
        "style": {
          fontSize: "15px",
          fontStyle: "bold",
          textDecoration: "underline"
        }
      },
      { "type": "textView",
        "key": "interviewGuid",
        "content": ": If you are having difficulties with our contact us form above, send us an email to info@bemoacademicconsulting.com (copy & paste the email address)",
        "style": {
          color: "#000000",
          fontSize: "12px",
          fontStyle: "bold",
          textAlign: "center"
        }
      },
      { "type": "textView",
        "key": "interviewGuid",
        "content": ": If you are having difficulties with our contact us form above, send us an email to info@bemoacademicconsulting.com (copy & paste the email address)",
        "style": {
          fontSize: "13px",
        }
      },
    ]
  },
  {
    "type":"emptySpace"
  },
];

