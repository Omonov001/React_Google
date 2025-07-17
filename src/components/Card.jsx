import { Cards } from "./constants";

function Card() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-40  justify-between pt-10 pb-10">
        {Cards.map((item, idx) => {
          return (
            <div key={idx} className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img src={item.img} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.titles}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Card;
