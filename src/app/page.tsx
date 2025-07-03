"use client";

import { useState, type FormEvent } from "react";
import {
  Section,
  Block,
  List,
  ListItem,
  Link,
  FormWrapper,
  FormForm,
  FormTextInput,
  FormButton,
} from "@/devlink/_Builtin";

export default function Home() {
  const [items, setItems] = useState<string[]>([]);
  const [text, setText] = useState("");

  const addItem = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text.trim()) return;
    setItems([...items, text.trim()]);
    setText("");
  };

  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <Section
      tag="section"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Block tag="div" className="container" style={{ maxWidth: "600px", width: "100%" }}>
        <h1
          className="margin-bottom-24px"
          style={{ fontSize: "2rem", textAlign: "center" }}
        >
          Todo List
        </h1>
        <FormWrapper onSubmit={addItem}>
          <FormForm style={{ display: "flex", gap: "0.5rem" }}>
            <FormTextInput
              value={text}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
              placeholder="Add a new task"
              style={{ flexGrow: 1 }}
            />

            <FormButton value="Add" />
          </FormForm>
        </FormWrapper>
        <List tag="ul" unstyled style={{ marginTop: "1rem" }}>
          {items.map((item, index) => (
            <ListItem
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "0.5rem",
              }}
            >
              <Block tag="span">{item}</Block>
              <Link
                button
                options={{ href: "#" }}
                onClick={(e) => {
                  e.preventDefault();
                  removeItem(index);
                }}
              >
                Delete
              </Link>
            </ListItem>
          ))}
        </List>
      </Block>
    </Section>
  );
}

