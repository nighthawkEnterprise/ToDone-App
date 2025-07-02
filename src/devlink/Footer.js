"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Footer.module.css";

export function Footer({ as: _Component = _Builtin.Section }) {
  return (
    <_Component className={_utils.cx(_styles, "footer")} tag="footer">
      <_Builtin.Block className={_utils.cx(_styles, "container")} tag="div">
        <_Builtin.Grid
          className={_utils.cx(
            _styles,
            "grid-layout",
            "desktop-5-column",
            "tablet-2-column",
            "mobile-landscape-1-column",
            "grid-gap-md"
          )}
        >
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "flex-vertical",
              "flex-gap-sm",
              "w-node-_4a966be7-ada4-c0d3-f5a8-83895d58d334-5d58d331"
            )}
            id={_utils.cx(
              _styles,
              "w-node-_851d61a1-1dad-400a-5b6a-92b99f998536-b17c3d94"
            )}
            tag="div"
          >
            <_Builtin.Link
              className={_utils.cx(_styles, "logo")}
              id={_utils.cx(
                _styles,
                "w-node-_4a966be7-ada4-c0d3-f5a8-83895d58d335-5d58d331"
              )}
              button={false}
              block="inline"
              options={{
                href: "#",
              }}
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "nav-logo-icon")}
                tag="div"
              >
                <_Builtin.DOM
                  tag="svg"
                  width="100%"
                  height="100%"
                  viewBox="0 0 33 33"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <_Builtin.DOM
                    tag="path"
                    d="M28,0H5C2.24,0,0,2.24,0,5v23c0,2.76,2.24,5,5,5h23c2.76,0,5-2.24,5-5V5c0-2.76-2.24-5-5-5ZM29,17c-6.63,0-12,5.37-12,12h-1c0-6.63-5.37-12-12-12v-1c6.63,0,12-5.37,12-12h1c0,6.63,5.37,12,12,12v1Z"
                    fill="currentColor"
                  />
                </_Builtin.DOM>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "paragraph-xl",
                  "utility-margin-bottom-0",
                  "utility-text-all-caps"
                )}
                tag="div"
              >
                {"ToDone"}
              </_Builtin.Block>
            </_Builtin.Link>
            <_Builtin.List
              className={_utils.cx(
                _styles,
                "footer-icons-group",
                "utility-margin-top-auto"
              )}
              id={_utils.cx(
                _styles,
                "w-node-_4a966be7-ada4-c0d3-f5a8-83895d58d33b-5d58d331"
              )}
              tag="ul"
              aria-label="Social media links"
              role="list"
              unstyled={true}
            >
              <_Builtin.ListItem
                className={_utils.cx(_styles, "utility-margin-bottom-0")}
              >
                <_Builtin.Link
                  className={_utils.cx(_styles, "footer-icon-link")}
                  button={false}
                  block="inline"
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "icon-small",
                      "on-accent-icon"
                    )}
                    tag="div"
                  >
                    <_Builtin.DOM
                      tag="svg"
                      width="100%"
                      height="100%"
                      viewBox="0 0 16 16"
                    >
                      <_Builtin.DOM
                        tag="path"
                        d="M16,8.048a8,8,0,1,0-9.25,7.9V10.36H4.719V8.048H6.75V6.285A2.822,2.822,0,0,1,9.771,3.173a12.2,12.2,0,0,1,1.791.156V5.3H10.554a1.155,1.155,0,0,0-1.3,1.25v1.5h2.219l-.355,2.312H9.25v5.591A8,8,0,0,0,16,8.048Z"
                        fill="currentColor"
                      />
                    </_Builtin.DOM>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "utility-screen-reader-visible-only"
                    )}
                    tag="div"
                  >
                    {"Follow us on Facebook"}
                  </_Builtin.Block>
                </_Builtin.Link>
              </_Builtin.ListItem>
              <_Builtin.ListItem
                className={_utils.cx(_styles, "utility-margin-bottom-0")}
              >
                <_Builtin.Link
                  className={_utils.cx(_styles, "footer-icon-link")}
                  button={false}
                  block="inline"
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "icon-small",
                      "on-accent-icon"
                    )}
                    tag="div"
                  >
                    <_Builtin.DOM
                      tag="svg"
                      width="100%"
                      height="100%"
                      viewBox="0 0 16 16"
                    >
                      <_Builtin.DOM
                        tag="path"
                        d="M8,1.441c2.136,0,2.389.009,3.233.047a4.419,4.419,0,0,1,1.485.276,2.472,2.472,0,0,1,.92.6,2.472,2.472,0,0,1,.6.92,4.419,4.419,0,0,1,.276,1.485c.038.844.047,1.1.047,3.233s-.009,2.389-.047,3.233a4.419,4.419,0,0,1-.276,1.485,2.644,2.644,0,0,1-1.518,1.518,4.419,4.419,0,0,1-1.485.276c-.844.038-1.1.047-3.233.047s-2.389-.009-3.233-.047a4.419,4.419,0,0,1-1.485-.276,2.472,2.472,0,0,1-.92-.6,2.472,2.472,0,0,1-.6-.92,4.419,4.419,0,0,1-.276-1.485c-.038-.844-.047-1.1-.047-3.233s.009-2.389.047-3.233a4.419,4.419,0,0,1,.276-1.485,2.472,2.472,0,0,1,.6-.92,2.472,2.472,0,0,1,.92-.6,4.419,4.419,0,0,1,1.485-.276c.844-.038,1.1-.047,3.233-.047M8,0C5.827,0,5.555.009,4.7.048A5.868,5.868,0,0,0,2.76.42a3.908,3.908,0,0,0-1.417.923A3.908,3.908,0,0,0,.42,2.76,5.868,5.868,0,0,0,.048,4.7C.009,5.555,0,5.827,0,8s.009,2.445.048,3.3A5.868,5.868,0,0,0,.42,13.24a3.908,3.908,0,0,0,.923,1.417,3.908,3.908,0,0,0,1.417.923,5.868,5.868,0,0,0,1.942.372C5.555,15.991,5.827,16,8,16s2.445-.009,3.3-.048a5.868,5.868,0,0,0,1.942-.372,4.094,4.094,0,0,0,2.34-2.34,5.868,5.868,0,0,0,.372-1.942c.039-.853.048-1.125.048-3.3s-.009-2.445-.048-3.3A5.868,5.868,0,0,0,15.58,2.76a3.908,3.908,0,0,0-.923-1.417A3.908,3.908,0,0,0,13.24.42,5.868,5.868,0,0,0,11.3.048C10.445.009,10.173,0,8,0Z"
                        fill="currentColor"
                      />
                      <_Builtin.DOM
                        tag="path"
                        d="M8,3.892A4.108,4.108,0,1,0,12.108,8,4.108,4.108,0,0,0,8,3.892Zm0,6.775A2.667,2.667,0,1,1,10.667,8,2.667,2.667,0,0,1,8,10.667Z"
                        fill="currentColor"
                      />
                      <_Builtin.DOM
                        tag="circle"
                        cx="12.27"
                        cy="3.73"
                        r="0.96"
                        fill="currentColor"
                      />
                    </_Builtin.DOM>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "utility-screen-reader-visible-only"
                    )}
                    tag="div"
                  >
                    {"See our Instagram"}
                    <br />
                  </_Builtin.Block>
                </_Builtin.Link>
              </_Builtin.ListItem>
              <_Builtin.ListItem
                className={_utils.cx(_styles, "utility-margin-bottom-0")}
              >
                <_Builtin.Link
                  className={_utils.cx(_styles, "footer-icon-link")}
                  button={false}
                  block="inline"
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "icon-small",
                      "on-accent-icon"
                    )}
                    tag="div"
                  >
                    <_Builtin.DOM
                      tag="svg"
                      width="100%"
                      height="100%"
                      viewBox="0 0 16 16"
                    >
                      <_Builtin.DOM
                        tag="path"
                        d="M12.3723 1.16992H14.6895L9.6272 6.95576L15.5825 14.829H10.9196L7.26734 10.0539L3.08837 14.829H0.769833L6.18442 8.64037L0.471436 1.16992H5.2528L8.55409 5.53451L12.3723 1.16992ZM11.5591 13.4421H12.843L4.55514 2.48399H3.17733L11.5591 13.4421Z"
                        fill="currentColor"
                      />
                    </_Builtin.DOM>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "utility-screen-reader-visible-only"
                    )}
                    tag="div"
                  >
                    {"Connect on X"}
                  </_Builtin.Block>
                </_Builtin.Link>
              </_Builtin.ListItem>
              <_Builtin.ListItem
                className={_utils.cx(_styles, "utility-margin-bottom-0")}
              >
                <_Builtin.Link
                  className={_utils.cx(_styles, "footer-icon-link")}
                  button={false}
                  block="inline"
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "icon-small",
                      "on-accent-icon"
                    )}
                    tag="div"
                  >
                    <_Builtin.DOM
                      tag="svg"
                      width="100%"
                      height="100%"
                      viewBox="0 0 16 16"
                    >
                      <_Builtin.DOM
                        tag="path"
                        d="M15.3,0H0.7C0.3,0,0,0.3,0,0.7v14.7C0,15.7,0.3,16,0.7,16h14.7c0.4,0,0.7-0.3,0.7-0.7V0.7 C16,0.3,15.7,0,15.3,0z M4.7,13.6H2.4V6h2.4V13.6z M3.6,5C2.8,5,2.2,4.3,2.2,3.6c0-0.8,0.6-1.4,1.4-1.4c0.8,0,1.4,0.6,1.4,1.4 C4.9,4.3,4.3,5,3.6,5z M13.6,13.6h-2.4V9.9c0-0.9,0-2-1.2-2c-1.2,0-1.4,1-1.4,2v3.8H6.2V6h2.3v1h0c0.3-0.6,1.1-1.2,2.2-1.2 c2.4,0,2.8,1.6,2.8,3.6V13.6z"
                        fill="currentColor"
                      />
                    </_Builtin.DOM>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "utility-screen-reader-visible-only"
                    )}
                    tag="div"
                  >
                    {"Find us on LinkedIn"}
                  </_Builtin.Block>
                </_Builtin.Link>
              </_Builtin.ListItem>
              <_Builtin.ListItem
                className={_utils.cx(_styles, "utility-margin-bottom-0")}
              >
                <_Builtin.Link
                  className={_utils.cx(_styles, "footer-icon-link")}
                  button={false}
                  block="inline"
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "icon-small",
                      "on-accent-icon"
                    )}
                    tag="div"
                  >
                    <_Builtin.DOM
                      tag="svg"
                      width="100%"
                      height="100%"
                      viewBox="0 0 16 16"
                    >
                      <_Builtin.DOM
                        tag="path"
                        d="M15.8,4.8c-0.2-1.3-0.8-2.2-2.2-2.4C11.4,2,8,2,8,2S4.6,2,2.4,2.4C1,2.6,0.3,3.5,0.2,4.8C0,6.1,0,8,0,8 s0,1.9,0.2,3.2c0.2,1.3,0.8,2.2,2.2,2.4C4.6,14,8,14,8,14s3.4,0,5.6-0.4c1.4-0.3,2-1.1,2.2-2.4C16,9.9,16,8,16,8S16,6.1,15.8,4.8z M6,11V5l5,3L6,11z"
                        fill="currentColor"
                      />
                    </_Builtin.DOM>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "utility-screen-reader-visible-only"
                    )}
                    tag="div"
                  >
                    {"Watch on YouTube"}
                  </_Builtin.Block>
                </_Builtin.Link>
              </_Builtin.ListItem>
            </_Builtin.List>
          </_Builtin.Block>
          <_Builtin.List
            className={_utils.cx(_styles, "utility-margin-bottom-0")}
            id={_utils.cx(
              _styles,
              "w-node-_4a966be7-ada4-c0d3-f5a8-83895d58d362-5d58d331"
            )}
            tag="ul"
            role="list"
            unstyled={true}
          >
            <_Builtin.ListItem>
              <_Builtin.Heading
                className={_utils.cx(
                  _styles,
                  "h6-heading",
                  "utility-text-secondary"
                )}
                tag="h2"
              >
                {"App"}
              </_Builtin.Heading>
            </_Builtin.ListItem>
            <_Builtin.ListItem>
              <_Builtin.Link
                className={_utils.cx(_styles, "footer-link")}
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Block tag="div">{"Tasks"}</_Builtin.Block>
              </_Builtin.Link>
            </_Builtin.ListItem>
            <_Builtin.ListItem>
              <_Builtin.Link
                className={_utils.cx(_styles, "footer-link")}
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Block tag="div">{"Plans"}</_Builtin.Block>
              </_Builtin.Link>
            </_Builtin.ListItem>
            <_Builtin.ListItem>
              <_Builtin.Link
                className={_utils.cx(_styles, "footer-link")}
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Block tag="div">{"Try"}</_Builtin.Block>
              </_Builtin.Link>
            </_Builtin.ListItem>
            <_Builtin.ListItem>
              <_Builtin.Link
                className={_utils.cx(_styles, "footer-link")}
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Block tag="div">{"News"}</_Builtin.Block>
              </_Builtin.Link>
            </_Builtin.ListItem>
            <_Builtin.ListItem>
              <_Builtin.Link
                className={_utils.cx(_styles, "footer-link")}
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Block tag="div">{"Help"}</_Builtin.Block>
              </_Builtin.Link>
            </_Builtin.ListItem>
          </_Builtin.List>
          <_Builtin.List
            className={_utils.cx(_styles, "utility-margin-bottom-0")}
            id={_utils.cx(
              _styles,
              "w-node-_4a966be7-ada4-c0d3-f5a8-83895d58d37a-5d58d331"
            )}
            tag="ul"
            role="list"
            unstyled={true}
          >
            <_Builtin.ListItem>
              <_Builtin.Heading
                className={_utils.cx(
                  _styles,
                  "h6-heading",
                  "utility-text-secondary"
                )}
                tag="h2"
              >
                {"About"}
              </_Builtin.Heading>
            </_Builtin.ListItem>
            <_Builtin.ListItem>
              <_Builtin.Link
                className={_utils.cx(_styles, "footer-link")}
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Block tag="div">{"Story"}</_Builtin.Block>
              </_Builtin.Link>
            </_Builtin.ListItem>
            <_Builtin.ListItem>
              <_Builtin.Link
                className={_utils.cx(_styles, "footer-link")}
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Block tag="div">{"People"}</_Builtin.Block>
              </_Builtin.Link>
            </_Builtin.ListItem>
            <_Builtin.ListItem>
              <_Builtin.Link
                className={_utils.cx(_styles, "footer-link")}
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Block tag="div">{"Jobs"}</_Builtin.Block>
              </_Builtin.Link>
            </_Builtin.ListItem>
            <_Builtin.ListItem>
              <_Builtin.Link
                className={_utils.cx(_styles, "footer-link")}
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Block tag="div">{"Insights"}</_Builtin.Block>
              </_Builtin.Link>
            </_Builtin.ListItem>
            <_Builtin.ListItem>
              <_Builtin.Link
                className={_utils.cx(_styles, "footer-link")}
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Block tag="div">{"Media"}</_Builtin.Block>
              </_Builtin.Link>
            </_Builtin.ListItem>
          </_Builtin.List>
          <_Builtin.List
            className={_utils.cx(_styles, "utility-margin-bottom-0")}
            id={_utils.cx(
              _styles,
              "w-node-_4a966be7-ada4-c0d3-f5a8-83895d58d392-5d58d331"
            )}
            tag="ul"
            role="list"
            unstyled={true}
          >
            <_Builtin.ListItem>
              <_Builtin.Heading
                className={_utils.cx(
                  _styles,
                  "h6-heading",
                  "utility-text-secondary"
                )}
                tag="h2"
              >
                {"Tools"}
              </_Builtin.Heading>
            </_Builtin.ListItem>
            <_Builtin.ListItem>
              <_Builtin.Link
                className={_utils.cx(_styles, "footer-link")}
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Block tag="div">{"Docs"}</_Builtin.Block>
              </_Builtin.Link>
            </_Builtin.ListItem>
            <_Builtin.ListItem>
              <_Builtin.Link
                className={_utils.cx(_styles, "footer-link")}
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Block tag="div">{"API"}</_Builtin.Block>
              </_Builtin.Link>
            </_Builtin.ListItem>
            <_Builtin.ListItem>
              <_Builtin.Link
                className={_utils.cx(_styles, "footer-link")}
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Block tag="div">{"Tips"}</_Builtin.Block>
              </_Builtin.Link>
            </_Builtin.ListItem>
            <_Builtin.ListItem>
              <_Builtin.Link
                className={_utils.cx(_styles, "footer-link")}
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Block tag="div">{"Forum"}</_Builtin.Block>
              </_Builtin.Link>
            </_Builtin.ListItem>
            <_Builtin.ListItem>
              <_Builtin.Link
                className={_utils.cx(_styles, "footer-link")}
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Block tag="div">{"Status"}</_Builtin.Block>
              </_Builtin.Link>
            </_Builtin.ListItem>
          </_Builtin.List>
        </_Builtin.Grid>
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "divider",
            "utility-margin-top-1rem",
            "utility-margin-bottom-1rem"
          )}
          tag="div"
        />
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "flex-horizontal",
            "x-space-between",
            "tablet-flex-vertical",
            "tablet-flex-x-center",
            "flex-gap-sm"
          )}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "utility-text-secondary")}
            tag="div"
          >
            {"All rights reserved "}
            {"©"}
            {" 2025 ToDone"}
          </_Builtin.Block>
          <_Builtin.List
            className={_utils.cx(
              _styles,
              "flex-horizontal",
              "y-center",
              "x-center",
              "flex-gap-xs",
              "wrap",
              "utility-margin-bottom-0",
              "utility-padding-all-0"
            )}
            tag="ul"
            role="list"
            unstyled={true}
          >
            <_Builtin.ListItem
              className={_utils.cx(_styles, "utility-margin-bottom-0")}
            >
              <_Builtin.Link
                className={_utils.cx(_styles, "footer-link")}
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Block tag="div">{"Terms"}</_Builtin.Block>
              </_Builtin.Link>
            </_Builtin.ListItem>
            <_Builtin.ListItem
              className={_utils.cx(_styles, "utility-margin-bottom-0")}
            >
              <_Builtin.Link
                className={_utils.cx(_styles, "footer-link")}
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Block tag="div">{"Privacy"}</_Builtin.Block>
              </_Builtin.Link>
            </_Builtin.ListItem>
            <_Builtin.ListItem
              className={_utils.cx(_styles, "utility-margin-bottom-0")}
            >
              <_Builtin.Link
                className={_utils.cx(_styles, "footer-link")}
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Block tag="div">{"Cookies"}</_Builtin.Block>
              </_Builtin.Link>
            </_Builtin.ListItem>
          </_Builtin.List>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
