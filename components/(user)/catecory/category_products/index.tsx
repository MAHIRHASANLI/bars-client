import { ProductType } from "@/types/links";
import ProductCardComponent from "../../shared/carousels/featured_carousel/feature_carousel_card_component";

const CategoryProductsComponent = ({ products }: { products: ProductType[] }) => {
  return (
    <div className="pt-4 ">
      {/* Yuxarı panel: məhsul sayı + sıralama */}
      <div className="flex items-center justify-between">
        <span className="text-sm text-black  px-2 pr-4">{products.length} Məhsul</span>

        <select
          defaultValue="popular"
          className="h-12 cursor-pointer rounded-sm border border-(--line-color) bg-white px-2 pr-4 text-sm outline-none"
        >
          <option value="popular">Məşhur</option>
          <option value="price-asc">Qiymət: ucuzdan bahaya</option>
          <option value="price-desc">Qiymət: bahadan ucuza</option>
        </select>
      </div>

      {/* Kartlar */}
      <div className="mt-6 grid grid-cols-3 gap-x-6 gap-y-10 max-[1100px]:grid-cols-2 max-[700px]:grid-cols-1">
        {products.map((item,i) => (
          <ProductCardComponent key={i} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CategoryProductsComponent;