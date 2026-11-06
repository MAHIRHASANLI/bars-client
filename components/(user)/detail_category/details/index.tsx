import { ProductType } from "@/types/links";
import React from "react";

const DetailsComponent = ({ product }: { product: ProductType }) => {
  return (
    <div className="mt-16 border-t border-gray-200 pt-8">
      <div className="grid gap-10 lg:grid-cols-2">
        <h3 className="text-2xl font-semibold">Texniki göstəricilər</h3>
        <dl className="flex flex-col gap-3 text-base">
          <div className="flex justify-between gap-6 border-b border-dashed border-gray-300 pb-2">
            <dt>Məhsulun adı</dt>
            <dd className="text-right">{product.title}</dd>
          </div>
          <div className="flex justify-between gap-6 border-b border-dashed border-gray-300 pb-2">
            <dt>Təsvir</dt>
            <dd className="text-right">{product.subtitle}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default DetailsComponent;
