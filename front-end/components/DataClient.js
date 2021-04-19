import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import sub from "date-fns/sub";
import ProductList from "../components/ProductList";

const DataClient = () => {
  const [name, setName] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const oneWeekAgo = sub(new Date(), {
    months: 1,
  });

  return <Layout></Layout>;
};
export default DataClient;
