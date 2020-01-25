const intitalData = {
  tasks: {
    "tasks-1": { id: "tasks-1", content: "learn react" },
    "tasks-2": { id: "tasks-2", content: "feed unicorns" },
    "tasks-3": { id: "tasks-3", content: "find nemo" },
    "tasks-4": { id: "tasks-4", content: "hack nasa with html" }
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "To do",
      taskIds: ["tasks-1", "tasks-2", "tasks-3", "tasks-4"]
    }
  },
  columnOrder: ["column-1"]
};
export default intitalData;
