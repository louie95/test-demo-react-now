// import logo from "./logo.svg";
import "./App.css";
import { Form, Input } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";

// import { useDispatch, useSelector } from "react-redux";
// import { increaseCounter, decreaseCounter } from "./redux/action/counterAction";
const App = () => {
  // const count = useSelector(state => state.counter.count);
  // const dispatch = useDispatch();
  const { form } = Form.useForm();

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <div>Count = {count}</div>
    //     <button onClick={() => dispatch(increaseCounter())}>Increase</button>
    //     <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
    //   </header>
    // </div>
    <div
      style={{
        height: "100dvh",
        width: "100dvw",
        backgroundColor: "black",
        display: "grid",
        gridTemplateColumns: "2fr 1fr",
      }}
    >
      <div></div>
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          backgroundColor: "white",
          alignItems: "center",
        }}
      >
        <Form
          style={{ width: "350px", margin: "0 auto" }}
          layout="vertical"
          size="large"
          form={form}
        >
          <Form.Item
            name="email"
            label="Email Address"
            rules={[{ required: true }]}
          >
            <Input
              prefix={
                <MailOutlined
                  style={{
                    color: "rgba(0, 0, 0, 0.45) ",
                    marginRight: "4px",
                  }}
                />
              }
              placeholder="Enter your email adress..."
            />
          </Form.Item>
          <Form.Item name="pass" label="Password" rules={[{ required: true }]}>
            <Input.Password
              prefix={
                <LockOutlined
                  style={{
                    color: "rgba(0, 0, 0, 0.45) ",
                    marginRight: "4px",
                  }}
                />
              }
              placeholder="Enter your password..."
            />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default App;
