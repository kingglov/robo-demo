import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

export default function RadioButtonsGroup() {
  const [state, setState] = React.useState({
    checked1: true,
    checked2: true,
    checked3: false,
    checked4: true,
    checked5: true,
    checked6: false,
    checked7: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div>
      <FormGroup className="ml-5 mt-5 pt-5" row>
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checked1}
              onChange={handleChange}
              name="checked1"
            />
          }
          label="Secondary"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checked2}
              onChange={handleChange}
              name="checked2"
              color="primary"
            />
          }
          label="Primary"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checked3}
              onChange={handleChange}
              name="checked3"
              color="primary"
            />
          }
          label="Primary"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checked4}
              onChange={handleChange}
              name="checked4"
              color="primary"
            />
          }
          label="Primary"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checked5}
              onChange={handleChange}
              name="checked5"
              color="primary"
            />
          }
          label="Primary"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checked6}
              onChange={handleChange}
              name="checked6"
              color="primary"
            />
          }
          label="Primary"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checked7}
              onChange={handleChange}
              name="checked7"
              color="primary"
            />
          }
          label="Primary"
        />
      </FormGroup>
      <div className="overlay ml-5 mt-3">
        {state.checked1 ? <div className="originalDiv1"></div> : ""}
        {state.checked2 ? <div className="originalDiv2"></div> : ""}
        {state.checked3 ? <div className="originalDiv3"></div> : ""}
        {state.checked4 ? <div className="originalDiv4"></div> : ""}
        {state.checked5 ? <div className="originalDiv5"></div> : ""}
        {state.checked6 ? <div className="originalDiv6"></div> : ""}
        {state.checked7 ? <div className="originalDiv7"></div> : ""}
      </div>
    </div>
  );
}
