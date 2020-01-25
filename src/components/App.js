import React from "react";
import intitalData from "../initial-data";
import Column from "../components/Column";
import { DragDropContext } from "react-beautiful-dnd";
import "@atlaskit/css-reset";

class App extends React.Component {
  state = intitalData;
  render() {
    return (
      <div>
        {this.state.columnOrder.map(columnId => {
          const column = this.state.columns[columnId];
          const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);

          return <Column key={column.id} column={column} tasks={tasks} />;
        })}
      </div>
    );
  }
}

export default App;
