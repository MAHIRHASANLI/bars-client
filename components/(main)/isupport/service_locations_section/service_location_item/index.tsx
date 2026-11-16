import { ServiceLocationType } from "@/types/links";

// Bir şirkətin əlaqə məlumatlarını göstərən kart
const ServiceLocationItem = ({
  name,
  address,
  phones,
  email,
  workingHours,
  website,
  icons,
}: ServiceLocationType) => {
  const AddressIcon = icons.address;
  const PhoneIcon = icons.phone;
  const EmailIcon = icons.email;
  const ClockIcon = icons.workingHours;
  const WebsiteIcon = icons.website;

  return (
    <article className="flex h-full flex-col gap-4 rounded-2xl border border-gray-200 p-6 max-[800px]:py-4 max-[800px]:gap-2">
      <h3 className="text-xl font-semibold max-[800px]:text-lg">{name}</h3>

      <div className="flex items-start gap-3">
        <AddressIcon className="mt-1 shrink-0 text-(--logo-color) max-[800px]:mt-0 max-[800px]:size-4" />
        <p className="text-sm max-[800px]:text-xs text-gray-600">{address}</p>
      </div>

      <div className="flex items-start gap-3">
        <PhoneIcon className="mt-1 shrink-0 text-(--logo-color) max-[800px]:mt-0 max-[800px]:size-4" />
        <div className="flex flex-col gap-1 text-sm max-[800px]:text-xs text-gray-600">
          {phones.map((phone) => (
            <a
              key={phone}
              href={`tel:${phone.replace(/\s/g, "")}`}
              className="hover:text-(--logo-color)"
            >
              {phone}
            </a>
          ))}
        </div>
      </div>

      <div className="flex items-start gap-3">
        <EmailIcon className="mt-1 shrink-0 text-(--logo-color) max-[800px]:mt-0 max-[800px]:size-4" />
        <a
          href={`mailto:${email}`}
          className="break-all text-sm max-[800px]:text-xs text-gray-600 hover:text-(--logo-color)"
        >
          {email}
        </a>
      </div>

      <div className="flex items-start gap-3">
        <ClockIcon className="mt-1 shrink-0 text-(--logo-color) max-[800px]:mt-0 max-[800px]:size-4" />
        <p className="text-sm max-[800px]:text-xs text-gray-600">
          {workingHours.map((hours, index) => (
            <span key={hours}>
              {hours}
              {index < workingHours.length - 1 && <br />}
            </span>
          ))}
        </p>
      </div>

      <a
        href={website}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto flex items-center gap-3 text-sm max-[800px]:text-xs text-(--logo-color) hover:underline"
      >
        <WebsiteIcon />
        {website.replace(/^https?:\/\//, "").replace(/\/az\/?$/, "")}
      </a>
    </article>
  );
};

export default ServiceLocationItem;
