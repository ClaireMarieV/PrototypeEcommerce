const DeliveryType = () => (
  <section>
    <h2>Type de livraison</h2>
    <ul>
      <li>
        <input type="checkbox" />
        <label for="scales">Standard à domicile</label>
      </li>
      <li>
        <input type="checkbox" />
        <label for="scales">Livraison en magasin</label>
      </li>
      <li>
        <input type="checkbox" />
        <label for="scales">Point relais</label>
      </li>
    </ul>
    <style jsx>{`
      ul > li {
        display: flex;
        gap: 1rem;
        align-items: center;
        align-content: center;
        justify-items: center;
        padding: 1rem;
      }
      li > input {
        margin: 0;
        border-radius: 100%;
      }
      h2 {
        text-transform: uppercase;
      }
    `}</style>
  </section>
);
export default DeliveryType;
