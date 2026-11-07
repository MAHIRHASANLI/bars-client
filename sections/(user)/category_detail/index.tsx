import Image from "next/image";
import { notFound } from "next/navigation";
import { productDatas } from "@/api/linklerin_muveqqeti_yerlesmesi";
import StickyBasketBarComponent from "@/components/(user)/detail_category/sticky_basket_bar";
import DetailsComponent from "@/components/(user)/detail_category/details";
import QuantitySelectorComponent from "@/components/(user)/shared/quantity_selector";
import LikeButtonComponent from "@/components/(user)/shared/buttons/btn_like";
import { IoStorefrontOutline } from "react-icons/io5";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdOutlineSecurity } from "react-icons/md";
import ShareComponent from "@/components/(user)/detail_category/shared_component";

interface Props {
  productId: string;
  categoryPathname?: string;
}

const ProductDetailSection = ({ productId, categoryPathname }: Props) => {
  const product = productDatas.find((item) => item.id.toString() === productId);

  // Məhsul tapılmadısa 404
  if (!product) notFound();

  const hasDiscount =
    typeof product.oldPrice === "number" && product.oldPrice > product.price;

  // Paylaşma üçün tam URL
  const productUrl = `${process.env.NEXT_PUBLIC_SITE_URL}${categoryPathname}/${product.id}`;

  return (
    <section className="mx-auto max-w-7xl px-4 py-10">
      <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">
        {/* Sol: şəkillər yuxarıdan aşağı */}
        <div className="flex flex-col gap-4">
          {product.imgUrls.map((src, i) => (
            <div
              key={i}
              className="flex items-center justify-center rounded-2xl bg-gray-50 p-6"
            >
              <Image
                src={src}
                alt={`${product.title} - ${i + 1}`}
                priority={i === 0}
                className="max-h-130 w-auto object-contain"
              />
            </div>
          ))}
        </div>

        {/* Sağ: məlumat */}
        <div className="flex flex-col gap-6 lg:sticky lg:top-4 lg:self-start">
          <div className="flex flex-col gap-3">
            {product.badge && (
              <span className="w-fit rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold uppercase text-white">
                {product.badge}
              </span>
            )}
            <h1 className="line-clamp-1 text-3xl font-bold leading-tight lg:text-4xl">
              {product.title}
            </h1>
            <p className="line-clamp-2 text-base text-gray-600">
              {product.subtitle}
            </p>
            <p className="text-sm text-gray-500">Kod: {product.id}</p>
          </div>

          {/* Seçilmişlər */}
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <LikeButtonComponent />
            Seçilmişlərə at
          </div>

          {/* Qiymət */}
          <div className="flex items-baseline gap-3">
            <p className="text-3xl font-bold">{product.price} ₼</p>
            {hasDiscount && (
              <p className="text-lg text-gray-400 line-through">
                {product.oldPrice} ₼
              </p>
            )}
          </div>

          {/* Miqdar */}
          <div>
            <span className="block mb-2 font-semibold">Miqdarı</span>
            <QuantitySelectorComponent item={product} />
          </div>

          {/* Çatdırılma */}
          <div className="flex flex-col gap-3">
            <p className="text-lg font-semibold">Çatdırılma</p>
            <div className="flex flex-col gap-1 text-sm">
              <div>
                <p className="font-semibold flex gap-2 items-center text-sm">
                  <IoStorefrontOutline className="text-(--secondary-color) size-5" />{" "}
                  Özün götürmə
                </p>
                <p className="text-green-700 pl-7 mt-px">
                  Mağazadan təhvil almaq mümkün olacaq.
                </p>
              </div>
              <p className="font-semibold flex gap-2 items-center text-sm mt-2">
                <CiDeliveryTruck className="text-(--secondary-color) size-5" />
                Çatdırılma
              </p>
            </div>
          </div>

          <p className="flex items-center gap-2 text-lg font-semibold">
            <MdOutlineSecurity className="text-(--secondary-color) size-5" />{" "}
            Rəsmi zəmanət — 12 ayadək
          </p>

          {/* Paylaşmaq + sosial şəbəkələr */}
          <ShareComponent url={productUrl} title={product.title} />
        </div>
      </div>

      {/* Ətraflı */}
      <DetailsComponent product={product} />

      {/* Aşağıda sabit səbət paneli */}
      <StickyBasketBarComponent product={product} hasDiscount={hasDiscount} />
    </section>
  );
};

export default ProductDetailSection;