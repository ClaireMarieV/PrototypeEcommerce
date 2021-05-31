import React from "react";

const Alert = () => (
  <section className="section-claire">
    <img src="/public/svg/exclamationPoint.svg" />
    <p className="p-claire">
      D'un point de vue utilisateur, il est préférable de n'afficher que 3
      rangées pour une attention plus importante et une mémorisation plus
      efficace des éléments souhaités.
    </p>
    <style jsx>{`
      .section-claire {
        display: flex;
        align-items: center;
        width: 50%;
      }

      .section-claire > img {
        max-width: fit-content;
        width: 10rem;
      }
      .p-claire {
        color: #fb9c43;
        font-weight: 600;
        font-size: 1.5rem;
      }
    `}</style>
  </section>
);
export default Alert;
