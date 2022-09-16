import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";
import EventBus from "../common/EventBus";
import axios from "axios";

{/*const CreateCityname = () => {
  const [Cityname, setCityname] = useState("");
  const onSubmit = () => {
    axios
      .post("http://localhost:8080/cityname/add", { cityname: Cityname })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };*/}
const BoardModerator = () => {
  const [content, setContent] = useState("");
  {/*const onSubmit = () => {
    axios
      .post("http://localhost:8080/cityname/add", content)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };*/}
  

  useEffect(() => {
    UserService.getModeratorBoard().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setContent(_content);

        if (error.response && error.response.status === 401) {
          EventBus.dispatch("logout");
        }
      }
    );
  }, []);

  return (
    <div className="container">
      <div>
<form>
<label>City name:</label>
    <input type="text"
    id="random" name="rname"/>
    
    <input type="submit"
    value="Submit"/>
</form>
</div>
{/*<div>
      <h3>Create New Cityname</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Cityname: </label>
          <input
            type="text"
            required
            className="form-control"
            //value={cityname}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Create Cityname"
            className="btn btn-primary"
          />
        </div>
      </form>
  </div>*/}
      <header className="jumbotron">
        <h3>{content}</h3>
      </header>
    </div>
  );
};

export default BoardModerator;
//export default CreateCityname;
