import React, { useState } from "react";
import Layout from "../../components/Layout";
import OneColumn from "../../components/OneColumn";

const SuccesPage = () => {
  return (
    <Layout>
      <OneColumn>
        <div>Oh dear... this is an annulation, you're sure?</div>
      </OneColumn>
      <style jsx>{`
        display: flex;
        flex-direction: column;
        margin: 0.5rem 0;
        h2 {
          text-transform: uppercase;
          justify-content: flex-end;
        }
        section {
          gap: 2rem;
        }
        .form {
          display: grid;
          flex-direction: column;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          width: 100%;
        }
        .form div {
          display: flex;
          flex-direction: column;
          margin: 0.5rem;
        }
        section > button {
          width: fit-content;
          align-self: flex-end;
        }
        h2 {
          width: fit-content;
        }
        @media (max-width: 700px) {
          .form {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </Layout>
  );
};
export default SuccesPage;
