"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Navigation.module.css";

export function Navigation({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "nav", "inverse-nav")} tag="div">
      <_Builtin.NavbarWrapper
        className={_utils.cx(_styles, "nav-container")}
        tag="div"
        data-animation="default"
        data-easing2="ease"
        data-easing="ease"
        data-collapse="medium"
        role="banner"
        data-no-scroll="1"
        data-duration="400"
        config={{
          easing: "ease",
          easing2: "ease",
          duration: 400,
          docHeight: false,
          noScroll: true,
          animation: "default",
          collapse: "medium",
        }}
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "nav-left")}
          id={_utils.cx(
            _styles,
            "w-node-_482c8dff-06c5-2802-22c1-cfcca51b7d14-a51b7d12"
          )}
          tag="div"
        >
          <_Builtin.Link
            className={_utils.cx(_styles, "nav-logo")}
            id={_utils.cx(
              _styles,
              "w-node-_482c8dff-06c5-2802-22c1-cfcca51b7d15-a51b7d12"
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
                "paragraph-lg",
                "utility-margin-bottom-0"
              )}
              tag="div"
            >
              {"Dataway"}
            </_Builtin.Block>
          </_Builtin.Link>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "nav-center")}
          id={_utils.cx(
            _styles,
            "w-node-_482c8dff-06c5-2802-22c1-cfcca51b7d1b-a51b7d12"
          )}
          tag="div"
        >
          <_Builtin.NavbarMenu
            className={_utils.cx(_styles, "nav-menu")}
            id={_utils.cx(
              _styles,
              "w-node-_482c8dff-06c5-2802-22c1-cfcca51b7d1c-a51b7d12"
            )}
            tag="nav"
            role="navigation"
          >
            <_Builtin.List
              className={_utils.cx(_styles, "nav-menu-list")}
              tag="ul"
              role="list"
              unstyled={true}
            >
              <_Builtin.ListItem
                className={_utils.cx(_styles, "nav-menu-list-item")}
              >
                <_Builtin.DropdownWrapper
                  className={_utils.cx(_styles, "nav-menu-dropdown")}
                  tag="div"
                  delay={0}
                  hover={false}
                >
                  <_Builtin.DropdownToggle
                    className={_utils.cx(
                      _styles,
                      "nav-link",
                      "nav-link-on-inverse"
                    )}
                    tag="div"
                  >
                    <_Builtin.Block tag="div">{"Features"}</_Builtin.Block>
                    <_Builtin.Icon
                      className={_utils.cx(_styles, "nav-caret")}
                      widget={{
                        type: "icon",
                        icon: "dropdown-toggle",
                      }}
                    />
                  </_Builtin.DropdownToggle>
                  <_Builtin.DropdownList
                    className={_utils.cx(
                      _styles,
                      "nav-mega-menu-dropdown-list"
                    )}
                    tag="nav"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "mega-nav-dropdown-list-wrapper"
                      )}
                      tag="div"
                    >
                      <_Builtin.List
                        className={_utils.cx(
                          _styles,
                          "grid-layout",
                          "desktop-3-column",
                          "tablet-1-column",
                          "grid-gap-sm",
                          "utility-margin-bottom-0"
                        )}
                        tag="ul"
                        role="list"
                        unstyled={true}
                      >
                        <_Builtin.ListItem
                          className={_utils.cx(
                            _styles,
                            "w-node-_482c8dff-06c5-2802-22c1-cfcca51b7d27-a51b7d12"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_9ccb5034-3000-802a-a836-b6f1d66a6f0f-d66a6ef8"
                          )}
                        >
                          <_Builtin.Grid
                            className={_utils.cx(
                              _styles,
                              "grid-layout",
                              "desktop-3-column",
                              "tablet-1-column",
                              "grid-gap-sm"
                            )}
                          >
                            <_Builtin.Block tag="div">
                              <_Builtin.Block
                                className={_utils.cx(_styles, "eyebrow")}
                                tag="div"
                              >
                                {"Task tools"}
                              </_Builtin.Block>
                              <_Builtin.List
                                className={_utils.cx(
                                  _styles,
                                  "nav-mega-menu-list"
                                )}
                                tag="ul"
                                role="list"
                                unstyled={true}
                              >
                                <_Builtin.ListItem
                                  className={_utils.cx(
                                    _styles,
                                    "utility-margin-bottom-0"
                                  )}
                                  id={_utils.cx(
                                    _styles,
                                    "w-node-_482c8dff-06c5-2802-22c1-cfcca51b7d2d-a51b7d12"
                                  )}
                                >
                                  <_Builtin.Link
                                    className={_utils.cx(
                                      _styles,
                                      "mega-nav-link-item"
                                    )}
                                    button={false}
                                    block="inline"
                                    options={{
                                      href: "#",
                                    }}
                                  >
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "icon-medium"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.DOM
                                        tag="svg"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 32 32"
                                        fill="currentColor"
                                      >
                                        <_Builtin.DOM
                                          tag="path"
                                          d="m25.7 9.3l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V10a.9.9 0 0 0-.3-.7M18 4.4l5.6 5.6H18ZM24 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6Z"
                                          stroke-linejoin="round"
                                        />
                                      </_Builtin.DOM>
                                    </_Builtin.Block>
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "w-node-_482c8dff-06c5-2802-22c1-cfcca51b7d32-a51b7d12"
                                      )}
                                      id={_utils.cx(
                                        _styles,
                                        "w-node-_9ccb5034-3000-802a-a836-b6f1d66a6f1a-d66a6ef8"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.Block tag="div">
                                        <_Builtin.Strong>
                                          {"Smart lists"}
                                        </_Builtin.Strong>
                                      </_Builtin.Block>
                                      <_Builtin.Block
                                        className={_utils.cx(
                                          _styles,
                                          "paragraph-sm",
                                          "utility-text-secondary"
                                        )}
                                        tag="div"
                                      >
                                        {"Sort and filter your to-dos easily."}
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.Link>
                                </_Builtin.ListItem>
                                <_Builtin.ListItem
                                  className={_utils.cx(
                                    _styles,
                                    "utility-margin-bottom-0"
                                  )}
                                  id={_utils.cx(
                                    _styles,
                                    "w-node-_482c8dff-06c5-2802-22c1-cfcca51b7d38-a51b7d12"
                                  )}
                                >
                                  <_Builtin.Link
                                    className={_utils.cx(
                                      _styles,
                                      "mega-nav-link-item"
                                    )}
                                    button={false}
                                    block="inline"
                                    options={{
                                      href: "#",
                                    }}
                                  >
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "icon-medium"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.DOM
                                        tag="svg"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 32 32"
                                        fill="currentColor"
                                      >
                                        <_Builtin.DOM
                                          tag="path"
                                          d="m25.7 9.3l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V10a.9.9 0 0 0-.3-.7M18 4.4l5.6 5.6H18ZM24 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6Z"
                                          stroke-linejoin="round"
                                        />
                                      </_Builtin.DOM>
                                    </_Builtin.Block>
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "w-node-_482c8dff-06c5-2802-22c1-cfcca51b7d3d-a51b7d12"
                                      )}
                                      id={_utils.cx(
                                        _styles,
                                        "w-node-_9ccb5034-3000-802a-a836-b6f1d66a6f25-d66a6ef8"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.Block tag="div">
                                        <_Builtin.Strong>
                                          {"Reminders"}
                                        </_Builtin.Strong>
                                      </_Builtin.Block>
                                      <_Builtin.Block
                                        className={_utils.cx(
                                          _styles,
                                          "paragraph-sm",
                                          "utility-text-secondary"
                                        )}
                                        tag="div"
                                      >
                                        {"Get gentle nudges for what matters."}
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.Link>
                                </_Builtin.ListItem>
                                <_Builtin.ListItem
                                  className={_utils.cx(
                                    _styles,
                                    "utility-margin-bottom-0"
                                  )}
                                  id={_utils.cx(
                                    _styles,
                                    "w-node-_482c8dff-06c5-2802-22c1-cfcca51b7d43-a51b7d12"
                                  )}
                                >
                                  <_Builtin.Link
                                    className={_utils.cx(
                                      _styles,
                                      "mega-nav-link-item"
                                    )}
                                    button={false}
                                    block="inline"
                                    options={{
                                      href: "#",
                                    }}
                                  >
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "icon-medium"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.DOM
                                        tag="svg"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 32 32"
                                        fill="currentColor"
                                      >
                                        <_Builtin.DOM
                                          tag="path"
                                          d="m25.7 9.3l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V10a.9.9 0 0 0-.3-.7M18 4.4l5.6 5.6H18ZM24 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6Z"
                                          stroke-linejoin="round"
                                        />
                                      </_Builtin.DOM>
                                    </_Builtin.Block>
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "w-node-_482c8dff-06c5-2802-22c1-cfcca51b7d48-a51b7d12"
                                      )}
                                      id={_utils.cx(
                                        _styles,
                                        "w-node-_9ccb5034-3000-802a-a836-b6f1d66a6f30-d66a6ef8"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.Block tag="div">
                                        <_Builtin.Strong>
                                          {"Progress tracking"}
                                        </_Builtin.Strong>
                                      </_Builtin.Block>
                                      <_Builtin.Block
                                        className={_utils.cx(
                                          _styles,
                                          "paragraph-sm",
                                          "utility-text-secondary"
                                        )}
                                        tag="div"
                                      >
                                        {"See your wins with simple stats."}
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.Link>
                                </_Builtin.ListItem>
                              </_Builtin.List>
                            </_Builtin.Block>
                            <_Builtin.Block
                              id={_utils.cx(
                                _styles,
                                "w-node-_482c8dff-06c5-2802-22c1-cfcca51b7d4e-a51b7d12"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block
                                className={_utils.cx(_styles, "eyebrow")}
                                tag="div"
                              >
                                {"Collaboration"}
                              </_Builtin.Block>
                              <_Builtin.List
                                className={_utils.cx(
                                  _styles,
                                  "nav-mega-menu-list"
                                )}
                                tag="ul"
                                role="list"
                                unstyled={true}
                              >
                                <_Builtin.ListItem
                                  className={_utils.cx(
                                    _styles,
                                    "utility-margin-bottom-0"
                                  )}
                                  id={_utils.cx(
                                    _styles,
                                    "w-node-_482c8dff-06c5-2802-22c1-cfcca51b7d52-a51b7d12"
                                  )}
                                >
                                  <_Builtin.Link
                                    className={_utils.cx(
                                      _styles,
                                      "mega-nav-link-item"
                                    )}
                                    button={false}
                                    block="inline"
                                    options={{
                                      href: "#",
                                    }}
                                  >
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "icon-medium"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.DOM
                                        tag="svg"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 32 32"
                                        fill="currentColor"
                                      >
                                        <_Builtin.DOM
                                          tag="path"
                                          d="m25.7 9.3l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V10a.9.9 0 0 0-.3-.7M18 4.4l5.6 5.6H18ZM24 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6Z"
                                          stroke-linejoin="round"
                                        />
                                      </_Builtin.DOM>
                                    </_Builtin.Block>
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "w-node-_482c8dff-06c5-2802-22c1-cfcca51b7d57-a51b7d12"
                                      )}
                                      id={_utils.cx(
                                        _styles,
                                        "w-node-_9ccb5034-3000-802a-a836-b6f1d66a6f3f-d66a6ef8"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.Block tag="div">
                                        <_Builtin.Strong>
                                          {"Share tasks"}
                                        </_Builtin.Strong>
                                      </_Builtin.Block>
                                      <_Builtin.Block
                                        className={_utils.cx(
                                          _styles,
                                          "paragraph-sm",
                                          "utility-text-secondary"
                                        )}
                                        tag="div"
                                      >
                                        {"Work together on any list."}
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.Link>
                                </_Builtin.ListItem>
                                <_Builtin.ListItem
                                  className={_utils.cx(
                                    _styles,
                                    "utility-margin-bottom-0"
                                  )}
                                  id={_utils.cx(
                                    _styles,
                                    "w-node-_482c8dff-06c5-2802-22c1-cfcca51b7d5d-a51b7d12"
                                  )}
                                >
                                  <_Builtin.Link
                                    className={_utils.cx(
                                      _styles,
                                      "mega-nav-link-item"
                                    )}
                                    button={false}
                                    block="inline"
                                    options={{
                                      href: "#",
                                    }}
                                  >
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "icon-medium"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.DOM
                                        tag="svg"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 32 32"
                                        fill="currentColor"
                                      >
                                        <_Builtin.DOM
                                          tag="path"
                                          d="m25.7 9.3l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V10a.9.9 0 0 0-.3-.7M18 4.4l5.6 5.6H18ZM24 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6Z"
                                          stroke-linejoin="round"
                                        />
                                      </_Builtin.DOM>
                                    </_Builtin.Block>
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "w-node-_482c8dff-06c5-2802-22c1-cfcca51b7d62-a51b7d12"
                                      )}
                                      id={_utils.cx(
                                        _styles,
                                        "w-node-_9ccb5034-3000-802a-a836-b6f1d66a6f4a-d66a6ef8"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.Block tag="div">
                                        <_Builtin.Strong>
                                          {"Comments"}
                                        </_Builtin.Strong>
                                      </_Builtin.Block>
                                      <_Builtin.Block
                                        className={_utils.cx(
                                          _styles,
                                          "paragraph-sm",
                                          "utility-text-secondary"
                                        )}
                                        tag="div"
                                      >
                                        {"Chat right on your tasks."}
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.Link>
                                </_Builtin.ListItem>
                                <_Builtin.ListItem
                                  className={_utils.cx(
                                    _styles,
                                    "utility-margin-bottom-0"
                                  )}
                                  id={_utils.cx(
                                    _styles,
                                    "w-node-_482c8dff-06c5-2802-22c1-cfcca51b7d68-a51b7d12"
                                  )}
                                >
                                  <_Builtin.Link
                                    className={_utils.cx(
                                      _styles,
                                      "mega-nav-link-item"
                                    )}
                                    button={false}
                                    block="inline"
                                    options={{
                                      href: "#",
                                    }}
                                  >
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "icon-medium"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.DOM
                                        tag="svg"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 32 32"
                                        fill="currentColor"
                                      >
                                        <_Builtin.DOM
                                          tag="path"
                                          d="m25.7 9.3l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V10a.9.9 0 0 0-.3-.7M18 4.4l5.6 5.6H18ZM24 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6Z"
                                          stroke-linejoin="round"
                                        />
                                      </_Builtin.DOM>
                                    </_Builtin.Block>
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "w-node-_482c8dff-06c5-2802-22c1-cfcca51b7d6d-a51b7d12"
                                      )}
                                      id={_utils.cx(
                                        _styles,
                                        "w-node-_9ccb5034-3000-802a-a836-b6f1d66a6f55-d66a6ef8"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.Block tag="div">
                                        <_Builtin.Strong>
                                          {"Activity log"}
                                        </_Builtin.Strong>
                                      </_Builtin.Block>
                                      <_Builtin.Block
                                        className={_utils.cx(
                                          _styles,
                                          "paragraph-sm",
                                          "utility-text-secondary"
                                        )}
                                        tag="div"
                                      >
                                        {"Follow every update as it happens."}
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.Link>
                                </_Builtin.ListItem>
                              </_Builtin.List>
                            </_Builtin.Block>
                            <_Builtin.Block
                              id={_utils.cx(
                                _styles,
                                "w-node-_482c8dff-06c5-2802-22c1-cfcca51b7d73-a51b7d12"
                              )}
                              tag="div"
                            >
                              <_Builtin.Block
                                className={_utils.cx(_styles, "eyebrow")}
                                tag="div"
                              >
                                {"Customization"}
                              </_Builtin.Block>
                              <_Builtin.List
                                className={_utils.cx(
                                  _styles,
                                  "nav-mega-menu-list"
                                )}
                                tag="ul"
                                role="list"
                                unstyled={true}
                              >
                                <_Builtin.ListItem
                                  className={_utils.cx(
                                    _styles,
                                    "utility-margin-bottom-0"
                                  )}
                                  id={_utils.cx(
                                    _styles,
                                    "w-node-_482c8dff-06c5-2802-22c1-cfcca51b7d77-a51b7d12"
                                  )}
                                >
                                  <_Builtin.Link
                                    className={_utils.cx(
                                      _styles,
                                      "mega-nav-link-item"
                                    )}
                                    button={false}
                                    block="inline"
                                    options={{
                                      href: "#",
                                    }}
                                  >
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "icon-medium"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.DOM
                                        tag="svg"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 32 32"
                                        fill="currentColor"
                                      >
                                        <_Builtin.DOM
                                          tag="path"
                                          d="m25.7 9.3l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V10a.9.9 0 0 0-.3-.7M18 4.4l5.6 5.6H18ZM24 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6Z"
                                          stroke-linejoin="round"
                                        />
                                      </_Builtin.DOM>
                                    </_Builtin.Block>
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "w-node-_482c8dff-06c5-2802-22c1-cfcca51b7d7c-a51b7d12"
                                      )}
                                      id={_utils.cx(
                                        _styles,
                                        "w-node-_9ccb5034-3000-802a-a836-b6f1d66a6f64-d66a6ef8"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.Block tag="div">
                                        <_Builtin.Strong>
                                          {"Themes"}
                                        </_Builtin.Strong>
                                      </_Builtin.Block>
                                      <_Builtin.Block
                                        className={_utils.cx(
                                          _styles,
                                          "paragraph-sm",
                                          "utility-text-secondary"
                                        )}
                                        tag="div"
                                      >
                                        {"Make your space feel like you."}
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.Link>
                                </_Builtin.ListItem>
                                <_Builtin.ListItem
                                  className={_utils.cx(
                                    _styles,
                                    "utility-margin-bottom-0"
                                  )}
                                  id={_utils.cx(
                                    _styles,
                                    "w-node-_482c8dff-06c5-2802-22c1-cfcca51b7d82-a51b7d12"
                                  )}
                                >
                                  <_Builtin.Link
                                    className={_utils.cx(
                                      _styles,
                                      "mega-nav-link-item"
                                    )}
                                    button={false}
                                    block="inline"
                                    options={{
                                      href: "#",
                                    }}
                                  >
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "icon-medium"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.DOM
                                        tag="svg"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 32 32"
                                        fill="currentColor"
                                      >
                                        <_Builtin.DOM
                                          tag="path"
                                          d="m25.7 9.3l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V10a.9.9 0 0 0-.3-.7M18 4.4l5.6 5.6H18ZM24 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6Z"
                                          stroke-linejoin="round"
                                        />
                                      </_Builtin.DOM>
                                    </_Builtin.Block>
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "w-node-_482c8dff-06c5-2802-22c1-cfcca51b7d87-a51b7d12"
                                      )}
                                      id={_utils.cx(
                                        _styles,
                                        "w-node-_9ccb5034-3000-802a-a836-b6f1d66a6f6f-d66a6ef8"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.Block tag="div">
                                        <_Builtin.Strong>
                                          {"Integrations"}
                                        </_Builtin.Strong>
                                      </_Builtin.Block>
                                      <_Builtin.Block
                                        className={_utils.cx(
                                          _styles,
                                          "paragraph-sm",
                                          "utility-text-secondary"
                                        )}
                                        tag="div"
                                      >
                                        {"Link up with your favorite apps."}
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.Link>
                                </_Builtin.ListItem>
                                <_Builtin.ListItem
                                  className={_utils.cx(
                                    _styles,
                                    "utility-margin-bottom-0"
                                  )}
                                  id={_utils.cx(
                                    _styles,
                                    "w-node-_482c8dff-06c5-2802-22c1-cfcca51b7d8d-a51b7d12"
                                  )}
                                >
                                  <_Builtin.Link
                                    className={_utils.cx(
                                      _styles,
                                      "mega-nav-link-item"
                                    )}
                                    button={false}
                                    block="inline"
                                    options={{
                                      href: "#",
                                    }}
                                  >
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "icon-medium"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.DOM
                                        tag="svg"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 32 32"
                                        fill="currentColor"
                                      >
                                        <_Builtin.DOM
                                          tag="path"
                                          d="m25.7 9.3l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V10a.9.9 0 0 0-.3-.7M18 4.4l5.6 5.6H18ZM24 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6Z"
                                          stroke-linejoin="round"
                                        />
                                      </_Builtin.DOM>
                                    </_Builtin.Block>
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "w-node-_482c8dff-06c5-2802-22c1-cfcca51b7d92-a51b7d12"
                                      )}
                                      id={_utils.cx(
                                        _styles,
                                        "w-node-_9ccb5034-3000-802a-a836-b6f1d66a6f7a-d66a6ef8"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.Block tag="div">
                                        <_Builtin.Strong>
                                          {"Shortcuts"}
                                        </_Builtin.Strong>
                                      </_Builtin.Block>
                                      <_Builtin.Block
                                        className={_utils.cx(
                                          _styles,
                                          "paragraph-sm",
                                          "utility-text-secondary"
                                        )}
                                        tag="div"
                                      >
                                        {"Move faster with quick actions."}
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.Link>
                                </_Builtin.ListItem>
                              </_Builtin.List>
                            </_Builtin.Block>
                          </_Builtin.Grid>
                        </_Builtin.ListItem>
                        <_Builtin.ListItem
                          className={_utils.cx(
                            _styles,
                            "flex-horizontal",
                            "w-node-_482c8dff-06c5-2802-22c1-cfcca51b7d98-a51b7d12"
                          )}
                          id={_utils.cx(
                            _styles,
                            "w-node-_9ccb5034-3000-802a-a836-b6f1d66a6f80-d66a6ef8"
                          )}
                        >
                          <_Builtin.Link
                            className={_utils.cx(
                              _styles,
                              "card-link",
                              "inverse-card-link",
                              "flex-child-expand"
                            )}
                            button={false}
                            block="inline"
                            options={{
                              href: "#",
                            }}
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "card-body")}
                              tag="div"
                            >
                              <_Builtin.Block
                                className={_utils.cx(_styles, "h3-heading")}
                                tag="div"
                              >
                                {"Organize life, your way"}
                              </_Builtin.Block>
                              <_Builtin.Paragraph
                                className={_utils.cx(
                                  _styles,
                                  "paragraph-sm",
                                  "utility-text-inverse-secondary"
                                )}
                              >
                                {"Plan, track, and celebrate every step"}
                                {"—"}
                                {"your productivity, made simple and joyful."}
                              </_Builtin.Paragraph>
                              <_Builtin.Block
                                className={_utils.cx(
                                  _styles,
                                  "utility-margin-top-auto"
                                )}
                                tag="div"
                              >
                                <_Builtin.Block
                                  className={_utils.cx(_styles, "button-group")}
                                  tag="div"
                                >
                                  <_Builtin.Block
                                    className={_utils.cx(
                                      _styles,
                                      "text-button",
                                      "secondary-text-button",
                                      "text-button-on-inverse"
                                    )}
                                    tag="div"
                                  >
                                    <_Builtin.Block tag="div">
                                      {"Get started"}
                                    </_Builtin.Block>
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "button-icon"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.DOM
                                        tag="svg"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                      >
                                        <_Builtin.DOM
                                          tag="path"
                                          d="M2 8H14.5M14.5 8L8.5 2M14.5 8L8.5 14"
                                          stroke="currentColor"
                                          stroke-width="2"
                                          stroke-linejoin="round"
                                        />
                                      </_Builtin.DOM>
                                    </_Builtin.Block>
                                  </_Builtin.Block>
                                </_Builtin.Block>
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Link>
                        </_Builtin.ListItem>
                      </_Builtin.List>
                    </_Builtin.Block>
                  </_Builtin.DropdownList>
                </_Builtin.DropdownWrapper>
              </_Builtin.ListItem>
              <_Builtin.ListItem
                className={_utils.cx(_styles, "nav-menu-list-item")}
              >
                <_Builtin.Link
                  className={_utils.cx(
                    _styles,
                    "nav-link",
                    "nav-link-on-inverse"
                  )}
                  button={false}
                  block="inline"
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Block tag="div">{"How it works"}</_Builtin.Block>
                </_Builtin.Link>
              </_Builtin.ListItem>
              <_Builtin.ListItem
                className={_utils.cx(_styles, "nav-menu-list-item")}
              >
                <_Builtin.Link
                  className={_utils.cx(
                    _styles,
                    "nav-link",
                    "nav-link-on-inverse"
                  )}
                  button={false}
                  block="inline"
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Block tag="div">{"Updates"}</_Builtin.Block>
                </_Builtin.Link>
              </_Builtin.ListItem>
              <_Builtin.ListItem
                className={_utils.cx(_styles, "nav-menu-list-item")}
              >
                <_Builtin.DropdownWrapper
                  className={_utils.cx(_styles, "nav-menu-dropdown")}
                  tag="div"
                  delay={0}
                  hover={false}
                >
                  <_Builtin.DropdownToggle
                    className={_utils.cx(
                      _styles,
                      "nav-link",
                      "nav-link-on-inverse"
                    )}
                    tag="div"
                  >
                    <_Builtin.Block tag="div">{"Help"}</_Builtin.Block>
                    <_Builtin.Icon
                      className={_utils.cx(_styles, "nav-caret")}
                      widget={{
                        type: "icon",
                        icon: "dropdown-toggle",
                      }}
                    />
                  </_Builtin.DropdownToggle>
                  <_Builtin.DropdownList
                    className={_utils.cx(_styles, "nav-menu-dropdown-list")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "nav-menu-dropdown-list-wrapper"
                      )}
                      tag="div"
                    >
                      <_Builtin.List
                        className={_utils.cx(
                          _styles,
                          "flex-vertical",
                          "utility-margin-bottom-0"
                        )}
                        tag="ul"
                        role="list"
                        unstyled={true}
                      >
                        <_Builtin.ListItem
                          className={_utils.cx(
                            _styles,
                            "utility-margin-bottom-0"
                          )}
                        >
                          <_Builtin.Link
                            className={_utils.cx(_styles, "nav-dropdown-link")}
                            button={false}
                            block="inline"
                            options={{
                              href: "#",
                            }}
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "button-label")}
                              tag="div"
                            >
                              {"Start guide"}
                            </_Builtin.Block>
                          </_Builtin.Link>
                        </_Builtin.ListItem>
                        <_Builtin.ListItem
                          className={_utils.cx(
                            _styles,
                            "utility-margin-bottom-0"
                          )}
                        >
                          <_Builtin.Link
                            className={_utils.cx(_styles, "nav-dropdown-link")}
                            button={false}
                            block="inline"
                            options={{
                              href: "#",
                            }}
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "button-label")}
                              tag="div"
                            >
                              {"Contact"}
                            </_Builtin.Block>
                          </_Builtin.Link>
                        </_Builtin.ListItem>
                      </_Builtin.List>
                    </_Builtin.Block>
                  </_Builtin.DropdownList>
                </_Builtin.DropdownWrapper>
              </_Builtin.ListItem>
            </_Builtin.List>
          </_Builtin.NavbarMenu>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "nav-right")}
          id={_utils.cx(
            _styles,
            "w-node-_482c8dff-06c5-2802-22c1-cfcca51b7dc2-a51b7d12"
          )}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "button-group",
              "utility-margin-top-0"
            )}
            tag="div"
          >
            <_Builtin.Link
              className={_utils.cx(
                _styles,
                "button",
                "primary-button-on-inverse"
              )}
              button={false}
              block="inline"
              options={{
                href: "#",
              }}
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "button-label")}
                tag="div"
              >
                {"Sign up"}
              </_Builtin.Block>
            </_Builtin.Link>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.NavbarButton
          className={_utils.cx(_styles, "nav-mobile-menu-button")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "icon", "icon-on-inverse")}
            tag="div"
          >
            <_Builtin.DOM
              tag="svg"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <_Builtin.DOM
                tag="g"
                class="nc-icon-wrapper"
                stroke-linecap="square"
                stroke-linejoin="miter"
                stroke-width="1.5"
                fill="none"
                stroke="currentColor"
                stroke-miterlimit="10"
              >
                <_Builtin.DOM
                  tag="line"
                  x1="1"
                  y1="12"
                  x2="23"
                  y2="12"
                  stroke="currentColor"
                />
                <_Builtin.DOM tag="line" x1="1" y1="5" x2="23" y2="5" />
                <_Builtin.DOM tag="line" x1="1" y1="19" x2="23" y2="19" />
              </_Builtin.DOM>
            </_Builtin.DOM>
          </_Builtin.Block>
        </_Builtin.NavbarButton>
      </_Builtin.NavbarWrapper>
    </_Component>
  );
}
