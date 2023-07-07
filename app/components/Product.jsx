import { useRouter } from 'next/navigation';
import useDefault from '../hooks/useDefault';

const Product = () => {

  const router = useRouter();
  
  const {cards} = useDefault()

  const handleCardClick = (id) => {
    router.push(`/product/${id}`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-6">
      {cards.map((data) => (
        <div
          key={data.sys.id}
          className="card bg-base-100 flex items-center justify-center gap-4 w-full "
        >
          <div className="flex justify-center flex-1">
            <div className="card w-80 bg-base-100 border-2 border-[#ECEDFD]">
              <figure>
                <img
                  className="w-full h-40 object-contain sm:h-52"
                  src={data.fields.image.fields.file.url}
                  alt={data.fields.title}
                />
              </figure>
              <div
                onClick={() => handleCardClick(data.sys.id)}
                className="card-body p-4 md:p-8 hover:bg-gray-50 cursor-pointer"
              >
                <h2 className="card-title text-xl font-bold text-custom-black">
                  {data.fields.title}
                </h2>
                <p>{data.fields.description}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">
                    {data.fields.button}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
