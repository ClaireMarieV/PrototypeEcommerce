import React, { useState, useEffect, useReducer } from "react";
import Element from "../Element";
import Alert from "../Alert";

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

    case "removeRow":
      return state.slice(0, -1);
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
    case "changeElementProduct":
      return state.map((row, rowIndex) => {
        if (rowIndex === action.payload.rowIndex) {
          return {
            ...row,
            elements: row.elements.map((element) => {
              if (element.column === action.payload.columnIndex) {
                return { ...element, product: action.payload.product };
              } else {
                return element;
              }
            }),
          };
        } else {
          return row;
        }
      });
    case "removeElement":
      return state.map((row, rowIndex) => {
        if (rowIndex === action.payload.rowIndex) {
          return {
            ...row,
            elements: row.elements.filter((element) => {
              if (element.column != action.payload.columnIndex) {
                return true;
              } else {
                return false;
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
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1337/custom-index/")
      .then((res) => (res.ok ? res.json() : res.json.then(Promise.reject)))
      .then((rows) => {
        dispatch({ type: "init", payload: rows });
        setLoading(false);
      });
  }, []);
  useEffect(() => {
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
      });
  }, []);

  useEffect(() => {
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

  useEffect(() => {
    fetch("http://localhost:1337/produits/")
      .then((response) => response.json())
      .then((products) => {
        setProducts(products);
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
  const removeRow = () => {
    dispatch({ type: "removeRow" });
  };

  const saveStructure = () => {
    fetch("http://localhost:1337/custom-index/", {
      method: "POST",
      body: JSON.stringify(rows),
    });
  };

  return (
    <div className="claire-container">
      <div className="buttons-claire">
        <button className="button-claire" onClick={addRow}>
          Ajouter une rangée
        </button>
        {rows.length > 3 && <Alert />}
        <button className="button-claire" onClick={removeRow}>
          Supprimer la derniere rangée
        </button>
        <button className="button-claire" onClick={saveStructure}>
          Sauvegarder
        </button>
      </div>
      <div className="list-rows">
        <ul>
          {rows.map((row, rowIndex) => (
            <li>
              <div className="numbers">
                <h3>nombre de colonnes</h3>
                <div className="buttons">
                  <button
                    className="numbers-button-claire"
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
                    className="numbers-button-claire"
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
                className="ul-elements-claire"
                style={{
                  gridTemplateColumns: `repeat(${row.columnCount}, 1fr)`,
                }}
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
                            row.columnCount,
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
                          setElementProduct={(newProduct) =>
                            dispatch({
                              type: "changeElementProduct",
                              payload: {
                                category: newProduct,
                                rowIndex: rowIndex,
                                columnIndex: columnIndex,
                              },
                            })
                          }
                          categories={categories}
                          products={products}
                          removeElement={() =>
                            dispatch({
                              type: "removeElement",
                              payload: {
                                rowIndex: rowIndex,
                                columnIndex: columnIndex,
                              },
                            })
                          }
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
      </div>
      <style jsx global>{`
        .claire-container {
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: auto;
          padding: 4rem;
          gap: 2rem;
          height: 100vh;
          background: #e7effa;
        }
        .h1-claire {
          font-weight: 600;
        }
        .buttons-claire {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 4rem;
          margin: auto;
        }
        .button {
          color: #242424;
        }
        .button-claire {
          width: fit-content;
          padding: 1rem;
          border-radius: 50px;
          align-self: center;
          background: #e7effa;
          font-weight: 600;
          box-shadow: -10px -10px 30px #f5f9fd, 10px 10px 30px #aeaec040;
        }
        .button-claire:active {
          background: #e7effa;
          box-shadow: inset 0.2rem 0.2rem 0.5rem #aeaec040,
            inset -0.2rem -0.2rem 0.5rem #f5f9fd;
        }
        .numbers {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }
        .numbers > .buttons {
          display: flex;
          gap: 2rem;
        }
        .numbers-button-claire {
          width: fit-content;
          padding: 1rem;
          align-self: center;
          background: #e7effa;
          font-weight: 600;
          box-shadow: -7px -7px 20px #f5f9fd, 7px 7px 20px #aeaec040;
        }
        .numbers-button-claire:active {
          background: #e7effa;
          box-shadow: inset 0.1rem 0.1rem 0.2rem #aeaec040,
            inset -0.1rem -0.1rem 0.2rem #f5f9fd;
        }
        .numbers h3 {
          font-weight: 400;
        }

        .list-rows > button {
          margin: 2rem 0;
          font-weight: 600;
          font-size: 1.6rem;
          padding: 1rem;
        }

        .list-rows > ul {
          padding: 0;
          gap: 4rem;
          display: flex;
          flex-direction: column;
        }
        .list-rows > ul > li {
          gap: 3rem;
          list-style: none;
        }
        .list-rows > ul > li > ul {
          display: grid;
          list-style: none;
          flex-grow: 1;
          gap: 2rem;
        }
        .list-rows > ul > li > ul > li {
          padding: 2rem;
          box-shadow: -5px -5px 15px #f5f9fd, 5px 5px 15px #aeaec040;
          border-radius: 5px;
          display: flex;
          flex-direction: column;
          gap: 3rem;
          align-self: center;
        }
        .list-rows > ul > li {
          display: flex;
          gap: 2rem;
        }
        .list-rows > ul > li > button {
          font-weight: 600;
        }
        input[type="number"]::-webkit-inner-spin-button,
        input[type="number"]::-webkit-outer-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

        @media (max-width: 1250px) {
          .claire-container {
            height: 100%;
          }
          .list-rows > ul > li > ul {
            display: flex;
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};
export default App;
