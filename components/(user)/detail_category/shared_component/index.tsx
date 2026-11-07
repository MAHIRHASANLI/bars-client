"use client";

import { FiShare } from "react-icons/fi";
import { FaFacebook, FaTelegram } from "react-icons/fa";
import { showToast } from "../../shared/toast";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";

interface Props {
  url: string;
  title: string;
}

const ShareComponent = ({ url, title }: Props) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      showToast("Link kopyalandı.");
    } catch {
      showToast("Linki kopyalamaq alınmadı.");
    }
  };

  const handleShare = async () => {
    // Mobil cihazlarda brauzerin öz paylaşma pəncərəsi
    if (navigator.share) {
      try {
        await navigator.share({ title, url });
      } catch {
        // istifadəçi ləğv etdi
      }
      return;
    }

    // Desktop: linki kopyala
    await copyLink();
  };

  return (
    <div className="flex flex-col gap-3">
      <button
        type="button"
        onClick={handleShare}
        className="flex w-fit items-center gap-2 text-base font-semibold cursor-pointer"
      >
        <FiShare className="size-5 text-(--secondary-color)" />
        Paylaşmaq
      </button>

      <div className="flex items-center gap-3">
        {/* WhatsApp */}
        <a
          href={`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp-da paylaş"
          className="text-gray-500 transition hover:text-[#25D366]"
        >
          <FaWhatsapp className="size-7" />
        </a>{" "}
        {/* Instagram: veb paylaşma linki yoxdur, linki kopyalayır */}
        <button
          type="button"
          onClick={copyLink}
          aria-label="Linki kopyala (Instagram üçün)"
          className="text-gray-500 transition hover:text-[#E4405F]"
        >
          <FaInstagram className="size-7" />
        </button>
        {/* Facebook */}
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook-da paylaş"
          className="text-gray-500 transition hover:text-[#1877F2]"
        >
          <CiFacebook className="size-8" />
        </a>
      </div>
    </div>
  );
};

export default ShareComponent;