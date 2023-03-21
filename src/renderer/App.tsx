import React, { useState } from "react";
import WebView from "@tianhuil/react-electron-webview";
import { MemoryRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

function Hello() {
  const [viewType, setViewType] = useState("kloola");

  return (
    <div>
      <div style={{ padding: "20px" }}>
        <button
          style={{ margin: "20px" }}
          onClick={() => {
            setViewType("shopee1");
          }}
        >
          Shopee 1
        </button>
        <button
          style={{ margin: "20px" }}
          onClick={() => {
            setViewType("shopee2");
          }}
        >
          Shopee 2
        </button>

        <button
          style={{ margin: "20px" }}
          onClick={() => {
            setViewType("tokped1");
          }}
        >
          Tokped 1
        </button>

        <button
          style={{ margin: "20px" }}
          onClick={() => {
            setViewType("tokped2");
          }}
        >
          Tokped 1
        </button>

        <button
          style={{ margin: "20px" }}
          onClick={() => {
            setViewType("tiktok1");
          }}
        >
          Tiktok 1
        </button>

        <button
          style={{ margin: "20px" }}
          onClick={() => {
            setViewType("kloola");
          }}
        >
          Kloola
        </button>

        <WebView
          style={{
            display: viewType === "shopee1" ? "flex" : "none",
            width: "calc(100vw - 40px)",
            height: "85vh",
          }}
          src="https://seller.shopee.co.id/webchat/conversations"
          partition="persist:webview:shopee1"
          disablewebsecurity
          webpreferences="nodeIntegration=no, nativeWindowOpen=yes"
        />

        <WebView
          style={{
            display: viewType === "shopee2" ? "flex" : "none",
            width: "calc(100vw - 40px)",
            height: "85vh",
          }}
          src="https://seller.shopee.co.id/webchat/conversations"
          partition="persist:webview:shopee2"
          disablewebsecurity
          webpreferences="nodeIntegration=no, nativeWindowOpen=yes"
        />

        <WebView
          style={{
            display: viewType === "tokped1" ? "flex" : "none",
            width: "calc(100vw - 40px)",
            height: "85vh",
          }}
          src="https://seller.tokopedia.com/chat"
          partition="persist:webview:tokped1"
          allowpopups
          disablewebsecurity
          webpreferences="nodeIntegration=no, nativeWindowOpen=yes"
        />

        <WebView
          style={{
            display: viewType === "tokped2" ? "flex" : "none",
            width: "calc(100vw - 40px)",
            height: "85vh",
          }}
          src="https://seller.tokopedia.com/chat"
          partition="persist:webview:tokped2"
          allowpopups
          disablewebsecurity
          webpreferences="nodeIntegration=no, nativeWindowOpen=yes"
        />

        <WebView
          style={{
            display: viewType === "tiktok1" ? "flex" : "none",
            width: "calc(100vw - 40px)",
            height: "85vh",
          }}
          src="https://seller-id.tiktok.com/account/login?redirect_url=https%3A%2F%2Fseller-id.tiktok.com%2Fchat%2F%3Flang%3Did-ID"
          partition="persist:webview:tiktok1"
          allowpopups
          disablewebsecurity
          webpreferences="nodeIntegration=no, nativeWindowOpen=yes"
        />

        <WebView
          id="about-blank"
          style={{ height: "100%" }}
          src="about:blank"
          webpreferences="nodeIntegration=no, nativeWindowOpen=yes"
          allowpopups
        />

      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
