import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// import SetStateInUseEffect from "./practice/SetStateInUseEffect";
// import UnMountFromUseEffect from "./practice/UnMountFromUseEffect";
// import SetStateByValueVsWithFunction from "./practice/SetStateByValueVsWithFunction";
// import ReactMemoExample from "./practice/ReactMemoExample";
// import UseMemoExample from "./practice/UseMemoExample";
// import UseCallbackExample from "./practice/UseCallbackExample";
// import DynamicImport from "./practice/code_splitting/DynamicImport";
// import DynamicImportComponent from "./practice/code_splitting/DynamicImportComponent";
// import LazyLoadingWithSuspense from "./practice/code_splitting/LazyLoadingWithSuspense";
// import LoadableExample from "./practice/code_splitting/LoadableExample";
// import UseEffectExample from "./practice/UseEffectExample";
// import RouteBasedCodeSplitting from "./practice/code_splitting/RouteBasedCodeSplitting";

// import 'bootstrap/dist/css/bootstrap.min.css'; // Import the Bootstrap styles
// import './styles.css'; // Import the CSS file // Import the Tailwind CSS styles

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    {/* <React.StrictMode> */}
    <App />
    {/* <SetStateInUseEffect /> */}
    {/* <UnMountFromUseEffect /> */}
    {/* <SetStateByValueVsWithFunction /> */}
    {/* <ReactMemoExample /> */}
    {/* <UseMemoExample /> */}
    {/* <UseCallbackExample /> */}
    {/* <DynamicImport /> */}
    {/* <DynamicImportComponent /> */}
    {/* <LazyLoadingWithSuspense /> */}
    {/* <LoadableExample /> */}
    {/* <UseEffectExample /> */}
    {/* <RouteBasedCodeSplitting /> */}
    {/* </React.StrictMode> */}
  </>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
