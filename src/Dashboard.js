import React from "react";
import { DashboardHeader } from "./DashboardHeader";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import background from "./images/2.avif";
import "./card.css";
import { useState } from "react";

function Dashboard() {
  const [post, setPost] = useState([]);
  const [value, setValue] = useState("");
  const [flag, setFlag] = useState(0);

  function deletePost(event) {
    post.splice(event.target.value, 1);
    if (flag === 1) {
      setFlag(0);
    } else {
      setFlag(1);
    }
  }

  function handleClick() {
    if (value !== "") {
      setPost((initialArray) => [...initialArray, value]);
    }
  }

  const ren = post.map((item, index) => (
    <Card key={index} id="main">
      <Card.Body>
        <Card.Text>{item}</Card.Text>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Button id="button" value={index} onClick={deletePost} variant="danger">
          Delete
        </Button>
      </Card.Body>
    </Card>
  ));
  return (
    <>
      <DashboardHeader />
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          height: "92.9vh",
          width: "100%",
          overflowY: "scroll",
          textAlign: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <br />
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>
              <h3>
                Write your post <b>here -</b>
              </h3>
            </Form.Label>
            <div style={{ textAlign: "-webkit-center" }}>
              <Form.Control
                as="textarea"
                rows={8}
                style={{
                  width: "1000px",
                }}
                onChange={(event) => setValue(event.target.value)}
                placeholder="Whatever you want to post write here.."
                required
              />
            </div>
          </Form.Group>
        </Form>
        <Button onClick={handleClick} className="btn-lg" variant="danger">
          Post
        </Button>
        <br />
        <br />
        {ren}
      </div>
    </>
  );
  // }
}
export default Dashboard;
