import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import ReactSearchBox from "react-search-box";
import "./styles.css";

const things = [
  {
    name: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    name: "Bake Cookies",
    id: 1528817084358,
    completed: false
  },
  {
    name: "Do Laundry",
    id: 152881703284358,
    completed: false
  },
  {
    name: "Wash Dishes",
    id: 152881712084358,
    completed: false
  },
  {
    name: "Workout",
    id: 1528817120843958,
    completed: false
  },
  {
    name: "Study",
    id: 1252881712084358,
    completed: false
  }
];
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      things
    };
  }

  addItem = (e, item) => {
    e.preventDefault();
    const newItem = {
      name: item,
      id: Date.now(),
      purchased: false
    };
    this.setState({
      things: [...this.state.things, newItem]
    });
  };

  toggleItem = itemId => {
    console.log(itemId);

    this.setState({
      things: this.state.things.map(item => {
        if (itemId === item.id) {
          return {
            ...item,
            purchased: !item.purchased
          };
        }
        return item;
      })
    });
  };

  clearPurchased = e => {
    e.preventDefault();
    this.setState({
      things: this.state.things.filter(item => !item.purchased)
    });
  };

  render() {
    return (
      <>
        <div className="container">
          <div className="top">
            <h1>Todo List</h1>
            <TodoForm addItem={this.addItem} />
          </div>
          <TodoList
            things={this.state.things}
            toggleItem={this.toggleItem}
            clearPurchased={this.clearPurchased}
          />
        </div>
        <div>
          <ReactSearchBox
            placeholder="Placeholder"
            value="Doe"
            data={this.item}
            callback={record => console.log(record)}
          />
        </div>
      </>
    );
  }
}

export default App;
