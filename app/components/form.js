import React, { createContext, Component } from "react";

export const FormCtx = createContext({
  fields: {},
  errors: {}
});

export default class Form extends Component {
  state = {
    fields: {},
    errors: {}
  };

  setFields = (event, { id }) => {
    event.persist();

    console.log("add/update field value!");
  };

  render() {
    const { fields, errors } = this.state;

    const formCtx = {
      fields,
      errors,
      setFields: this.setFields
    };

    return (
      <form action="">
        <FormCtx.Provider value={formCtx}>
          {this.props.children}
        </FormCtx.Provider>
      </form>
    );
  }
}