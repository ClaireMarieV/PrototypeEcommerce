import React, { useState, useEffect, useReducer } from "react";
import Element from "../Element";

function range(count) {
  let array = [];
  for (let i = 0; i < count; i++) {
    array.push(i);
  }
  return array;
}

const maxColumnSpanForElement = (elementIndex, columnSpan, elements) => {
  const nextElementIndex = elements.reduce((acc, element) => {
    if (element.column > elementIndex && element.column < acc) {
      return element.column;
    } else {
      return acc;
    }
  }, columnSpan);

  return nextElementIndex - elementIndex;
};

const columnOccupied = (elements, columnIndex) =>
  elements.reduce(
    (acc, element) =>
      acc ||
      (element.column <= columnIndex &&
        element.column + element.columnSpan > columnIndex),
    false
  );

const reducer = (state, action) => {
  switch (action.type) {
    case "init":
      return action.payload;
    case "addRow":
      return state.concat({ columnCount: 3, elements: [] });
    case "changeColumnCount":
      return state.map((row, rowIndex) => {
        if (rowIndex === action.payload.rowIndex) {
          return { ...row, columnCount: action.payload.count };
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
              columnSpan: 1,
              text: "",
            }),
          };
        } else {
          return row;
        }
      });
    case "changeElementColumnSpan":
      return state.map((row, rowIndex) => {
        if (rowIndex === action.payload.rowIndex) {
          return {
            ...row,
            elements: row.elements.map((element) => {
              if (element.column === action.payload.columnIndex) {
                return { ...element, columnSpan: action.payload.count };
              } else {
                return element;
              }
            }),
          };
        } else {
          return row;
        }
      });
    case "changeElementType":
      return state.map((row, rowIndex) => {
        if (rowIndex === action.payload.rowIndex) {
          return {
            ...row,
            elements: row.elements.map((element) => {
              if (element.column === action.payload.columnIndex) {
                return { ...element, type: action.payload.type };
              } else {
                return element;
              }
            }),
          };
        } else {
          return row;
        }
      });
    case "changeElementText":
      return state.map((row, rowIndex) => {
        if (rowIndex === action.payload.rowIndex) {
          return {
            ...row,
            elements: row.elements.map((element) => {
              if (element.column === action.payload.columnIndex) {
                return { ...element, text: action.payload.text };
              } else {
                return element;
              }
            }),
          };
        } else {
          return row;
        }
      });
    case "changeElementImage":
      return state.map((row, rowIndex) => {
        if (rowIndex === action.payload.rowIndex) {
          return {
            ...row,
            elements: row.elements.map((element) => {
              if (element.column === action.payload.columnIndex) {
                return { ...element, image: action.payload.image };
              } else {
                return element;
              }
            }),
          };
        } else {
          return row;
        }
      });
    case "changeElementCategory":
      return state.map((row, rowIndex) => {
        if (rowIndex === action.payload.rowIndex) {
          return {
            ...row,
            elements: row.elements.map((element) => {
              if (element.column === action.payload.columnIndex) {
                return { ...element, category: action.payload.category };
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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imagesLoading, setImagesLoading] = useState(true);
  const [imagesError, setImagesError] = useState(false);
  const [images, setImages] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(
    () =>
      fetch("http://localhost:1337/custom-index/")
        .then((res) => (res.ok ? res.json() : res.json.then(Promise.reject)))
        .then((rows) => {
          dispatch({ type: "init", payload: rows });
          setLoading(false);
        }),
    []
  );
  useEffect(
    () =>
      fetch("http://localhost:1337/upload/files")
        .then((res) => (res.ok ? res.json() : res.json.then(Promise.reject)))
        .then((rows) => {
          setImages({});
          setImagesLoading(false);
        })
        .catch((error) => {
          setError(error);
          setImagesError(true);
          setLoading(false);
        }),
    []
  );

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch("http://localhost:1337/categories/")
      .then((response) => response.json())
      .then((categories) => {
        setCategories(categories);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const addRow = () => {
    dispatch({ type: "addRow" });
  };

  const saveStructure = () => {
    fetch("http://localhost:1337/custom-index/", {
      method: "POST",
      body: JSON.stringify(rows),
    });
  };

  return (
    <div className="claire-container">
      <button className="button-claire" onClick={addRow}>
        Ajouter une rangée
      </button>
      <button className="button-claire" onClick={saveStructure}>
        Sauvegarder
      </button>

      <ul>
        {rows.map((row, rowIndex) => (
          <li>
            <div className="numbers">
              <h3>nombre de colonnes</h3>
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
            </div>
            <ul
              style={{ gridTemplateColumns: `repeat(${row.columnCount}, 1fr)` }}
            >
              {range(row.columnCount)
                .map((_, columnIndex) => {
                  if (
                    row.elements.find(
                      (element) => element.column === columnIndex
                    )
                  ) {
                    return (
                      <Element
                        onTypeChange={(type) => {
                          dispatch({
                            type: "changeElementType",
                            payload: {
                              type: type,
                              rowIndex: rowIndex,
                              columnIndex: columnIndex,
                            },
                          });
                        }}
                        element={row.elements.find(
                          (element) => element.column === columnIndex
                        )}
                        maxColumnSpan={maxColumnSpanForElement(
                          columnIndex,
                          row.columns,
                          row.elements
                        )}
                        onColumnSpanChange={(count) => {
                          dispatch({
                            type: "changeElementColumnSpan",
                            payload: {
                              count: count,
                              rowIndex: rowIndex,
                              columnIndex: columnIndex,
                            },
                          });
                        }}
                        setElementText={(newText) =>
                          dispatch({
                            type: "changeElementText",
                            payload: {
                              text: newText,
                              rowIndex: rowIndex,
                              columnIndex: columnIndex,
                            },
                          })
                        }
                        setElementImage={(newImage) =>
                          dispatch({
                            type: "changeElementImage",
                            payload: {
                              image: newImage,
                              rowIndex: rowIndex,
                              columnIndex: columnIndex,
                            },
                          })
                        }
                        setElementCategory={(newCategory) =>
                          dispatch({
                            type: "changeElementCategory",
                            payload: {
                              category: newCategory,
                              rowIndex: rowIndex,
                              columnIndex: columnIndex,
                            },
                          })
                        }
                        categories={categories}
                      />
                    );
                  }
                  if (!columnOccupied(row.elements, columnIndex)) {
                    return (
                      <li>
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
                      </li>
                    );
                  }
                })
                .filter((node) => node)}
            </ul>
          </li>
        ))}
      </ul>
      <style jsx>{`
        .claire-container {
          display: grid;
          grid-template-columns: 1fr;
          justify-items: center;
          margin: 3rem auto 3rem auto;
          padding: 2rem;
          gap: 2rem;
        }
        .numbers {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .numbers > div {
          display: flex;
          gap: 2rem;
        }
        ul {
          padding: 0;
          gap: 2rem;
        }
        ul > li {
          margin: 0.5rem;
        }
        ul > li > ul {
          display: grid;
          list-style: none;
          justify-content: space-evenly;
          flex-grow: 1;
        }
        ul > li > ul > li {
          padding: 2rem;
          border: 1px solid #e4e4e4;
          border-radius: 5px;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        ul > li {
          display: flex;
          gap: 2rem;
        }
        input[type="number"]::-webkit-inner-spin-button,
        input[type="number"]::-webkit-outer-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        .button-claire {
          width: fit-content;
          padding: 1rem;
          background: #ced9e6;
          border-radius: 30px;
          box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.25),
            -2px -2px 3px 0 rgba(206, 217, 230, 0);
          align-self: center;
        }

        .button-claire:hover {
          box-shadow: 2px 2px 4px 0 rgba(206, 217, 230, 0.25) inset,
            -2px -2px 3px 0 rgba(0, 0, 0, 0.15) inset;
        }
      `}</style>
    </div>
  );
};
export default App;
