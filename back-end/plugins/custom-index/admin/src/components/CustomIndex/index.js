import React, { useState, useReducer } from "react";
import Element from "../Element";

function range(count) {
  let array = [];
  for (let i = 0; i < count; i++) {
    array.push(i);
  }
  return array;
}

const maxColumnCountForElement = (elementIndex, columnCount, elements) => {
  const nextElementIndex = elements.reduce((acc, element) => {
    if (element.column > elementIndex && element.column < acc) {
      return element.column;
    } else {
      return acc;
    }
  }, columnCount);

  return nextElementIndex - elementIndex;
};

const columnOccupied = (elements, columnIndex) =>
  elements.reduce(
    (acc, element) =>
      acc ||
      (element.column <= columnIndex &&
        element.column + element.columnsCount > columnIndex),
    false
  );

const reducer = (state, action) => {
  switch (action.type) {
    case "addRow":
      return state.concat({ columns: 3, elements: [] });
    case "changeColumnCount":
      return state.map((row, rowIndex) => {
        if (rowIndex === action.payload.rowIndex) {
          return { ...row, columns: action.payload.count };
        } else {
          return row;
        }
      });
    case "addElementToRow":
      return state.map((row, rowIndex) => {
        if (rowIndex === action.payload.rowIndex) {
          return {
            ...row,
            elements: row.elements.concat({
              type: "text",
              column: action.payload.columnIndex,
              columnsCount: 1,
              payload: "",
            }),
          };
        } else {
          return row;
        }
      });
    case "changeElementColumnCount":
      return state.map((row, rowIndex) => {
        if (rowIndex === action.payload.rowIndex) {
          return {
            ...row,
            elements: row.elements.map((element, elementIndex) => {
              if (elementIndex === action.payload.columnIndex) {
                return { ...element, columnsCount: action.payload.count };
              } else {
                return element;
              }
            }),
          };
        } else {
          return row;
        }
      });
    default:
      return state;
  }
};

const App = () => {
  const [rows, dispatch] = useReducer(reducer, []);

  const addRow = () => {
    dispatch({ type: "addRow" });
  };

  return (
    <div>
      <button onClick={addRow}>Ajouter une rangée</button>
      <ul>
        {rows.map((row, rowIndex) => (
          <li>
            <div>
              <button
                onClick={() => {
                  dispatch({
                    type: "changeColumnCount",
                    payload: { count: 3, rowIndex: rowIndex },
                  });
                }}
              >
                3
              </button>
              <button
                onClick={() => {
                  dispatch({
                    type: "changeColumnCount",
                    payload: { count: 4, rowIndex: rowIndex },
                  });
                }}
              >
                4
              </button>
            </div>
            <ul>
              {range(row.columns).map((_, columnIndex) => (
                <li>
                  {row.elements.find(
                    (element) => element.column === columnIndex
                  ) && (
                    <Element
                      element={row.elements.find(
                        (element) => element.column === columnIndex
                      )}
                      maxColumnCount={maxColumnCountForElement(
                        columnIndex,
                        row.columns,
                        row.elements
                      )}
                      onColumnCountChange={(count) => {
                        dispatch({
                          type: "changeElementColumnCount",
                          payload: {
                            count: count,
                            rowIndex: rowIndex,
                            columnIndex: columnIndex,
                          },
                        });
                      }}
                    />
                  )}
                  {!columnOccupied(row.elements, columnIndex) && (
                    <button
                      onClick={() => {
                        dispatch({
                          type: "addElementToRow",
                          payload: {
                            rowIndex: rowIndex,
                            columnIndex: columnIndex,
                          },
                        });
                      }}
                    >
                      +
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default App;