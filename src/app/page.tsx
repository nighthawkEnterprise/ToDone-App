"use client";

import { useState } from "react";
import { Section, Block, Link } from "@/devlink/_Builtin";
import {  Navbar } from "@/devlink/Navbar";
import { Footer } from "@/devlink/Footer";

export default function TodoApp() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Welcome to your elegant todo app", completed: false, priority: "medium" },
    { id: 2, text: "Add your first task", completed: false, priority: "high" },
    { id: 3, text: "Mark tasks as complete", completed: true, priority: "low" },
  ]);
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("all");

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, {
        id: Date.now(),
        text: newTask.trim(),
        completed: false,
        priority: "medium"
      }]);
      setNewTask("");
    }
  };

const toggleTask = (id: any) => {
  setTasks(tasks.map(task =>
    task.id === id ? { ...task, completed: !task.completed } : task
  ));
};

const deleteTask = (id: any) => {
  setTasks(tasks.filter(task => task.id !== id));
};


  const filteredTasks = tasks.filter(task => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  const completedCount = tasks.filter(task => task.completed).length;
  const totalCount = tasks.length;

  return (
    <Section
      tag="section"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Block tag="div" className="container">
        {/* Navigation */}
        <Navbar
          navbarLinkFeatures="Tasks"
          navbarLinkProducts="Projects"
          navbarLinkResources="Calendar"
          navbarLinkContact="Settings"
        />
        
        {/* Main Todo Content */}
        <Block
          tag="div"
          style={{
            maxWidth: "800px",
            margin: "2rem auto",
            padding: "2rem",
            background: "rgba(255, 255, 255, 0.95)",
            borderRadius: "20px",
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(10px)",
            flex: 1,
          }}
        >
          {/* Header */}
          <Block tag="div" style={{ textAlign: "center", marginBottom: "2rem" }}>
            <h1
              style={{
                fontSize: "2.5rem",
                fontWeight: 700,
                background: "linear-gradient(83.21deg, #3245ff 0%, #bc52ee 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                marginBottom: "0.5rem",
              }}
            >
              Elegant Todo
            </h1>
            <p style={{ color: "#666", fontSize: "1.1rem" }}>
              {completedCount} of {totalCount} tasks completed
            </p>
          </Block>

          {/* Add Task Form */}
          <Block
            tag="div"
            style={{
              display: "flex",
              gap: "1rem",
              marginBottom: "2rem",
              padding: "1rem",
              background: "#f8f9fa",
              borderRadius: "12px",
              border: "2px solid #e9ecef",
            }}
          >
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addTask()}
              placeholder="Add a new task..."
              style={{
                flex: 1,
                padding: "0.75rem 1rem",
                border: "none",
                borderRadius: "8px",
                fontSize: "1rem",
                outline: "none",
                background: "white",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            />
            <button
              onClick={addTask}
              style={{
                padding: "0.75rem 1.5rem",
                background: "linear-gradient(45deg, #3245ff, #bc52ee)",
                color: "white",
                border: "none",
                borderRadius: "8px",
                fontSize: "1rem",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 8px rgba(50, 69, 255, 0.3)",
              }}
              onMouseOver={(e) => {
                const target = e.target as HTMLButtonElement;
                target.style.transform = "translateY(-2px)";
                target.style.boxShadow = "0 6px 12px rgba(50, 69, 255, 0.4)";
              }}
              onMouseOut={(e) => {
                const target = e.target as HTMLButtonElement;
                target.style.transform = "translateY(0)";
                target.style.boxShadow = "0 4px 8px rgba(50, 69, 255, 0.3)";
              }}
            >
              Add Task
            </button>
          </Block>

          {/* Filter Buttons */}
          <Block
            tag="div"
            style={{
              display: "flex",
              gap: "0.5rem",
              marginBottom: "2rem",
              justifyContent: "center",
            }}
          >
            {["all", "active", "completed"].map((filterType) => (
              <button
                key={filterType}
                onClick={() => setFilter(filterType)}
                style={{
                  padding: "0.5rem 1rem",
                  border: "2px solid #e9ecef",
                  borderRadius: "20px",
                  background: filter === filterType ? "#3245ff" : "white",
                  color: filter === filterType ? "white" : "#666",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  textTransform: "capitalize",
                  fontWeight: 500,
                }}
              >
                {filterType}
              </button>
            ))}
          </Block>

          {/* Tasks List */}
          <Block tag="div" style={{ marginBottom: "2rem" }}>
            {filteredTasks.length === 0 ? (
              <Block
                tag="div"
                style={{
                  textAlign: "center",
                  padding: "3rem",
                  color: "#999",
                  fontSize: "1.1rem",
                }}
              >
                {filter === "all" ? "No tasks yet. Add one above!" : `No ${filter} tasks.`}
              </Block>
            ) : (
              filteredTasks.map((task) => (
                <Block
                  key={task.id}
                  tag="div"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    padding: "1rem",
                    marginBottom: "0.5rem",
                    background: task.completed ? "#f8f9fa" : "white",
                    borderRadius: "12px",
                    border: "2px solid #e9ecef",
                    transition: "all 0.3s ease",
                    opacity: task.completed ? 0.7 : 1,
                  }}
                >
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                    style={{
                      width: "20px",
                      height: "20px",
                      cursor: "pointer",
                      accentColor: "#3245ff",
                    }}
                  />
                  <span
                    style={{
                      flex: 1,
                      fontSize: "1rem",
                      textDecoration: task.completed ? "line-through" : "none",
                      color: task.completed ? "#999" : "#333",
                    }}
                  >
                    {task.text}
                  </span>
                  <button
                    onClick={() => deleteTask(task.id)}
                    style={{
                      padding: "0.5rem",
                      background: "#ff4757",
                      color: "white",
                      border: "none",
                      borderRadius: "6px",
                      cursor: "pointer",
                      fontSize: "0.9rem",
                      transition: "all 0.3s ease",
                    }}
                    onMouseOver={(e) => {
                      const target = e.target as HTMLButtonElement;
                      target.style.background = "#ff3742";
                    }}
                    onMouseOut={(e) => {
                      const target = e.target as HTMLButtonElement;
                      target.style.background = "#ff4757";
                    }}
                  >
                    Delete
                  </button>
                </Block>
              ))
            )}
          </Block>

          {/* Quick Actions */}
          <Block
            tag="div"
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link
              button={true}
              options={{ href: "#" }}
              style={{
                padding: "0.75rem 1.5rem",
                background: "linear-gradient(45deg, #2ed573, #1e90ff)",
                color: "white",
                border: "none",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: 600,
                transition: "all 0.3s ease",
                boxShadow: "0 4px 8px rgba(46, 213, 115, 0.3)",
              }}
              onClick={() => {
                const completed = tasks.filter(task => task.completed);
                setTasks(tasks.filter(task => !task.completed));
              }}
            >
              Clear Completed
            </Link>
            <Link
              button={true}
              options={{ href: "#" }}
              style={{
                padding: "0.75rem 1.5rem",
                background: "linear-gradient(45deg, #ffa726, #ff7043)",
                color: "white",
                border: "none",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: 600,
                transition: "all 0.3s ease",
                boxShadow: "0 4px 8px rgba(255, 167, 38, 0.3)",
              }}
            >
              Export Tasks
            </Link>
          </Block>
        </Block>

        {/* Footer */}
        <Footer />
      </Block>
    </Section>
  );
}