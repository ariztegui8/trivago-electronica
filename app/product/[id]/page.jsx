"use client"
import useDefault from '@/app/hooks/useDefault';
import { useParams } from 'next/navigation';
import React from 'react';

const ProductId = () => {
  const { cards } = useDefault();
  console.log('cards', cards);

  const { id } = useParams();

  const product = cards.find((card) => card.sys.id === id);

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="card bg-base-100 flex items-center justify-center gap-4 w-full p-8">
          <div className="flex justify-center flex-1 w-full">
            <div className="card w-3/4 bg-base-100 border-2 border-[#ECEDFD]">
              <figure>
                <img
                  className="w-full h-40 object-contain sm:h-52"
                  src={product.fields.image.fields.file.url}
                  alt={product.fields.title}
                />
              </figure>
              <div className="card-body p-4 md:p-8 bg-gray-50">
                <h2 className="card-title text-xl font-bold text-custom-black">
                  {product.fields.title}
                </h2>
                <p>{product.fields.description}</p>
              </div>
            </div>
          </div>
        </div>
  );
};

export default ProductId;
